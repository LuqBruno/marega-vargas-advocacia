import type { Metadata } from 'next';
import Image from 'next/image';
import { assetPath } from '../asset-path';
import Link from 'next/link';
import SiteHeader from '../components/site-header';
import OfficeLogo from '../components/office-logo';
import ProfileContact from '../components/profile-contact';
import { hellenPractice, hellenProfile, hellenWhatsappHref } from '../hellen-data';

export const metadata: Metadata = {
  title: 'Hellen Maréga | Direito Civil e Empresarial — Maréga e Vargas',
  description: 'Hellen Maréga, OAB/SC nº 40.580. Advogada especialista em Direito Civil e Empresarial no escritório Maréga e Vargas, em Tubarão/SC.',
  alternates: { canonical: '/hellen-marega' },
  openGraph: { images: [assetPath('/images/client/hellen/hellen-1.jpg')] },
};

const hellenSections = [
  ['#atuacao', 'Áreas de atuação'], ['#sobre', 'Sobre Hellen'], ['#conteudo', 'Conteúdos'], ['#contato', 'Contato'],
] as const;

const hellenPosts = [
  { image: '/images/instagram/hellen-inventarios.webp', label: 'Inventários', alt: 'Publicação de Hellen: faleceu alguém da sua família? É importante saber o que vem depois.', href: 'https://www.instagram.com/p/DNoWt3XuIEj/' },
  { image: '/images/instagram/hellen-negocios.webp', label: 'Negócios', alt: 'Publicação de Hellen sobre negócio proibido entre cônjuges.', href: 'https://www.instagram.com/p/DGikbqMulkS/' },
  { image: '/images/instagram/hellen-patrimonio.webp', label: 'Patrimônio', alt: 'Publicação de Hellen sobre cláusula de inalienabilidade como ferramenta de proteção do patrimônio.', href: 'https://www.instagram.com/p/DChE6QYvW6N/' },
] as const;

export default function HellenPage() {
  return (
    <>
      <a className="skip-link" href="#principal">Pular para o conteúdo</a>
      <SiteHeader sections={hellenSections} contactHref={hellenWhatsappHref} contextLabel="página de Hellen Maréga" />
      <main id="principal" className="hellen-page" tabIndex={-1}>
        <section id="inicio" className="hellen-hero" aria-labelledby="hellen-title">
          <div className="hellen-hero-copy">
            <p className="eyebrow">Hellen Maréga · Civil e Empresarial</p>
            <h1 id="hellen-title">Direito para <em>decidir com clareza</em> o próximo movimento.</h1>
            <p>Orientação técnica para compreender riscos, avaliar caminhos e tomar decisões civis e empresariais de forma consciente.</p>
            <div className="hero-actions"><a className="primary-button" href={hellenWhatsappHref} target="_blank" rel="noopener noreferrer">Conversar com Hellen <span aria-hidden="true">↗</span></a><a className="text-link" href="#atuacao">Conhecer a atuação <span aria-hidden="true">↓</span></a></div>
          </div>
          <figure className="hellen-hero-photo">
            <Image src={assetPath('/images/client/hellen/hellen-1.jpg')} alt="Retrato profissional de Hellen Maréga" fill priority sizes="(max-width: 760px) 100vw, 46vw" />
          </figure>
        </section>

        <div className="credentials-bar hellen-credentials"><span>Direito Civil e Empresarial</span></div>

        <section id="atuacao" className="hellen-practice light-chapter section-shell" aria-labelledby="hellen-practice-title">
          <header className="section-heading"><div><p className="eyebrow">Áreas de atuação</p></div><h2 id="hellen-practice-title">Orientação para decidir. Estratégia para agir</h2></header>
          <div className="hellen-practice-grid">
            {hellenPractice.map(area => <article key={area.title}><span className="practice-number">{area.number}</span><h3>{area.title}</h3><p>{area.text}</p></article>)}
          </div>
          <p className="scope-note">As áreas acima refletem a especialização e os temas profissionais publicados por Hellen. A pertinência ao caso concreto é confirmada no atendimento.</p>
        </section>

        <section id="sobre" className="hellen-about" aria-labelledby="hellen-about-title">
          <div className="hellen-editorial-photo"><Image src={assetPath('/images/client/hellen/hellen-2.jpg')} alt="Retrato profissional de Hellen Maréga" fill sizes="(max-width: 760px) 100vw, 44vw" /></div>
          <div className="hellen-about-copy"><p className="eyebrow">Hellen Maréga · {hellenProfile.oab}</p><h2 id="hellen-about-title">Técnica para orientar. Transparência para apresentar riscos e soluções.</h2><p>Pós-graduada e especialista em Direito Civil e Empresarial, Hellen Maréga possui mais de 12 anos de experiência jurídica e atua como Mentora de Jovens Advogados na Subseção de Tubarão/SC.</p><p>Sua atuação prioriza a análise criteriosa e a estratégia individualizada para cada caso.</p></div>
        </section>

        <section id="conteudo" className="hellen-perspective section-shell" aria-labelledby="perspective-title">
          <header><p className="eyebrow">Conhecimento fornece segurança.</p><h2 id="perspective-title">A escolha deixa de ser impulsiva e passa a ser consciente.</h2></header>
          <div className="office-article-grid hellen-posts" aria-label="Publicações de Hellen no Instagram">
            {hellenPosts.map(post => <a key={post.href} className="office-article" href={post.href} target="_blank" rel="noopener noreferrer" aria-label={`${post.label}: explorar publicação de Hellen no Instagram (abre em nova aba)`}><div><Image src={assetPath(post.image)} alt={post.alt} fill sizes="(max-width: 760px) 28vw, 30vw" /></div><h3>{post.label}</h3><span>Explorar no perfil ↗</span></a>)}
          </div>
          <a className="text-link perspective-link" href={hellenProfile.instagram} target="_blank" rel="noopener noreferrer">Explorar no perfil <span aria-hidden="true">↗</span></a>
        </section>
        <section className="process-section light-chapter section-shell" aria-labelledby="hellen-process-title">
          <div className="process-intro">
            <p className="eyebrow">Antes da consulta</p>
            <h2 id="hellen-process-title">O primeiro passo pode ser simples.</h2>
          </div>
          <ol className="process-steps">
            <li><span>01</span><div><strong>Inicie a conversa</strong><p>Entre em contato pelo WhatsApp e informe o assunto geral.</p></div></li>
            <li><span>02</span><div><strong>Combine o atendimento</strong><p>Confirme a disponibilidade, a modalidade e as condições da consulta.</p></div></li>
            <li><span>03</span><div><strong>Prepare-se para a consulta</strong><p>Reúna os documentos solicitados e compartilhe-os apenas pelo canal combinado.</p></div></li>
          </ol>
        </section>
        <ProfileContact
          name={hellenProfile.name}
          oab={hellenProfile.oab}
          heading="O que fazer para conversar sobre o meu caso?"
          description="Entre em contato com Hellen para consultar disponibilidade e programar a análise do caso. Comece pelo assunto geral e preserve seus dados pessoais."
          whatsapp={hellenProfile.whatsapp}
          whatsappHref={hellenWhatsappHref}
          instagram={hellenProfile.instagram}
        />
      </main>

      <footer className="site-footer"><Link className="footer-brand" href="/"><OfficeLogo light /></Link><div className="footer-links"><a href={hellenProfile.instagram} target="_blank" rel="noopener noreferrer">Instagram ↗</a><Link href="/">Conhecer o escritório ↗</Link><a href="#inicio">Voltar ao início ↑</a></div><p className="legal-note">Conteúdo informativo. Cada caso exige análise individual, sem garantia de resultado.</p></footer>
      <a className="whatsapp-contact" href={hellenWhatsappHref} target="_blank" rel="noopener noreferrer">WhatsApp da Hellen <span aria-hidden="true">↗</span></a>
    </>
  );
}
