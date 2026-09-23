import Image from 'next/image';
import { assetPath } from './asset-path';
import Link from 'next/link';
import LocationMap from './components/location-map';
import OfficeLogo from './components/office-logo';
import SiteHeader from './components/site-header';
import { contentTopics, office, profile } from './site-data';
import { hellenPosts, hellenProfile } from './hellen-data';

const officeNav = [
  ['#inicio', 'Escritório'],
  ['#areas', 'Áreas de atuação'],
  ['#profissionais', 'Profissionais'],
  ['#contato', 'Contato'],
] as const;

const officeArticles = [
  { ...contentTopics[0], author: 'Alice Vargas', href: profile.instagram },
  { ...contentTopics[1], author: 'Alice Vargas', href: profile.instagram },
  { ...contentTopics[2], author: 'Alice Vargas', href: profile.instagram },
  ...hellenPosts.map((post) => ({ ...post, image: assetPath(post.image), author: 'Hellen Maréga' })),
] as const;

export default function OfficeHome() {
  return (
    <>
      <a className="skip-link" href="#principal">Pular para o conteúdo</a>
      <SiteHeader
        sections={officeNav}
        contactHref="#contato"
        contactLabel="Agendar uma consulta"
        contextLabel="página do escritório"
        brandLabel="Maréga e Vargas — início"
      />

      <main id="principal" className="office-home" tabIndex={-1}>
        <section id="inicio" className="office-hero" aria-labelledby="office-title">
          <div className="office-hero-copy">
            <h1 id="office-title">Família, patrimônio,<br /><em>negócios e contratos.</em></h1>
          </div>
        </section>

        <section id="areas" className="office-areas section-shell" aria-label="Áreas de atuação">
          <header className="office-section-intro">
            <p className="eyebrow">Áreas de atuação</p>
          </header>
          <div className="office-area-list">
            <Link href="/alice-vargas#atuacao" className="office-area-row">
              <span className="practice-number">01</span>
              <div><small>Alice Vargas</small><h3>Direito de Família e Sucessões</h3><p>Divórcio, pensão alimentícia, guarda e convivência, paternidade, inventário e testamento.</p></div>
              <strong aria-hidden="true">↗</strong>
            </Link>
            <Link href="/hellen-marega#atuacao" className="office-area-row">
              <span className="practice-number">02</span>
              <div><small>Hellen Maréga</small><h3>Direito Civil e Empresarial</h3><p>Contratos, indenizações, inventários e negócios</p></div>
              <strong aria-hidden="true">↗</strong>
            </Link>
          </div>
        </section>

        <section id="profissionais" className="office-professionals" aria-label="Quem somos">
          <header className="professionals-copy">
            <p className="eyebrow">Quem somos</p>
          </header>

          <div className="professional-profiles">
            <article className="professional-profile">
              <Link className="professional-photo" href="/alice-vargas" aria-label="Conhecer Alice Vargas e sua atuação">
                <Image src={assetPath('/images/client/alice/alice-vargas-07-hd.webp')} alt="Retrato profissional de Alice Vargas" fill sizes="(max-width: 760px) 100vw, 42vw" />
              </Link>
              <div className="professional-copy">
                <p className="eyebrow">Família e Sucessões</p>
                <h3>Alice Vargas</h3>
                <small>{profile.oab}</small>
                <p>Graduada em Direito, Pós-Graduada em Direito Processual Civil e em Direito de Família e Sucessões. Há mais de 12 anos atua em questões familiares e sucessórias.</p>
                <p>Professora Universitária, Mentora de Jovens Advogados da Subseção de Tubarão/SC e membro do Instituto Brasileiro de Direito de Família (IBDFAM).</p>
                <Link className="text-link" href="/alice-vargas#atuacao">Conhecer a atuação de Alice <span aria-hidden="true">↗</span></Link>
              </div>
            </article>

            <article className="professional-profile professional-profile-reverse">
              <Link className="professional-photo" href="/hellen-marega" aria-label="Conhecer Hellen Maréga e sua atuação">
                <Image src={assetPath('/images/client/hellen/hellen-1.jpg')} alt="Retrato profissional de Hellen Maréga" fill sizes="(max-width: 760px) 100vw, 42vw" />
              </Link>
              <div className="professional-copy">
                <p className="eyebrow">Civil e Empresarial</p>
                <h3>Hellen Maréga</h3>
                <small>{hellenProfile.oab}</small>
                <p>Graduada em Direito, Pós-Graduada e Especialista em Direito Civil e Empresarial e Mentora de Jovens Advogados da Subseção de Tubarão/SC.</p>
                <Link className="text-link" href="/hellen-marega#atuacao">Conhecer a atuação de Hellen <span aria-hidden="true">↗</span></Link>
              </div>
            </article>
          </div>
        </section>

        <section id="conteudos" className="office-content section-shell" aria-labelledby="content-title">
          <header className="office-section-intro">
            <p className="eyebrow">Conteúdo jurídico</p>
            <div><h2 id="content-title">Conteúdo jurídico no Instagram.</h2><p>Uma seleção de temas publicados nos perfis profissionais de Alice e Hellen.</p></div>
          </header>
          <div className="office-article-grid">
            {officeArticles.map((article) => (
              <a key={`${article.author}-${article.label}`} href={article.href} target="_blank" rel="noopener noreferrer" className="office-article">
                <div><Image src={article.image} alt={article.alt} fill sizes="(max-width: 760px) 28vw, 31vw" /></div>
                <small>{article.author}</small>
                <h3>{article.label}</h3>
                <span>Ver no Instagram ↗</span>
              </a>
            ))}
          </div>
        </section>

        <section id="contato" className="office-contact" aria-labelledby="office-contact-title">
          <div className="office-contact-copy">
            <OfficeLogo light />
            <p className="eyebrow">Contato</p>
            <h2 id="office-contact-title">Agende uma consulta.</h2>
            <p>Escolha a área para consultar disponibilidade e combinar o atendimento diretamente pelo WhatsApp.</p>
            <div className="office-contact-links">
              <Link href="/alice-vargas#contato">Família e Sucessões <span aria-hidden="true">↗</span></Link>
              <Link href="/hellen-marega#contato">Civil e Empresarial <span aria-hidden="true">↗</span></Link>
            </div>
          </div>
          <div className="office-address">
            <address>{office.street}<br />{office.complement}<br />{office.neighborhood} · {office.city}/{office.state}<br />CEP {office.postalCode}</address>
            <p><strong>Horário de atendimento</strong><span>{office.hours}</span></p>
          </div>
          <LocationMap />
        </section>
      </main>

    </>
  );
}
