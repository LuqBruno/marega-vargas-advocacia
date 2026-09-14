import Image from 'next/image';

export default function OfficeLogo({ light = false }: { light?: boolean }) {
  return (
    <Image
      className="office-logo"
      src={light ? '/images/brand/marega-vargas-champanhe.webp' : '/images/brand/marega-vargas-grafite.webp'}
      alt="Maréga e Vargas — Advocacia Especializada"
      width={800}
      height={319}
      sizes="(max-width: 960px) 156px, 180px"
    />
  );
}
