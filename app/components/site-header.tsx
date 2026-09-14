'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import OfficeLogo from './office-logo';

const aliceSections = [
  ['#atuacao', 'Áreas de atuação'],
  ['#sobre', 'Sobre Alice'],
  ['#conteudo', 'Conteúdos'],
  ['#contato', 'Contato'],
] as const;

type HeaderProps = {
  sections?: ReadonlyArray<readonly [string, string]>;
  contactHref?: string;
  contactLabel?: string;
  contextLabel?: string;
  brandLabel?: string;
};

export default function SiteHeader({
  sections = aliceSections,
  contactHref = '#contato',
  contactLabel = 'Agendar uma consulta',
  contextLabel = 'página de Alice Vargas',
  brandLabel,
}: HeaderProps) {
  const menu = useRef<HTMLDetailsElement>(null);
  const trigger = useRef<HTMLElement>(null);

  useEffect(() => {
    function dismiss(event: PointerEvent) {
      if (menu.current && !menu.current.contains(event.target as Node)) menu.current.open = false;
    }
    function escape(event: KeyboardEvent) {
      if (event.key === 'Escape' && menu.current?.open) {
        menu.current.open = false;
        trigger.current?.focus();
      }
    }
    document.addEventListener('pointerdown', dismiss);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', dismiss);
      document.removeEventListener('keydown', escape);
    };
  }, []);

  const externalContact = /^https?:\/\//.test(contactHref);
  const contactAttributes = externalContact
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {};

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label={brandLabel ?? `Maréga e Vargas — sair da ${contextLabel} e ir ao escritório`}>
        <OfficeLogo light />
      </Link>
      <nav className="desktop-nav" aria-label="Navegação principal">
        {sections.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
      </nav>
      <a className="header-cta" href={contactHref} {...contactAttributes}>{contactLabel} <span aria-hidden="true">↗</span></a>
      <details className="mobile-nav" ref={menu}>
        <summary ref={trigger}>Menu <span aria-hidden="true">+</span></summary>
        <nav aria-label="Navegação no celular" onClick={(event) => {
          if ((event.target as HTMLElement).closest('a') && menu.current) menu.current.open = false;
        }}>
          {sections.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
          <a href={contactHref} {...contactAttributes}>{contactLabel} <span aria-hidden="true">↗</span></a>
        </nav>
      </details>
    </header>
  );
}
