export const hellenProfile = {
  name: 'Hellen Maréga',
  fullName: 'Hellen Maréga da Cunha',
  title: 'Advogada especialista em Direito Civil e Empresarial',
  oab: 'OAB/SC nº 40.580',
  location: 'Tubarão/SC',
  instagram: 'https://www.instagram.com/hellenmarega.advogada/',
  whatsapp: '+55 48 99142-0565',
};

export const hellenWhatsappHref = `https://wa.me/${hellenProfile.whatsapp.replace(/\D/g, '')}?text=${encodeURIComponent('Olá, Hellen! Gostaria de informações sobre o atendimento.')}`;

export const hellenPractice = [
  {
    number: '01',
    title: 'Contratos',
    text: 'Elaboração, intermediação e revisão de contratos para clareza e segurança nos compromissos assumidos.',
  },
  {
    number: '02',
    title: 'Indenizações',
    text: 'Análise de danos e responsabilidades para reparação de prejuízos.',
  },
  {
    number: '03',
    title: 'Inventários',
    text: 'Regularização da sucessão, com organização documental, levantamento do patrimônio e definição dos direitos dos herdeiros.',
  },
  {
    number: '04',
    title: 'Assessoria empresarial',
    text: 'Orientação jurídica para prevenir riscos, minimizar prejuízos e fornecer segurança ao negócio.',
  },
];

export const hellenPosts = [
  { image: '/images/instagram/hellen-inventarios.webp', label: 'Inventários', alt: 'Publicação de Hellen: faleceu alguém da sua família? É importante saber o que vem depois.', href: 'https://www.instagram.com/p/DNoWt3XuIEj/' },
  { image: '/images/instagram/hellen-negocios.webp', label: 'Negócios', alt: 'Publicação de Hellen sobre negócio proibido entre cônjuges.', href: 'https://www.instagram.com/p/DGikbqMulkS/' },
  { image: '/images/instagram/hellen-patrimonio.webp', label: 'Patrimônio', alt: 'Publicação de Hellen sobre cláusula de inalienabilidade como ferramenta de proteção do patrimônio.', href: 'https://www.instagram.com/p/DChE6QYvW6N/' },
];

export const hellenFaqs = [
  { question: 'Como iniciar o contato?', answer: 'Use o WhatsApp indicado nesta página e apresente seu nome e o assunto geral. Evite enviar documentos ou informações sensíveis antes de combinar o canal adequado.' },
  { question: 'Quais áreas aparecem nesta página?', answer: 'A especialização informada por Hellen é em Direito Civil e Empresarial. O escopo aplicável à sua situação deve ser confirmado diretamente no atendimento.' },
  { question: 'O conteúdo do Instagram substitui uma consulta?', answer: 'Não. As publicações são informativas. Uma orientação jurídica exige análise individual dos fatos e documentos, sem garantia de resultado.' },
  { question: 'Onde fica o escritório?', answer: 'O escritório Maréga e Vargas está localizado no Ed. Office Center, em Vila Moema, Tubarão/SC. O endereço completo está no final da página.' },
];
