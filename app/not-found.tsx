import Link from 'next/link';
import OfficeLogo from './components/office-logo';

export default function NotFound() {
  return (
    <main className="recovery-page">
      <OfficeLogo light />
      <p className="eyebrow">Maréga e Vargas · Alice Vargas</p>
      <h1>Não encontramos esta página.</h1>
      <p>O endereço pode ter mudado. Volte ao início para conhecer o escritório, as áreas de atuação e os canais de contato.</p>
      <Link className="primary-button" href="/">Voltar ao início <span aria-hidden="true">↗</span></Link>
    </main>
  );
}
