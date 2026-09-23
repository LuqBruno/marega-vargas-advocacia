# Maréga e Vargas — site institucional e páginas profissionais

Projeto único do escritório **Maréga e Vargas**, com uma entrada institucional e duas
páginas profissionais conectadas:

- `/`: escritório, profissionais, áreas, conteúdo e contato;
- `/alice-vargas`: Direito de Família e Sucessões;
- `/hellen-marega`: Direito Civil e Empresarial.

## Executar localmente

1. Instale as dependências com `npm install`.
2. Inicie com `npm run dev -- --port 3001`.
3. Acesse `http://localhost:3001`.

O atalho `INICIAR-APRESENTACAO.cmd` também inicia a prévia local. A janela do servidor
deve permanecer aberta durante a apresentação.

## Validação

- `npm test`: 23 verificações de rotas, conteúdo aprovado, imagens, contatos e estrutura;
- `npm run lint`: revisão de qualidade do código;
- `npm run build`: compilação de produção e geração estática das três rotas.

A revisão final também inclui capturas reais em 1440 px e 390 px, sem estouro horizontal
e sem imagens quebradas.

## Conteúdo aprovado nesta revisão

- navegação institucional na ordem Escritório, Áreas de atuação, Profissionais e Contato;
- abertura institucional sem retratos, com o texto “Família, patrimônio, negócios e contratos” e “Cada caso exige uma leitura individualizada”;
- Áreas de atuação antes de Quem somos;
- biografia completa de Alice conforme o texto enviado pelas clientes;
- apresentação individual de Alice e Hellen, com fotografia clicável e acesso à respectiva página;
- seis áreas de Alice em grade 3 × 2 no desktop e as áreas confirmadas de Hellen no mesmo padrão visual;
- capítulos de áreas e primeiro contato com fundo claro e texto escuro;
- seção “Conheça nosso escritório” removida; endereço mantido somente no contato final;
- bloco de conteúdo jurídico com três publicações de Alice e três de Hellen, em duas linhas alinhadas de três também no celular;
- contato com logo oficial, endereço, horário e Google Maps;
- FAQ removido;
- paleta em grafite `#292728`, champagne `#D5C7B4` e bordô `#65282E`.

## Imagens

- Alice: `public/images/client/alice/alice-vargas-05-hd.webp` e
  `public/images/client/alice/alice-vargas-07-hd.webp`;
- Hellen: somente `public/images/client/hellen/hellen-1.jpg` e
  `public/images/client/hellen/hellen-2.jpg` aparecem na interface;
- marca: `public/images/brand/`;
- conteúdo público: `public/images/instagram/`.

Os arquivos originais permanecem preservados na raiz da pasta do projeto.

## PDFs de apresentação

Os materiais finais estão em `output/pdf/`:

- `apresentacao-marega-vargas-institucional.pdf`;
- `apresentacao-alice-vargas.pdf`;
- `apresentacao-hellen-marega.pdf`;
- `apresentacao-completa-marega-vargas.pdf`.

Cada PDF individual contém capa, comparação desktop/mobile, capítulos da página,
visão mobile e uma reprodução integral da interface. O gerador está em
`scripts/build-presentation-pdfs.py`. As capturas-mestre em alta resolução ficam em
`output/previews/`.

## Publicação e privacidade

A demonstração permanece com `noindex`. Para publicar, configure `NEXT_PUBLIC_SITE_URL`
com o domínio HTTPS e `SITE_ALLOW_INDEXING=true`, conforme `.env.example`, e gere um novo
build. Não há formulário, analytics ou coleta de documentos. Os botões de WhatsApp apenas
abrem uma conversa com texto sugerido; nenhuma mensagem é enviada automaticamente.

## Pendências de conteúdo

- biografia de Hellen recebida e aplicada nesta revisão; aguardar validação final das clientes;
- dias da semana e modalidades de atendimento;
- domínio definitivo e aprovação final para indexação;
- confirmação comercial dos materiais de Instagram antes da publicação pública.
