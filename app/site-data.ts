function assetPath(path = '') {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}${path}`;
}

export const profile = {
  name: 'Alice Vargas',
  title: 'Advogada especialista em Direito de Família e Sucessões',
  oab: 'OAB/SC nº 43413',
  location: 'Tubarão/SC',
  coverage: 'Atuação em todo o território nacional',
  instagram: 'https://www.instagram.com/alicevargasadvogada/',
  // Supplied and reconfirmed by the client on 2026-08-31; do not infer extra digits.
  whatsapp: '+55 48 9929-2985',
  jusbrasil: 'https://alicevm.jusbrasil.com.br/',
};

export const office = {
  name: 'Maréga e Vargas',
  tagline: 'Advocacia Especializada',
  street: 'Avenida Marcolino Martins Cabral, 1572',
  complement: 'Ed. Office Center · 1º andar, sala 203',
  neighborhood: 'Vila Moema',
  city: 'Tubarão',
  state: 'SC',
  postalCode: '88705-000',
  hours: 'Das 8h às 18h',
};

export const mapsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${office.street}, ${office.complement}, ${office.neighborhood}, ${office.city} - ${office.state}, ${office.postalCode}`)}`;
export const mapsEmbedHref = `https://www.google.com/maps?q=${encodeURIComponent(`${office.street}, ${office.neighborhood}, ${office.city} - ${office.state}, ${office.postalCode}`)}&output=embed`;
export const whatsappHref = `https://wa.me/${profile.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Olá, Alice! Gostaria de informações sobre o atendimento.')}`;

export const practiceAreas = [
  { number: '01', title: 'Divórcio', text: 'Orientação para o fim do vínculo conjugal, com atenção à partilha de bens, aos acordos e às particularidades de cada família.', tags: ['Separação', 'Partilha de bens', 'Acordos'] },
  { number: '02', title: 'Pensão alimentícia', text: 'Atuação em fixação, revisão e cobrança de alimentos, com análise cuidadosa das necessidades e possibilidades de cada caso.', tags: ['Fixação', 'Revisão', 'Cobrança'] },
  { number: '03', title: 'Guarda e convivência', text: 'Apoio jurídico para decisões que envolvem filhos, responsabilidades parentais e uma rotina familiar mais segura.', tags: ['Guarda', 'Convivência', 'Responsabilidade parental'] },
  { number: '04', title: 'Reconhecimento de paternidade', text: 'Orientação jurídica sobre o reconhecimento da filiação, com cuidado com a história familiar e os direitos envolvidos.', tags: ['Filiação', 'Vínculos familiares', 'Registro civil'] },
  { number: '05', title: 'Inventário', text: 'Acompanhamento na organização de bens, herdeiros e documentos para conduzir a sucessão de acordo com cada situação.', tags: ['Herança', 'Bens', 'Herdeiros'] },
  { number: '06', title: 'Testamento', text: 'Orientação para organizar suas vontades sobre a sucessão, considerando o patrimônio, os vínculos familiares e as particularidades do seu caso.', tags: ['Últimas vontades', 'Patrimônio', 'Sucessão'] },
];

export const faqs = [
  { question: 'Como faço para entrar em contato?', answer: 'Use o botão de WhatsApp para conversar com Alice sobre disponibilidade e agendamento. Se preferir, você também pode entrar em contato pelo perfil profissional no Instagram.' },
  { question: 'O que preciso informar na primeira mensagem?', answer: 'Seu nome e o assunto geral já ajudam a iniciar a conversa. Evite enviar documentos ou detalhes sensíveis por rede social; combine primeiro um canal adequado para o atendimento.' },
  { question: 'Posso perguntar sobre atendimento online?', answer: 'Sim. Confirme diretamente com Alice as modalidades disponíveis, os horários e as condições da consulta antes de agendar.' },
  { question: 'O atendimento é apenas em Tubarão?', answer: 'Alice atua em todo o território nacional. O escritório está localizado em Tubarão/SC. Entre em contato para combinar a forma de atendimento adequada à sua situação.' },
  { question: 'Qual é o horário de atendimento?', answer: 'O horário informado é das 8h às 18h. Confirme os dias disponíveis e agende seu atendimento diretamente pelo WhatsApp.' },
  { question: 'Os conteúdos substituem uma consulta?', answer: 'Não. As publicações têm caráter informativo. A orientação sobre uma situação concreta depende da análise individual dos fatos e documentos, sem garantia de resultado.' },
];

export const contentTopics = [
  { image: assetPath('/images/instagram/alice-vargas-instagram-01.jpg'), alt: 'Publicação de Alice Vargas sobre divisão de herança', label: 'Sucessões' },
  { image: assetPath('/images/instagram/alice-vargas-instagram-04.jpg'), alt: 'Publicação de Alice Vargas sobre alteração do nome de um filho', label: 'Família' },
  { image: assetPath('/images/instagram/alice-vargas-instagram-09.jpg'), alt: 'Publicação de Alice Vargas sobre divisão de bens no divórcio', label: 'Partilha de bens' },
];
