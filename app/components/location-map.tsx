import { mapsEmbedHref, mapsHref } from '../site-data';

export default function LocationMap() {
  return (
    <div className="location-map">
      <iframe
        src={mapsEmbedHref}
        title="Localização do escritório Maréga e Vargas no Google Maps"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
      />
      <a href={mapsHref} target="_blank" rel="noopener noreferrer">
        Abrir rota no Google Maps <span aria-hidden="true">↗</span>
      </a>
    </div>
  );
}
