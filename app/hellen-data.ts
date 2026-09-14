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
    title: 'Direito Civil',
    text: 'Análise técnica de relações, obrigações e situações da vida civil, com comunicação direta sobre riscos, caminhos e consequências.',
    tags: ['Relações civis', 'Obrigações', 'Estratégia'],
  },
  {
    number: '02',
    title: 'Contratos',
    text: 'Leitura jurídica das cláusulas e penalidades para que decisões contratuais sejam tomadas com clareza, consciência e segurança.',
    tags: ['Cláusulas', 'Penalidades', 'Decisão consciente'],
  },
  {
    number: '03',
    title: 'Direito Empresarial',
    text: 'Orientação jurídica voltada às necessidades empresariais, com atenção à prevenção de conflitos e à qualidade das decisões.',
    tags: ['Empresas', 'Prevenção', 'Segurança jurídica'],
  },
];

export const hellenFaqs = [
  { question: 'Como iniciar o contato?', answer: 'Use o WhatsApp indicado nesta página e apresente seu nome e o assunto geral. Evite enviar documentos ou informações sensíveis antes de combinar o canal adequado.' },
  { question: 'Quais áreas aparecem nesta página?', answer: 'A especialização informada por Hellen é em Direito Civil e Empresarial. O escopo aplicável à sua situação deve ser confirmado diretamente no atendimento.' },
  { question: 'O conteúdo do Instagram substitui uma consulta?', answer: 'Não. As publicações são informativas. Uma orientação jurídica exige análise individual dos fatos e documentos, sem garantia de resultado.' },
  { question: 'Onde fica o escritório?', answer: 'O escritório Maréga e Vargas está localizado no Ed. Office Center, em Vila Moema, Tubarão/SC. O endereço completo está no final da página.' },
];
