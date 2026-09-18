import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';
import sharp from 'sharp';

const root = fileURLToPath(new URL('../', import.meta.url));
const read = file => readFile(resolve(root, file), 'utf8');
const [officePage, alicePage, hellenPage, header, profileContact, locationMap, aliceData, hellenData, layout, intro, css, settings, robots, logo] = await Promise.all([
  'app/page.tsx', 'app/alice-vargas/page.tsx', 'app/hellen-marega/page.tsx',
  'app/components/site-header.tsx', 'app/components/profile-contact.tsx',
  'app/components/location-map.tsx', 'app/site-data.ts', 'app/hellen-data.ts',
  'app/layout.tsx', 'app/site-intro.tsx', 'app/globals.css', 'app/site-settings.ts',
  'app/robots.ts', 'app/components/office-logo.tsx',
].map(read));
const sources = officePage + alicePage + hellenPage + header + profileContact + locationMap + layout;
const alice = await import(`data:text/javascript;base64,${Buffer.from(aliceData).toString('base64')}`);
const hellen = await import(`data:text/javascript;base64,${Buffer.from(hellenData).toString('base64')}`);

function ids(source) { return [...source.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]); }
function images(source) { return [...source.matchAll(/['"](\/images\/[^'"\s]+)['"]/g)].map(match => match[1]); }

test('The project exposes the office and two distinct professional routes', () => {
  assert.match(officePage, /href="\/alice-vargas#atuacao"/);
  assert.match(officePage, /href="\/hellen-marega#atuacao"/);
  assert.match(alicePage, /Alice Vargas · Família e Sucessões/);
  assert.match(hellenPage, /Hellen Maréga · Civil e Empresarial/);
  assert.equal((officePage.match(/<h1\b/g) || []).length, 1);
  assert.equal((alicePage.match(/<h1\b/g) || []).length, 1);
  assert.equal((hellenPage.match(/<h1\b/g) || []).length, 1);
});

for (const [name, source] of [['office', officePage], ['Alice', alicePage], ['Hellen', hellenPage]]) {
  test(`${name} page has unique section IDs and an accessible main landmark`, () => {
    const sectionIds = ids(source);
    assert.equal(new Set(sectionIds).size, sectionIds.length);
    assert.match(source, /className="skip-link" href="#principal"/);
    assert.match(source, /<main id="principal"/);
    assert.match(source, /aria-labelledby=/);
  });
}

test('All referenced local images exist and have valid signatures', async () => {
  const paths = new Set(images(sources + aliceData + hellenData + logo + intro));
  assert.ok(paths.size >= 8);
  for (const image of paths) {
    const path = resolve(root, `public${image}`);
    assert.ok((await stat(path)).size > 1000, `Empty image: ${image}`);
    const metadata = await sharp(path).metadata();
    assert.ok(metadata.width > 0 && metadata.height > 0, `Unreadable image: ${image}`);
  }
});

test('Every Next image has alt text and responsive sizing', () => {
  const tags = [...sources.matchAll(/<Image\b[\s\S]*?\/>/g)].map(match => match[0]);
  assert.ok(tags.length >= 6);
  for (const tag of tags) {
    assert.match(tag, /\balt=/);
    assert.match(tag, /\bsizes=/);
  }
});

test('The institutional entry gives each specialty one unambiguous route', () => {
  assert.match(officePage, /Direito de Família e Sucessões/);
  assert.match(officePage, /Direito Civil e Empresarial/);
  assert.match(officePage, /Alice Vargas[\s\S]*\{profile\.oab\}/);
  assert.match(officePage, /Hellen Maréga[\s\S]*\{hellenProfile\.oab\}/);
  assert.doesNotMatch(officePage, /WhatsApp da Alice|WhatsApp da Hellen/);
});

test('Alice client-approved information remains unchanged on her route', () => {
  assert.equal(alice.profile.oab, 'OAB/SC nº 43413');
  assert.equal(alice.profile.whatsapp, '+55 48 9929-2985');
  assert.equal(alice.profile.coverage, 'Atuação em todo o território nacional');
  assert.deepEqual(alice.practiceAreas.map(area => area.title), [
    'Divórcio', 'Pensão alimentícia', 'Guarda e convivência',
    'Reconhecimento de paternidade', 'Inventário', 'Testamento',
  ]);
  assert.match(alicePage, /alice-vargas-05-hd\.webp/);
  assert.match(alicePage, /alice-vargas-07-hd\.webp/);
});

test('Hellen page uses only verified identity and official profile contact', () => {
  assert.equal(hellen.hellenProfile.fullName, 'Hellen Maréga da Cunha');
  assert.equal(hellen.hellenProfile.oab, 'OAB/SC nº 40.580');
  assert.equal(hellen.hellenProfile.title, 'Advogada especialista em Direito Civil e Empresarial');
  assert.equal(hellen.hellenProfile.instagram, 'https://www.instagram.com/hellenmarega.advogada/');
  assert.equal(hellen.hellenProfile.whatsapp, '+55 48 99142-0565');
  assert.ok(hellen.hellenWhatsappHref.startsWith('https://wa.me/5548991420565?text='));
});

test('Hellen practice is limited to confirmed civil, contracts and business framing', () => {
  assert.deepEqual(hellen.hellenPractice.map(area => area.title), ['Direito Civil', 'Contratos', 'Direito Empresarial']);
  assert.match(hellenPage, /A pertinência ao caso concreto é confirmada no atendimento/);
  assert.doesNotMatch(hellenPage + hellenData, /direito trabalhista|direito tributário|direito previdenciário|direito penal/i);
});

test('Only the two client-approved Hellen photographs appear in the interface', () => {
  const used = new Set(images(officePage + hellenPage).filter(path => path.includes('/hellen/')));
  assert.deepEqual([...used].sort(), [
    '/images/client/hellen/hellen-1.jpg',
    '/images/client/hellen/hellen-2.jpg',
  ]);
  assert.doesNotMatch(officePage + hellenPage, /hellen-retrato-editorial|hellen-contratos|hellen-oab|hellen-marega-retrato-grafite/);
});

test('Both professional pages expose WhatsApp and Instagram without forms or invented inboxes', () => {
  assert.match(alicePage, /href=\{whatsappHref\}/);
  assert.match(alicePage, /href=\{profile\.instagram\}/);
  assert.match(hellenPage, /href=\{hellenWhatsappHref\}/);
  assert.match(hellenPage, /href=\{hellenProfile\.instagram\}/);
  assert.doesNotMatch(sources, /<form\b|mailto:/);
});

test('External links opened in a new tab are isolated', () => {
  for (const tag of [...sources.matchAll(/<a\b[\s\S]*?>/g)].map(match => match[0])) {
    if (tag.includes('target="_blank"')) assert.match(tag, /rel="[^"]*noreferrer/);
    assert.doesNotMatch(tag, /href="(?:#|)"/);
  }
});

test('Mobile navigation remains keyboard-dismissible on both profile routes', () => {
  assert.match(header, /<details className="mobile-nav"/);
  assert.match(header, /event.key === 'Escape'/);
  assert.match(header, /trigger.current\?\.focus\(\)/);
  assert.match(header, /pointerdown/);
});

test('Office address and hours match the supplied client data', () => {
  assert.equal(alice.office.name, 'Maréga e Vargas');
  assert.equal(alice.office.street, 'Avenida Marcolino Martins Cabral, 1572');
  assert.equal(alice.office.complement, 'Ed. Office Center · 1º andar, sala 203');
  assert.equal(alice.office.hours, 'Das 8h às 18h');
  assert.doesNotMatch(sources + aliceData + hellenData, /segunda a sexta|24 horas/i);
  assert.match(locationMap, /href=\{mapsHref\}/);
  assert.match(locationMap, /src=\{mapsEmbedHref\}/);
  assert.match(locationMap, /loading="eager"/);
});

test('Loader now represents the office rather than a single professional', () => {
  assert.match(intro, /<OfficeLogo light/);
  assert.match(intro, /Advocacia Especializada/);
  assert.doesNotMatch(intro, /Alice Vargas|Hellen Maréga/);
  assert.match(intro, /Cada caso exige uma leitura individualizada/);
  assert.match(intro, /prefers-reduced-motion: reduce/);
  assert.match(intro, /setTimeout\(finish, 1600\)/);
});

test('Preview indexing remains an explicit launch decision', () => {
  assert.match(settings, /SITE_ALLOW_INDEXING === 'true'/);
  assert.match(layout, /index: allowIndexing/);
  assert.match(robots, /disallow: '\/'/);
  assert.match(layout, /Maréga e Vargas \| Advocacia Especializada/);
});

test('No extra motion, analytics or tracking dependency was introduced', async () => {
  const pkg = JSON.parse(await read('package.json'));
  assert.deepEqual(Object.keys(pkg.dependencies).sort(), ['next', 'react', 'react-dom']);
  assert.doesNotMatch(sources + layout, /googletagmanager|facebook\.net|analytics\.js/);
});

function palette(name) {
  const match = css.match(new RegExp(`${name}:\\s*(#[a-fA-F0-9]{6})\\s*;`));
  assert.ok(match, `Missing palette token ${name}`);
  return match[1];
}

test('Approved graphite, cream and burgundy palette is preserved', () => {
  assert.equal(palette('--wine-dark'), '#292728');
  assert.equal(palette('--ivory'), '#d5c7b4');
  assert.equal(palette('--wine'), '#65282e');
  assert.match(css, /\.office-route-preview/);
  assert.doesNotMatch(officePage + css, /office-monogram/);
  assert.match(css, /\.hellen-hero/);
});

test('Responsive and reduced-motion treatments cover the expanded experience', () => {
  assert.match(css, /@media \(max-width: 1180px\)/);
  assert.match(css, /@media \(max-width: 900px\)/);
  assert.match(css, /@media \(max-width: 760px\)/);
  assert.match(css, /\.office-route-preview \{[\s\S]*grid-template-columns: repeat\(2/);
  assert.match(css, /\.hellen-practice-grid \{ grid-template-columns: 1fr/);
  assert.match(css, /@media \(prefers-reduced-motion: reduce\)[\s\S]*\.route-preview/);
});

test('Approved logo stays consistent across office and professional pages', async () => {
  assert.match(officePage + alicePage + hellenPage + intro, /<OfficeLogo light/);
  for (const path of [...logo.matchAll(/'(\/images\/brand\/[^']+)'/g)].map(match => match[1])) {
    const metadata = await sharp(resolve(root, `public${path}`)).metadata();
    assert.equal(metadata.format, 'webp');
  }
  assert.match(css, /\.office-logo \{[^}]*width: 156px/);
});

test('New approved portrait assets are optimized without replacing the originals', async () => {
  for (const file of ['alice-vargas-05-hd.webp', 'alice-vargas-07-hd.webp']) {
    const metadata = await sharp(resolve(root, 'public/images/client/alice', file)).metadata();
    assert.equal(metadata.width, 2000);
    assert.equal(metadata.height, 3000);
    assert.equal(metadata.format, 'webp');
  }
  assert.deepEqual(await readFile(resolve(root, 'Hellen1.jpeg')), await readFile(resolve(root, 'public/images/client/hellen/hellen-1.jpg')));
  assert.deepEqual(await readFile(resolve(root, 'Hellen2.jpeg')), await readFile(resolve(root, 'public/images/client/hellen/hellen-2.jpg')));
});

test('Requested institutional revision is present without the removed blocks', () => {
  assert.match(officePage, /Família, patrimônio,[\s\S]*negócios e contratos/);
  assert.doesNotMatch(officePage, /Cada caso exige uma leitura individualizada|Conheça nossa atuação|A profissional certa para a questão|Especialidades distintas\. O mesmo compromisso/);
  assert.doesNotMatch(officePage, /Duas especialistas|Um olhar inteiro|office-principles|professional-index|office-route-preview/);
  assert.doesNotMatch(officePage, /id="escritorio"|Conheça nosso escritório/);
  assert.ok(officePage.indexOf('id="areas"') < officePage.indexOf('id="profissionais"'));
  assert.match(officePage, /professional-profile[\s\S]*alice-vargas-07-hd\.webp[\s\S]*professional-profile-reverse[\s\S]*hellen-1\.jpg/);
  assert.match(alicePage, /practice-section light-chapter/);
  assert.match(hellenPage, /hellen-practice light-chapter/);
  assert.equal((aliceData.match(/number: '0[1-6]'/g) ?? []).length, 6);
  assert.match(officePage, /Conteúdo jurídico no Instagram/);
  assert.doesNotMatch(officePage, /\bblog\b/i);
  assert.doesNotMatch(alicePage + hellenPage, /className="faq-section"/);
  assert.doesNotMatch(alicePage + hellenPage, /<figcaption>/);
  assert.match(header, /contactLabel = 'Agendar uma consulta'/);
});
