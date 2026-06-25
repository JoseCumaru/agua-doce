const whatsappNumber = '5592999999999';

const services = {
  'analises-agua': {
    mode: 'analises-agua',
    eyebrow: 'Análises de água',
    title: 'Potabilidade e rotina de controle com parâmetros definidos antes da coleta.',
    subtitle: 'Amostragem, análise e orientação para água bruta, tratada, poços, reservatórios e pontos de consumo.',
    briefing: {
      audience: 'Condomínios, empresas, escolas, clínicas, hotéis, restaurantes e sistemas próprios.',
      firstStep: 'Informar origem da água, finalidade da análise e prazo de uso do resultado.',
      delivery: 'Laudo laboratorial, leitura técnica e orientação sobre próximos registros.',
      budget: 'WhatsApp com local, tipo de água e urgência.'
    },
    diagnostic: [
      {
        title: 'Problema que resolve',
        text: 'Define quais parâmetros analisar para comprovar qualidade, investigar alteração de cor, odor ou sabor e documentar segurança para consumo.'
      },
      {
        title: 'Itens avaliados',
        text: 'A seleção pode incluir parâmetros físico-químicos e microbiológicos conforme origem, uso pretendido e exigência regulatória.'
      },
      {
        title: 'Entrega final',
        text: 'O cliente recebe resultado organizado, interpretação objetiva e indicação do que precisa ser corrigido, repetido ou monitorado.'
      },
      {
        title: 'Decisão apoiada',
        text: 'Permite definir tratamento, liberar uso, ajustar rotina de limpeza ou apresentar evidência técnica quando solicitado.'
      }
    ],
    benefits: [
      'Escopo de análise definido pela demanda real, não por pacote genérico.',
      'Orientação sobre quando repetir coleta ou ampliar parâmetros.',
      'Documentação útil para gestores, síndicos e responsáveis por operação.',
      'Leitura técnica para transformar resultado laboratorial em ação prática.'
    ],
    audience: [
      'Água de poço, reservatório, rede interna ou ponto de consumo.',
      'Rotinas que precisam comprovar potabilidade.',
      'Ambientes coletivos com responsabilidade sanitária.',
      'Operações que precisam decidir sobre tratamento ou manutenção.'
    ],
    related: ['limpeza-reservatorios-laudo', 'filtros-reuso-agua', 'art-responsabilidade-tecnica'],
    whatsappText: 'Olá, gostaria de solicitar orçamento para análises de água.'
  },
  'analises-efluentes': {
    mode: 'analises-efluentes',
    eyebrow: 'Análises de efluentes',
    title: 'Controle ambiental com dados que apontam o ajuste operacional.',
    subtitle: 'Ensaios físico-químicos e biológicos para caracterizar efluentes, acompanhar tratamento e organizar evidências ambientais.',
    briefing: {
      audience: 'Indústrias, operações comerciais, ETEs e empresas com descarte monitorado.',
      firstStep: 'Informar atividade, tipo de efluente, ponto de coleta e frequência desejada.',
      delivery: 'Resultados por parâmetro, leitura de tendência e orientação para controle.',
      budget: 'WhatsApp com processo gerador, volume e histórico de laudos.'
    },
    diagnostic: [
      {
        title: 'Problema que resolve',
        text: 'Ajuda a identificar carga poluidora, variações do processo e necessidade de correção antes que o descarte gere risco ambiental.'
      },
      {
        title: 'Parâmetros possíveis',
        text: 'A matriz pode envolver indicadores físico-químicos, biológicos e parâmetros específicos conforme operação e exigência do órgão competente.'
      },
      {
        title: 'Entrega final',
        text: 'Laudo com dados rastreáveis e orientação sobre leitura dos parâmetros críticos para a rotina da empresa.'
      },
      {
        title: 'Decisão apoiada',
        text: 'Permite ajustar tratamento, registrar conformidade, programar nova coleta ou revisar processo interno.'
      }
    ],
    benefits: [
      'Monitoramento alinhado ao tipo de efluente e à operação.',
      'Base técnica para tratamento, descarte e controle de poluição.',
      'Organização de evidências para auditorias e exigências ambientais.',
      'Leitura clara para gestores que precisam agir rápido.'
    ],
    audience: [
      'Empresas com geração contínua ou eventual de efluentes.',
      'Estações de tratamento que precisam acompanhar eficiência.',
      'Gestores ambientais com prazos de reporte.',
      'Operações que precisam reduzir risco documental.'
    ],
    related: ['art-responsabilidade-tecnica', 'filtros-reuso-agua', 'analises-agua'],
    whatsappText: 'Olá, gostaria de solicitar orçamento para análises de efluentes.'
  },
  'filtros-reuso-agua': {
    mode: 'filtros-reuso-agua',
    eyebrow: 'Filtros e reúso de água',
    title: 'Tratamento dimensionado pelo uso, pela vazão e pelo resultado da água.',
    subtitle: 'Filtros e projetos de reúso para aplicações domésticas, comerciais e industriais com avaliação técnica do ponto de partida.',
    briefing: {
      audience: 'Condomínios, hotéis, empresas, indústrias e clientes com alto consumo.',
      firstStep: 'Enviar fonte da água, volume estimado, finalidade do reúso e foto do local.',
      delivery: 'Recomendação técnica, configuração do filtro e orientação de operação.',
      budget: 'WhatsApp com objetivo do tratamento e consumo aproximado.'
    },
    diagnostic: [
      {
        title: 'Problema que resolve',
        text: 'Reduz desperdício e adequa a qualidade da água ao uso pretendido, sem escolher equipamento por aparência ou promessa genérica.'
      },
      {
        title: 'Itens avaliados',
        text: 'Origem da água, vazão necessária, parâmetros alterados, espaço de instalação e rotina de manutenção.'
      },
      {
        title: 'Entrega final',
        text: 'Indicação de equipamento, meios filtrantes, cuidados de operação e pontos que precisam ser confirmados por análise.'
      },
      {
        title: 'Decisão apoiada',
        text: 'Permite comprar, instalar ou redimensionar sistema com base em demanda, não em tentativa.'
      }
    ],
    benefits: [
      'Projeto orientado por análise e aplicação real.',
      'Escolha de mídia filtrante compatível com o problema encontrado.',
      'Apoio para reduzir consumo e melhorar previsibilidade de manutenção.',
      'Possibilidade de atender rotinas residenciais, comerciais e industriais.'
    ],
    audience: [
      'Operações com alto consumo de água.',
      'Clientes interessados em reúso e economia operacional.',
      'Sistemas com alteração de cor, odor, sabor, ferro ou turbidez.',
      'Locais que precisam adequar água para uma finalidade específica.'
    ],
    filterProducts: [
      {
        title: "Filtro de fibra de vidro para caixa d'água 2.000 L/H com válvula semiautomática",
        image: '../assets/images/filtro1.png',
        imageAlt: "Filtro de fibra de vidro com válvula semiautomática para tratamento de água",
        media: ['Zeólita', 'Dolomita', 'Carvão ativado'],
        specs: [
          'Tanque de fibra de vidro com válvula semiautomática.',
          'Meio filtrante com zeólita para cor aparente, sólidos, turbidez, ferro e manganês.',
          'Carvão ativado para redução de cloro, odor e sabor.',
          'Pressão recomendada: 0,5 a 3 Kgf/cm².',
          'Dimensões: 123 cm de altura por 24 cm de largura.',
          'Peso aproximado: 50,2 kg.'
        ]
      },
      {
        title: "Filtro de fibra de vidro para caixa d'água 2.000 L/H com válvula automática",
        image: '../assets/images/filtro2.png',
        imageAlt: "Filtro de fibra de vidro com válvula automática para tratamento de água",
        media: ['Zeólita', 'Dolomita', 'Carvão ativado com prata coloidal'],
        specs: [
          'Tanque de fibra de vidro com válvula automática.',
          'Meio filtrante com zeólita para cor aparente, sólidos, turbidez, ferro e manganês.',
          'Carvão ativado para redução de cloro, odor e sabor.',
          'Pressão recomendada: 0,5 a 3 Kgf/cm².',
          'Dimensões: 123 cm de altura por 24 cm de largura.',
          'Peso aproximado: 50,2 kg.'
        ]
      }
    ],
    related: ['analises-agua', 'analises-efluentes', 'limpeza-reservatorios-laudo'],
    whatsappText: 'Olá, gostaria de solicitar orçamento para filtros e reúso de água.'
  },
  'art-responsabilidade-tecnica': {
    mode: 'art-responsabilidade-tecnica',
    eyebrow: 'ART e responsabilidade técnica',
    title: 'Responsabilidade técnica com escopo documentado e rotina acompanhada.',
    subtitle: 'Emissão de ART e suporte para operações que precisam de profissional habilitado, registros e orientação técnica.',
    briefing: {
      audience: 'Piscinas coletivas, processos industriais, alimentos, efluentes e estações de tratamento.',
      firstStep: 'Enviar atividade, endereço, urgência e documento solicitado pelo cliente ou fiscalizador.',
      delivery: 'Escopo técnico, emissão de ART quando aplicável e orientação de registros.',
      budget: 'WhatsApp com operação, risco e prazo.'
    },
    diagnostic: [
      {
        title: 'Problema que resolve',
        text: 'Organiza a responsabilidade profissional quando a operação precisa comprovar acompanhamento técnico e reduzir risco documental.'
      },
      {
        title: 'Itens avaliados',
        text: 'Compatibilidade do escopo, rotina operacional, documentos existentes, requisitos do solicitante e limites de responsabilidade.'
      },
      {
        title: 'Entrega final',
        text: 'ART emitida quando aplicável, orientação sobre registros e definição do acompanhamento necessário.'
      },
      {
        title: 'Decisão apoiada',
        text: 'Ajuda o gestor a saber qual documento apresentar, qual rotina manter e o que precisa ser corrigido antes de assumir o escopo.'
      }
    ],
    benefits: [
      'Escopo claro antes da emissão da ART.',
      'Apoio em registros, rotinas e evidências de controle.',
      'Comunicação objetiva com gestores, administradoras e equipes.',
      'Responsabilidade assumida dentro dos limites técnicos corretos.'
    ],
    audience: [
      'Condomínios com piscinas coletivas e sistemas hídricos.',
      'Indústrias de alimentos e processos industriais.',
      'Operações com efluentes ou tratamento de água.',
      'Empresas que receberam exigência documental.'
    ],
    related: ['controle-hidrossanitario-piscinas', 'analises-efluentes', 'analises-agua'],
    whatsappText: 'Olá, gostaria de solicitar orçamento para ART e responsabilidade técnica.'
  },
  'controle-hidrossanitario-piscinas': {
    mode: 'controle-hidrossanitario-piscinas',
    eyebrow: 'Piscinas coletivas',
    title: 'Controle hidrossanitário para piscinas que recebem público todos os dias.',
    subtitle: 'Análises, registros, adequações e treinamento para manter a água dentro dos parâmetros exigidos.',
    briefing: {
      audience: 'Condomínios, clubes, academias, escolas, hotéis e espaços de lazer.',
      firstStep: 'Informar volume, frequência de uso, rotina atual e situação dos registros.',
      delivery: 'Plano de controle, análises, orientação de adequação e treinamento.',
      budget: 'WhatsApp com local, volume e urgência sanitária.'
    },
    diagnostic: [
      {
        title: 'Problema que resolve',
        text: 'Evita que a piscina coletiva dependa de ajuste visual ou improvisado, criando rotina técnica para segurança dos usuários.'
      },
      {
        title: 'Itens avaliados',
        text: 'Qualidade da água, registros exigidos, produtos usados, frequência de medição, equipe responsável e necessidade de adequações.'
      },
      {
        title: 'Entrega final',
        text: 'Orientação técnica, análises, registros e treinamento para que a equipe saiba o que medir e quando agir.'
      },
      {
        title: 'Decisão apoiada',
        text: 'Permite corrigir rotina, responder à vigilância sanitária e manter evidências de controle.'
      }
    ],
    benefits: [
      'Rotina técnica para ambientes coletivos.',
      'Treinamento da equipe que mede e registra a água.',
      'Apoio para adequações solicitadas pela vigilância sanitária.',
      'Redução de risco para usuários, síndicos e administradoras.'
    ],
    audience: [
      'Piscinas de condomínios residenciais e comerciais.',
      'Clubes, academias e escolas.',
      'Hotéis e espaços de lazer com uso recorrente.',
      'Equipes que precisam padronizar medição e registro.'
    ],
    related: ['art-responsabilidade-tecnica', 'analises-agua', 'limpeza-reservatorios-laudo'],
    whatsappText: 'Olá, gostaria de solicitar orçamento para controle hidrossanitário de piscinas coletivas.'
  },
  'limpeza-reservatorios-laudo': {
    mode: 'limpeza-reservatorios-laudo',
    eyebrow: 'Reservatórios e laudo técnico',
    title: 'Limpeza de reservatórios com registro técnico para fiscalização e rotina.',
    subtitle: 'Serviço de limpeza, análise e certificado para empresas, condomínios e estabelecimentos de uso coletivo.',
    briefing: {
      audience: 'Condomínios, escolas, clínicas, restaurantes, hotéis, clubes e empresas.',
      firstStep: 'Informar quantidade, capacidade, acesso e última data de limpeza.',
      delivery: 'Limpeza, orientação de periodicidade, análise quando necessária e certificado.',
      budget: 'WhatsApp com fotos do local e capacidade aproximada.'
    },
    diagnostic: [
      {
        title: 'Problema que resolve',
        text: 'Mantém reservatórios em condição sanitária adequada e documenta o serviço para rotina interna ou fiscalização.'
      },
      {
        title: 'Itens avaliados',
        text: 'Acesso, volume, condição visual, histórico de manutenção, necessidade de análise e documentação exigida.'
      },
      {
        title: 'Entrega final',
        text: 'Limpeza executada, certificado ou laudo técnico do serviço e orientação sobre próxima periodicidade.'
      },
      {
        title: 'Decisão apoiada',
        text: 'Ajuda a planejar manutenção, comprovar cuidado sanitário e decidir se a água precisa de análise complementar.'
      }
    ],
    benefits: [
      'Documentação organizada após a limpeza.',
      'Apoio para exigências de fiscalização e rotina sanitária.',
      'Orientação sobre periodicidade e cuidados preventivos.',
      'Integração com análise de água quando o contexto exige.'
    ],
    audience: [
      'Reservatórios de uso coletivo.',
      'Empresas e condomínios com calendário de manutenção.',
      'Estabelecimentos sujeitos à fiscalização.',
      'Gestores que precisam comprovar limpeza recente.'
    ],
    related: ['analises-agua', 'controle-hidrossanitario-piscinas', 'art-responsabilidade-tecnica'],
    whatsappText: 'Olá, gostaria de solicitar orçamento para limpeza de reservatórios com laudo técnico.'
  }
};

function createWhatsappLink(message) {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function getSelectedService() {
  const params = new URLSearchParams(window.location.search);
  return params.get('servico') || 'analises-agua';
}

function renderBriefing(service) {
  const briefing = document.getElementById('serviceBriefing');
  if (!briefing) return;

  briefing.innerHTML = `
    <dl>
      <div>
        <dt>Indicado para</dt>
        <dd>${service.briefing.audience}</dd>
      </div>
      <div>
        <dt>Primeiro passo</dt>
        <dd>${service.briefing.firstStep}</dd>
      </div>
      <div>
        <dt>Entrega</dt>
        <dd>${service.briefing.delivery}</dd>
      </div>
      <div>
        <dt>Para orçar</dt>
        <dd>${service.briefing.budget}</dd>
      </div>
    </dl>
  `;
}

function renderDiagnostic(service) {
  const container = document.getElementById('serviceDiagnostic');
  if (!container) return;

  container.innerHTML = service.diagnostic.map((item) => `
    <article class="diagnostic-item reveal">
      <h3>${item.title}</h3>
      <p>${item.text}</p>
    </article>
  `).join('');
}

function renderBenefits(service) {
  const container = document.getElementById('serviceBenefits');
  if (!container) return;

  container.innerHTML = service.benefits.map((item) => `<li>${item}</li>`).join('');
}

function renderAudience(service) {
  const container = document.getElementById('serviceAudience');
  if (!container) return;

  container.innerHTML = service.audience.map((item) => `
    <li class="technical-row">
      <strong>Uso</strong>
      <span>${item}</span>
    </li>
  `).join('');
}

function renderRelatedServices(activeSlug, service) {
  const relatedContainer = document.getElementById('relatedServices');
  if (!relatedContainer) return;

  const relatedSlugs = service.related || Object.keys(services).filter((slug) => slug !== activeSlug).slice(0, 3);
  relatedContainer.innerHTML = relatedSlugs.map((slug) => {
    const related = services[slug];
    return `
      <a href="./servico.html?servico=${slug}" class="related-line">
        <span>
          <strong>${related.eyebrow}</strong>
          <span>${related.subtitle}</span>
        </span>
        <span class="service-arrow">→</span>
      </a>
    `;
  }).join('');
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
    <article class="filter-product reveal">
      <div class="filter-product-media">
        <img src="${product.image}" alt="${product.imageAlt}" loading="lazy" />
      </div>
      <div class="p-6 sm:p-8">
        <p class="section-kicker">Equipamento</p>
        <h3 class="mt-3 font-heading text-2xl font-semibold leading-tight text-deepBlue">${product.title}</h3>
        <div class="media-tags mt-5">
          ${product.media.map((item) => `<span>${item}</span>`).join('')}
        </div>
        <ul class="spec-table">
          ${product.specs.map((item) => `<li>${item}</li>`).join('')}
        </ul>
      </div>
    </article>
  `).join('');
}

function observeNewRevealItems() {
  const event = new CustomEvent('refresh-reveal');
  window.dispatchEvent(event);
}

function renderServicePage() {
  const selectedSlug = getSelectedService();
  const activeSlug = services[selectedSlug] ? selectedSlug : 'analises-agua';
  const service = services[activeSlug];
  const ctaLink = createWhatsappLink(service.whatsappText);

  document.body.classList.add(`service-mode-${service.mode}`);
  document.title = `${service.eyebrow} | Água Doce ART & Soluções Hídricas`;
  document.getElementById('serviceEyebrow').textContent = service.eyebrow;
  document.getElementById('serviceTitle').textContent = service.title;
  document.getElementById('serviceSubtitle').textContent = service.subtitle;
  document.getElementById('serviceCta').href = ctaLink;
  document.getElementById('headerCta').href = ctaLink;
  document.getElementById('mobileHeaderCta').href = ctaLink;
  document.getElementById('footerCta').href = ctaLink;

  renderBriefing(service);
  renderDiagnostic(service);
  renderBenefits(service);
  renderAudience(service);
  renderFilterDetails(service, ctaLink);
  renderRelatedServices(activeSlug, service);
  observeNewRevealItems();
}

renderServicePage();
