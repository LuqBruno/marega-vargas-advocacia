import { assetPath } from '../asset-path';

// Irregular wax outline; the official monogram is cropped from the champagne logo (x 0–413, y 0–277 of 800×319).
const waxOutline = 'M194.9 100.0 C195.1 108.2 186.8 116.3 183.8 124.6 C180.9 132.9 181.8 142.8 177.3 149.7 C172.8 156.5 163.3 160.0 156.7 165.5 C150.2 171.0 144.9 177.8 137.7 182.6 C130.5 187.4 121.9 193.8 113.6 194.3 C105.2 194.8 96.2 187.6 87.7 185.6 C79.2 183.7 69.7 185.8 62.4 182.4 C55.0 179.0 49.8 170.9 43.5 165.2 C37.1 159.6 29.8 155.1 24.4 148.6 C19.0 142.1 13.0 134.2 11.1 126.1 C9.3 118.0 12.7 108.6 13.2 100.0 C13.6 91.4 12.4 83.1 13.8 74.7 C15.2 66.3 16.5 56.2 21.4 49.5 C26.2 42.7 36.4 40.0 43.0 34.2 C49.5 28.3 53.6 18.6 60.9 14.5 C68.3 10.3 78.2 10.6 87.0 9.3 C95.7 7.9 105.0 5.1 113.5 6.4 C121.9 7.7 130.3 12.7 137.9 17.0 C145.4 21.4 150.8 27.6 158.7 32.3 C166.5 37.1 180.7 38.3 184.8 45.5 C188.8 52.7 181.2 66.6 182.9 75.7 C184.6 84.7 194.8 91.8 194.9 100.0Z';

export default function WaxSeal({ id }: { id: string }) {
  return (
    <svg className="wax-seal" viewBox="0 0 200 200" aria-hidden="true" focusable="false">
      <defs>
        <radialGradient id={`${id}-wax`} cx="38%" cy="32%" r="75%">
          <stop offset="0" stopColor="#9a4650" />
          <stop offset=".45" stopColor="#6e2a31" />
          <stop offset="1" stopColor="#3a1317" />
        </radialGradient>
        <radialGradient id={`${id}-press`} cx="60%" cy="65%" r="70%">
          <stop offset="0" stopColor="#7a3038" />
          <stop offset="1" stopColor="#4c1a1f" />
        </radialGradient>
        <clipPath id={`${id}-mark`}><rect x="52" y="67.8" width="96" height="64.4" /></clipPath>
        <filter id={`${id}-emboss`} x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="0" dy="1.4" stdDeviation=".6" floodColor="#1d080a" floodOpacity=".85" />
        </filter>
      </defs>
      <path d={waxOutline} fill={`url(#${id}-wax)`} />
      <circle cx="100" cy="101.5" r="68" fill="none" stroke="rgba(255,225,215,.16)" strokeWidth="2" />
      <circle cx="100" cy="100" r="68" fill={`url(#${id}-press)`} stroke="rgba(20,6,8,.55)" strokeWidth="2" />
      <circle cx="100" cy="100" r="61" fill="none" stroke="rgba(213,199,180,.28)" strokeWidth=".8" />
      <g filter={`url(#${id}-emboss)`}>
        <image href={assetPath('/images/brand/marega-vargas-champanhe.webp')} x="52" y="67.8" width="186" height="74.2" clipPath={`url(#${id}-mark)`} />
      </g>
    </svg>
  );
}
