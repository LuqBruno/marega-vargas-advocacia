import Image from 'next/image';
import type { Metadata } from 'next';
import { contentTopics, office, practiceAreas, profile, whatsappHref } from '../site-data';
import SiteHeader from '../components/site-header';
import OfficeLogo from '../components/office-logo';
import ProfileContact from '../components/profile-contact';

export const metadata: Metadata = {
  title: 'Alice Vargas | Família e Sucessões — Maréga e Vargas',
  description: 'Alice Vargas, OAB/SC nº 43413. Direito de Família e Sucessões em Tubarão/SC, com atuação em todo o território nacional.',
  alternates: { canonical: '/alice-vargas' },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  jobTitle: profile.title,
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${office.street}, ${office.complement}, ${office.neighborhood}`,
    addressLocality: office.city,
    addressRegion: office.state,
    postalCode: office.postalCode,
    addressCountry: 'BR',
  },
  worksFor: { '@type': 'Organization', name: office.name },
  sameAs: [profile.instagram, profile.jusbrasil],
};

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#principal">Pular para o conteúdo</a>
      <SiteHeader contactHref={whatsappHref} />
      <main id="principal" tabIndex={-1}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section id="inicio" className="hero" aria-labelledby="hero-title" tabIndex={-1}>
        <div className="hero-intro">
          <p className="eyebrow">Alice Vargas · Família e Sucessões</p>
          <h1 id="hero-title">
            Direito para <em>reorganizar</em> o que muda em família.
          </h1>
          <div className="hero-bottom">
            <p>
              Orientação jurídica clara e cuidadosa para decisões que envolvem
              vínculos, patrimônio e o futuro da sua família.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Conversar com Alice no WhatsApp (abre em nova aba)">Conversar no WhatsApp <span aria-hidden="true">↗</span></a>
              <a className="text-link" href="#atuacao">Conhecer a atuação <span aria-hidden="true">↓</span></a>
            </div>
          </div>
        </div>

        <figure className="hero-portrait">
          <Image
            src="/images/client/alice/alice-vargas-05-hd.webp"
            alt="Retrato profissional da advogada Alice Vargas"
            fill
            priority
            sizes="(max-width: 760px) 100vw, (max-width: 1600px) 46vw, 736px"
          />
        </figure>
      </section>

      <div className="credentials-bar" aria-label="Informações profissionais">
        <span>Direito de Família e Sucessões</span>
        <span>{profile.coverage}</span>
        <span>Escritório em {profile.location}</span>
      </div>

      <section id="atuacao" className="practice-section light-chapter section-shell" aria-labelledby="practice-title" tabIndex={-1}>
        <header className="section-heading">
          <div>
            <p className="eyebrow">Áreas de atuação</p>
          </div>
          <h2 id="practice-title">Orientação para decisões que reorganizam a vida em família.</h2>
        </header>

        <div className="practice-layout">
          <div className="practice-intro">
            <p>
              Cada família tem uma história. A orientação começa entendendo o contexto,
              os documentos e o que precisa ser protegido.
            </p>
            <a className="text-link" href="#contato">
              Informações de atendimento <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="practice-list">
            {practiceAreas.map((area) => (
              <article className="practice-item" key={area.title}>
                <span className="practice-number">{area.number}</span>
                <div>
                  <h3>{area.title}</h3>
                  <p>{area.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="sobre" className="about-section" aria-labelledby="about-title" tabIndex={-1}>
        <div className="about-photo primary-photo">
          <Image
            src="/images/client/alice/alice-vargas-07-hd.webp"
            alt="Retrato profissional da advogada Alice Vargas em seu escritório"
            fill
            sizes="(max-width: 760px) 90vw, (max-width: 1600px) 36vw, 540px"
          />
        </div>
        <div className="about-copy">
          <p className="eyebrow">Alice Vargas · {profile.oab}</p>
          <h2 id="about-title">Clareza para decidir. Sensibilidade para conduzir.</h2>
          <div className="about-narrative">
            <p>Alice Vargas é graduada em Direito, Pós-Graduada em Direito Processual Civil e Pós-Graduada em Direito de Família e Sucessões.</p>
            <p>Há mais de 12 anos na advocacia, construiu sua trajetória profissional no atendimento especializado de questões familiares e sucessórias, aliando conhecimento técnico, atuação estratégica e proximidade com as particularidades de cada caso.</p>
            <p>Professora Universitária, Mentora de Jovens Advogados da Subseção de Tubarão/SC e membro do Instituto Brasileiro de Direito de Família, desenvolve uma advocacia pautada na técnica, na confiança e na busca de soluções seguras e eficientes.</p>
          </div>
        </div>
      </section>

      <section id="conteudo" className="content-section section-shell" aria-labelledby="content-title" tabIndex={-1}>
        <header className="section-heading content-heading">
          <div>
            <p className="eyebrow">Informação também acolhe</p>
          </div>
          <div>
            <h2 id="content-title">Informação para compreender o que importa.</h2>
            <p className="heading-copy">
              Herança, filhos, bens e separação: temas do cotidiano abordados
              no perfil profissional da Alice.
            </p>
          </div>
        </header>

        <div className="content-track" aria-label="Temas publicados por Alice">
          {contentTopics.map((topic) => (
            <a
              className="content-card"
              href={profile.instagram}
              target="_blank"
              rel="noreferrer"
              key={topic.image}
              aria-label={`${topic.label}: explorar o perfil da Alice no Instagram (abre em nova aba)`}
            >
              <div className="content-image">
                <Image src={topic.image} alt={topic.alt} fill sizes="(max-width: 560px) 108px, (max-width: 1600px) 29vw, 440px" />
              </div>
              <strong>{topic.label}</strong>
              <small>Explorar no perfil <span aria-hidden="true">↗</span></small>
            </a>
          ))}
        </div>
      </section>

      <section className="process-section light-chapter section-shell" aria-labelledby="process-title">
        <div className="process-intro">
          <p className="eyebrow light">Antes da consulta</p>
          <h2 id="process-title">O primeiro passo pode ser simples.</h2>
        </div>
        <ol className="process-steps">
          <li>
            <span>01</span>
            <div><strong>Inicie a conversa</strong><p>Entre em contato pelo WhatsApp e informe o assunto geral.</p></div>
          </li>
          <li>
            <span>02</span>
            <div><strong>Combine o atendimento</strong><p>Confirme a disponibilidade, a modalidade e as condições da consulta.</p></div>
          </li>
          <li>
            <span>03</span>
            <div><strong>Prepare-se para a consulta</strong><p>Reúna os documentos solicitados e compartilhe-os apenas pelo canal combinado.</p></div>
          </li>
        </ol>
      </section>

      <ProfileContact
        name={profile.name}
        oab={profile.oab}
        heading="Vamos conversar sobre o seu próximo passo?"
        description="Converse com Alice para consultar a disponibilidade e combinar o atendimento. Comece pelo assunto geral, preservando seus dados pessoais."
        whatsapp={profile.whatsapp}
        whatsappHref={whatsappHref}
        instagram={profile.instagram}
      />
      </main>

      <footer className="site-footer">
        <a className="footer-brand" href="#inicio" aria-label="Maréga e Vargas — voltar ao início da página de Alice Vargas"><OfficeLogo light /></a>
        <div className="footer-links">
          <a href={profile.instagram} target="_blank" rel="noreferrer" aria-label="Instagram da Alice (abre em nova aba)">Instagram ↗</a>
          <a href={profile.jusbrasil} target="_blank" rel="noreferrer" aria-label="Perfil profissional no Jusbrasil (abre em nova aba)">Jusbrasil ↗</a>
          <a href="#inicio">Voltar ao início ↑</a>
        </div>
        <p className="legal-note">
          Conteúdo informativo. Cada caso exige análise individual, sem garantia de resultado.
        </p>
      </footer>

      <a className="whatsapp-contact" href={whatsappHref} target="_blank" rel="noopener noreferrer" aria-label="Conversar com Alice no WhatsApp (abre em nova aba)">
        WhatsApp da Alice <span aria-hidden="true">↗</span>
      </a>
    </>
  );
}
