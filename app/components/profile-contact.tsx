import OfficeLogo from './office-logo';
import LocationMap from './location-map';
import { office } from '../site-data';

type ProfileContactProps = {
  name: string;
  oab: string;
  heading: string;
  description: string;
  whatsapp: string;
  whatsappHref: string;
  instagram: string;
};

export default function ProfileContact({
  name,
  oab,
  heading,
  description,
  whatsapp,
  whatsappHref,
  instagram,
}: ProfileContactProps) {
  return (
    <section id="contato" className="contact-section" aria-labelledby="contact-title" tabIndex={-1}>
      <div className="contact-copy">
        <p className="eyebrow">Contato</p>
        <h2 id="contact-title">{heading}</h2>
        <p>{description}</p>
        <div className="contact-actions">
          <a className="light-button" href={whatsappHref} target="_blank" rel="noopener noreferrer">
            Agendar pelo WhatsApp <span aria-hidden="true">↗</span>
          </a>
          <a className="contact-instagram" href={instagram} target="_blank" rel="noopener noreferrer">
            Acessar o Instagram profissional <span aria-hidden="true">↗</span>
          </a>
        </div>
        <small>{name} · {oab}<br />WhatsApp {whatsapp}</small>
      </div>

      <div className="contact-office">
        <OfficeLogo light />
        <address>
          <span>{office.street}</span>
          <span>{office.complement}</span>
          <span>{office.neighborhood} · {office.city}/{office.state}</span>
          <span>CEP {office.postalCode}</span>
        </address>
        <p><strong>Horário de atendimento</strong><span>{office.hours}</span></p>
      </div>

      <LocationMap />
    </section>
  );
}
