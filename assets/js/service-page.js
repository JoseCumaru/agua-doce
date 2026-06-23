const whatsappNumber = '5592999999999';

const services = {
  'analises-agua': {
    eyebrow: 'Análises de Água',
    title: 'Análises de água bruta e tratada com rigor técnico.',
    subtitle: 'Ensaios laboratoriais para controle de qualidade, segurança de consumo e atendimento a padrões regulatórios.',
    sectionTitle: 'Resultados claros para decisões seguras.',
    description: 'Nossos laboratórios possuem estrutura moderna para análise de água bruta e tratada, atendendo aos padrões exigidos pelos órgãos regulatórios. O serviço apoia empresas, condomínios e operações que precisam comprovar qualidade da água com laudos objetivos e orientação técnica.',
    benefits: [
      'Análises para água bruta, tratada, potável, poços e reservatórios.',
      'Apoio na definição dos parâmetros adequados para cada demanda.',
      'Laudos técnicos para documentação, controle e tomada de decisão.',
      'Orientação especializada para interpretação dos resultados.'
    ],
    audience: [
      'Empresas com rotina de controle de qualidade da água.',
      'Condomínios, escolas, clínicas, hotéis e restaurantes.',
      'Poços, reservatórios e sistemas próprios de abastecimento.',
      'Gestores que precisam documentar segurança para consumo.'
    ],
    nextStep: 'Informe a origem da água, finalidade da análise, localização e se existe prazo regulatório ou operacional.',
    whatsappText: 'Olá, gostaria de solicitar orçamento para Análises de Água.'
  },
  'analises-efluentes': {
    eyebrow: 'Análises de Efluentes',
    title: 'Análises físico-químicas e biológicas de efluentes.',
    subtitle: 'Diagnóstico técnico para tratamento, controle de poluição e conformidade ambiental.',
    sectionTitle: 'Controle ambiental com dados confiáveis.',
    description: 'Realizamos análises físico-químicas e biológicas para identificar características do efluente e apoiar as melhores soluções para tratamento e controle de poluição. O serviço ajuda a operação a acompanhar indicadores, reduzir riscos e organizar evidências ambientais.',
    benefits: [
      'Ensaios para caracterização e acompanhamento de efluentes.',
      'Apoio técnico para interpretação de parâmetros críticos.',
      'Base para decisões de tratamento e controle de poluição.',
      'Organização de resultados para rotinas de conformidade.'
    ],
    audience: [
      'Indústrias e empresas com geração de efluentes.',
      'Operações com estações de tratamento de efluentes.',
      'Gestores ambientais que precisam de suporte laboratorial.',
      'Negócios que buscam previsibilidade e redução de risco ambiental.'
    ],
    nextStep: 'Informe o tipo de efluente, atividade da empresa, frequência desejada e se já existem laudos anteriores.',
    whatsappText: 'Olá, gostaria de solicitar orçamento para Análises de Efluentes.'
  },
  'filtros-reuso-agua': {
    eyebrow: 'Filtros e Reúso de Água',
    title: 'Filtros e projetos de reúso dimensionados para sua demanda.',
    subtitle: 'Soluções desenvolvidas a partir da análise da água, volume utilizado e necessidade doméstica ou industrial.',
    sectionTitle: 'Eficiência hídrica com projeto orientado por análise.',
    description: 'Desenvolvemos filtros e projetos de reúso de água considerando a análise da água, o volume de consumo e as necessidades do cliente. A solução pode atender demandas domésticas, corporativas ou industriais com foco em economia, segurança e uso racional dos recursos hídricos.',
    benefits: [
      'Avaliação técnica da água e da demanda de uso.',
      'Projeto de filtros conforme volume, aplicação e qualidade desejada.',
      'Orientação para reúso em rotinas domésticas, comerciais e industriais.',
      'Apoio para reduzir desperdício e aumentar eficiência operacional.'
    ],
    audience: [
      'Indústrias com alto consumo de água.',
      'Condomínios, hotéis, clubes e operações comerciais.',
      'Empresas interessadas em reúso e redução de custos.',
      'Clientes que precisam adequar qualidade da água a uma aplicação.'
    ],
    filterProducts: [
      {
        title: "Filtro de fibra de vidro para caixa d'água 2.000 L/H com válvula semiautomática",
        image: '../assets/images/filtro1.png',
        imageAlt: "Filtro de fibra de vidro com válvula semiautomática para tratamento de água",
        media: ['Zeólita para remoção de ferro e manganês', 'Dolomita', 'Carvão ativado'],
        composition: [
          '01 tanque de fibra de vidro',
          '01 válvula semiautomática',
          'Meio filtrante com zeólita para remoção de cor aparente, sólidos, turbidez, ferro e manganês',
          'Carvão ativado para remoção de cloro, odor e sabor da água',
          'Pressão de trabalho recomendada: entre 0,5 Kgf./cm² e 3 Kgf./cm²',
          'Dimensões: altura 123 cm x largura 24 cm',
          'Peso: 50,2 kg'
        ]
      },
      {
        title: "Filtro de fibra de vidro para caixa d'água 2.000 L/H com válvula automática",
        image: '../assets/images/filtro2.png',
        imageAlt: "Filtro de fibra de vidro com válvula automática para tratamento de água",
        media: ['Zeólita para remoção de ferro e manganês', 'Dolomita', 'Carvão ativado com prata coloidal'],
        composition: [
          '01 tanque de fibra de vidro',
          '01 válvula automática',
          'Meio filtrante com zeólita para remoção de cor aparente, sólidos, turbidez, ferro e manganês',
          'Carvão ativado para remoção de cloro, odor e sabor da água',
          'Pressão de trabalho recomendada: entre 0,5 Kgf./cm² e 3 Kgf./cm²',
          'Dimensões: altura 123 cm x largura 24 cm',
          'Peso: 50,2 kg'
        ]
      }
    ],
    nextStep: 'Envie a finalidade do reúso, volume estimado, fonte da água e objetivo do projeto.',
    whatsappText: 'Olá, gostaria de solicitar orçamento para Filtros e Reúso de Água.'
  },
  'art-responsabilidade-tecnica': {
    eyebrow: 'ART Responsabilidade Técnica',
    title: 'Responsabilidade técnica para operações que exigem respaldo profissional.',
    subtitle: 'Emissão de ART e acompanhamento técnico para piscinas coletivas, processos industriais, alimentos, efluentes e estações de tratamento.',
    sectionTitle: 'ART com escopo claro e documentação organizada.',
    description: 'Emitimos ART e assumimos responsabilidade técnica em atividades que exigem acompanhamento profissional habilitado, incluindo piscinas coletivas, processos industriais, indústrias de alimentos, efluentes e estações de tratamento de água. O foco é reduzir risco documental e dar segurança técnica à operação.',
    benefits: [
      'Emissão de ART para escopos compatíveis com a atuação técnica.',
      'Apoio em documentação, registros e rotinas de controle.',
      'Responsabilidade técnica para operações corporativas e coletivas.',
      'Comunicação objetiva com gestores, administradoras e equipes.'
    ],
    audience: [
      'Condomínios com piscinas coletivas e sistemas hídricos.',
      'Indústrias de alimentos e processos industriais.',
      'Operações com efluentes ou estações de tratamento de água.',
      'Empresas que precisam comprovar responsabilidade técnica.'
    ],
    nextStep: 'Envie o tipo de operação, endereço, urgência e qual atividade precisa de responsabilidade técnica.',
    whatsappText: 'Olá, gostaria de solicitar orçamento para ART Responsabilidade Técnica.'
  },
  'controle-hidrossanitario-piscinas': {
    eyebrow: 'Controle Hidrossanitário de Piscinas Coletivas',
    title: 'Piscinas coletivas em conformidade com a vigilância sanitária.',
    subtitle: 'Adequações, análises, registros e treinamento da equipe para manter a água dentro dos parâmetros exigidos.',
    sectionTitle: 'Rotina técnica para segurança dos usuários.',
    description: 'Atendendo à legislação, realizamos as adequações necessárias para piscinas coletivas, com análises e registros exigidos pela vigilância sanitária. Também treinamos a equipe para manter a água dentro dos parâmetros adequados no dia a dia.',
    benefits: [
      'Avaliação técnica da piscina coletiva e rotina atual.',
      'Análises e registros exigidos pela vigilância sanitária.',
      'Orientação para adequações e manutenção preventiva.',
      'Treinamento da equipe responsável pelo controle da água.'
    ],
    audience: [
      'Condomínios residenciais e comerciais.',
      'Clubes, academias, escolas, hotéis e espaços de lazer.',
      'Administradoras que precisam reduzir risco sanitário.',
      'Equipes de manutenção que precisam padronizar rotinas.'
    ],
    nextStep: 'Informe o local, volume aproximado da piscina, frequência de uso e situação atual dos registros.',
    whatsappText: 'Olá, gostaria de solicitar orçamento para Controle Hidrossanitário de Piscinas Coletivas.'
  },
  'limpeza-reservatorios-laudo': {
    eyebrow: 'Limpeza de Reservatórios com Laudo Técnico',
    title: 'Limpeza de reservatórios de água com emissão de certificado.',
    subtitle: 'Serviço técnico para limpeza, análise e documentação exigida por órgãos fiscalizadores.',
    sectionTitle: 'Reservatórios limpos, documentados e prontos para fiscalização.',
    description: 'Nossa equipe realiza a limpeza de reservatórios de água, analisa as condições encontradas e emite o certificado de limpeza exigido pelos órgãos fiscalizadores. O serviço apoia a segurança hídrica e a organização documental de empresas e condomínios.',
    benefits: [
      'Limpeza técnica de reservatórios de água.',
      'Emissão de certificado ou laudo técnico do serviço realizado.',
      'Apoio para atender exigências de fiscalização.',
      'Orientação sobre periodicidade e cuidados preventivos.'
    ],
    audience: [
      'Condomínios, empresas, escolas, clínicas e restaurantes.',
      'Hotéis, clubes e estabelecimentos com reservatórios de uso coletivo.',
      'Gestores que precisam manter documentação atualizada.',
      'Operações que buscam segurança sanitária e hídrica.'
    ],
    nextStep: 'Informe quantidade de reservatórios, capacidade aproximada, localização e última data de limpeza.',
    whatsappText: 'Olá, gostaria de solicitar orçamento para Limpeza de Reservatórios com Laudo Técnico.'
  }
};

function createWhatsappLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function getSelectedService() {
  const params = new URLSearchParams(window.location.search);
  return params.get('servico') || 'analises-agua';
}

function renderCheckList(container, items, className) {
  container.innerHTML = items.map((item) => `
    <li class="${className}">
      <span class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-waterGreen text-white">
        <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      </span>
      <span>${item}</span>
    </li>
  `).join('');
}

function renderBenefitCards(container, items) {
  container.innerHTML = items.map((item) => `
    <div class="flex gap-3 rounded-lg bg-iceWhite p-5 leading-7 text-graphite/78">
      <span class="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-waterGreen text-white">
        <svg class="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
        </svg>
      </span>
      <span>${item}</span>
    </div>
  `).join('');
}

function renderRelatedServices(activeSlug) {
  const relatedContainer = document.getElementById('relatedServices');
  const cards = Object.entries(services)
    .filter(([slug]) => slug !== activeSlug)
    .map(([slug, service]) => `
      <a href="./servico.html?servico=${slug}" class="rounded-lg bg-white p-6 shadow-sm ring-1 ring-deepBlue/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
        <p class="text-sm font-bold uppercase tracking-wide text-waterGreen">${service.eyebrow}</p>
        <h3 class="mt-3 font-heading text-xl font-semibold text-deepBlue">${service.title}</h3>
        <p class="mt-3 leading-7 text-graphite/72">${service.subtitle}</p>
      </a>
    `);

  relatedContainer.innerHTML = cards.join('');
}

function renderFilterDetails(service, ctaLink) {
  const section = document.getElementById('filterDetailsSection');
  const productsContainer = document.getElementById('filterProducts');
  const cta = document.getElementById('filterDetailsCta');

  if (!section || !productsContainer || !service.filterProducts) {
    return;
  }

  section.classList.remove('hidden');
  cta.href = ctaLink;
  productsContainer.innerHTML = service.filterProducts.map((product) => `
    <article class="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-deepBlue/5 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div class="bg-iceWhite p-6">
        <img src="${product.image}" alt="${product.imageAlt}" class="mx-auto h-72 w-full object-contain" loading="lazy" />
      </div>
      <div class="p-7">
      <h3 class="font-heading text-2xl font-semibold text-deepBlue">${product.title}</h3>
      <div class="mt-6 flex flex-wrap gap-2">
        ${product.media.map((item) => `
          <span class="rounded-full bg-iceWhite px-3 py-1 text-xs font-bold uppercase tracking-wide text-deepBlue ring-1 ring-deepBlue/10">${item}</span>
        `).join('')}
      </div>
      <h4 class="mt-7 font-heading text-lg font-semibold text-deepBlue">Sistema de tratamento composto por:</h4>
      <ul class="mt-4 space-y-3">
        ${product.composition.map((item) => `
          <li class="flex gap-3 leading-7 text-graphite/75">
            <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-waterGreen"></span>
            <span>${item}</span>
          </li>
        `).join('')}
      </ul>
      </div>
    </article>
  `).join('');
}

function renderServicePage() {
  const selectedSlug = getSelectedService();
  const activeSlug = services[selectedSlug] ? selectedSlug : 'analises-agua';
  const service = services[activeSlug];
  const ctaLink = createWhatsappLink(service.whatsappText);

  document.title = `${service.eyebrow} | Água Doce ART & Soluções Hídricas`;
  document.getElementById('serviceEyebrow').textContent = service.eyebrow;
  document.getElementById('serviceTitle').textContent = service.title;
  document.getElementById('serviceSubtitle').textContent = service.subtitle;
  document.getElementById('serviceSectionTitle').textContent = service.sectionTitle;
  document.getElementById('serviceDescription').textContent = service.description;
  document.getElementById('serviceNextStep').textContent = service.nextStep;

  document.getElementById('serviceCta').href = ctaLink;
  document.getElementById('headerCta').href = ctaLink;
  document.getElementById('mobileHeaderCta').href = ctaLink;
  document.getElementById('footerCta').href = ctaLink;

  renderBenefitCards(document.getElementById('serviceBenefits'), service.benefits);
  renderCheckList(document.getElementById('serviceAudience'), service.audience, 'flex gap-3 leading-7 text-graphite/78');
  renderFilterDetails(service, ctaLink);
  renderRelatedServices(activeSlug);
}

renderServicePage();
