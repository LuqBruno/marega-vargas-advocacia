'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { animate, inView } from 'motion';

// Acabamento leve com Motion (06/10/2026): entrada curta, uma vez, só para o que está abaixo da primeira tela.
// Não altera texto, rotas nem ordem. O conteúdo já está no HTML; sem JS ou com movimento reduzido nada é ocultado.
// Antes de entrar, os itens ficam atenuados (nunca invisíveis), para que capturas de página inteira e impressão continuem legíveis.
const targets: ReadonlyArray<{ selector: string; columns: number; distance: number }> = [
  { selector: '.office-area-row', columns: 1, distance: 18 },
  { selector: '.professional-profile', columns: 1, distance: 24 },
  { selector: '.office-article', columns: 3, distance: 16 },
  { selector: '.content-card', columns: 3, distance: 16 },
  { selector: '.hellen-practice-grid > article', columns: 2, distance: 16 },
  { selector: '.about-photo.primary-photo, .hellen-editorial-photo', columns: 1, distance: 20 },
];
const ease = [0.23, 1, 0.32, 1] as const;
const dimmed = 0.28;

export default function MotionFinish() {
  const pathname = usePathname();

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const stops: Array<() => void> = [];
    const touched: HTMLElement[] = [];

    for (const { selector, columns, distance } of targets) {
      document.querySelectorAll<HTMLElement>(selector).forEach((element, index) => {
        // Já visível na abertura: não esconde nada que o visitante está vendo.
        if (element.getBoundingClientRect().top < window.innerHeight * 0.92) return;
        element.style.opacity = String(dimmed);
        element.style.transform = `translateY(${distance}px)`;
        touched.push(element);
        const stop = inView(element, () => {
          stop();
          const delay = (index % columns) * 0.07;
          const controls = animate(element, { opacity: [dimmed, 1], transform: [`translateY(${distance}px)`, 'translateY(0px)'] }, { duration: 0.7, delay, ease });
          // Devolve o controle ao CSS (hover, elevação das capas) assim que a entrada termina.
          controls.finished.then(() => { element.style.removeProperty('opacity'); element.style.removeProperty('transform'); }, () => {});
        }, { margin: '0px 0px -8% 0px' });
        stops.push(stop);
      });
    }

    const restore = () => touched.forEach(element => { element.style.removeProperty('opacity'); element.style.removeProperty('transform'); });
    window.addEventListener('beforeprint', restore);
    return () => {
      window.removeEventListener('beforeprint', restore);
      stops.forEach(stop => stop());
      touched.forEach(element => { element.style.removeProperty('opacity'); element.style.removeProperty('transform'); });
    };
  }, [pathname]);

  return null;
}
