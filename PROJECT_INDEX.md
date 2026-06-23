# Indice do Projeto - Agua Doce ART & Solucoes Hidricas

## Visao Geral

Site institucional estatico para a Agua Doce ART & Solucoes Hidricas.

Stack:
- HTML5
- Tailwind CSS via CDN
- CSS customizado
- JavaScript puro
- Assets locais em PNG

Nao ha etapa de build, bundler, framework frontend ou gerenciador de pacotes configurado.

## Estrutura

```text
.
|-- index.html
|-- README.md
|-- PROJECT_NOTES.md
|-- PROJECT_INDEX.md
|-- pages/
|   |-- about_us.html
|   |-- sobre.html
|   `-- servico.html
`-- assets/
    |-- css/
    |   `-- styles.css
    |-- images/
    |   |-- bg.png
    |   |-- filtro1.png
    |   |-- filtro2.png
    |   `-- perfil.png
    `-- js/
        |-- main.js
        |-- service-page.js
        `-- tailwind-config.js
```

## Paginas

### `index.html`

Pagina principal do site.

Secoes:
- Header fixo com menu desktop e mobile
- Hero institucional
- Servicos
- Tabela rapida B2C
- Sobre a profissional
- Blog
- Footer com canais de contato

Dependencias:
- Tailwind CDN
- Google Fonts: Lato e Poppins
- `assets/js/tailwind-config.js`
- `assets/css/styles.css`
- `assets/js/main.js`

### `pages/servico.html`

Pagina generica de detalhe de servico.

O conteudo e preenchido dinamicamente por `assets/js/service-page.js` com base no parametro `servico` da URL.

Exemplo:

```text
pages/servico.html?servico=analises-agua
```

### `pages/about_us.html`

Arquivo existe, mas esta vazio no estado atual.

### `pages/sobre.html`

Pagina institucional com texto sobre a empresa, missao, visao e valores.

Dependencias:
- Tailwind CDN
- Google Fonts: Lato e Poppins
- `../assets/js/tailwind-config.js`
- `../assets/css/styles.css`
- `../assets/js/main.js`

## Rotas Dinamicas de Servico

As rotas aceitas por `pages/servico.html` sao:

- `pages/servico.html?servico=analises-agua`
- `pages/servico.html?servico=analises-efluentes`
- `pages/servico.html?servico=filtros-reuso-agua`
- `pages/servico.html?servico=art-responsabilidade-tecnica`
- `pages/servico.html?servico=controle-hidrossanitario-piscinas`
- `pages/servico.html?servico=limpeza-reservatorios-laudo`

Fallback:
- Se o parametro estiver ausente ou invalido, a pagina usa `analises-agua`.

## JavaScript

### `assets/js/main.js`

Responsabilidades:
- Alternar menu mobile
- Fechar menu mobile ao clicar em links
- Animar elementos `.reveal` com `IntersectionObserver`
- Alterar estilo do header ao rolar a pagina

Observacao tecnica:
- A funcao `updateHeaderOnScroll()` depende de `heroSection`.
- Em paginas sem elemento `#inicio`, como `pages/servico.html`, a funcao retorna sem aplicar o estado `scrolled`.

### `assets/js/service-page.js`

Responsabilidades:
- Armazenar os dados dos servicos no objeto `services`
- Ler o parametro `servico` da URL
- Renderizar titulo, subtitulo, descricao, beneficios e publico indicado
- Gerar links de WhatsApp com texto personalizado
- Renderizar servicos relacionados
- Renderizar a secao de filtros apenas para `filtros-reuso-agua`

Dados principais:
- Numero do WhatsApp fica em `whatsappNumber`
- Cada servico possui `eyebrow`, `title`, `subtitle`, `sectionTitle`, `description`, `benefits`, `audience`, `nextStep` e `whatsappText`
- O servico `filtros-reuso-agua` tambem possui `filterProducts`

### `assets/js/tailwind-config.js`

Define extensoes do Tailwind CDN:
- Cores: `deepBlue`, `oceanBlue`, `waterGreen`, `turquoise`, `iceWhite`, `graphite`
- Fontes: `heading` com Poppins e `body` com Lato

## CSS

### `assets/css/styles.css`

Responsabilidades:
- Variaveis CSS de cor
- Backgrounds do hero
- Estilos de navegacao
- Botoes
- Secoes
- Lista de servicos
- Tabela de precos
- Cards e paineis
- Animacoes `.reveal`
- Responsividade mobile
- Estados do header ao rolar a pagina

Imagens usadas no CSS:
- `assets/images/bg.png` como background do hero e da pagina de servico

## Assets

### `assets/images/bg.png`

Imagem de fundo usada no hero principal e no hero de servico.

### `assets/images/perfil.png`

Imagem da profissional na secao "Sobre a profissional".

### `assets/images/filtro1.png`

Produto exibido na pagina:

```text
pages/servico.html?servico=filtros-reuso-agua
```

Representa filtro com valvula semiautomatica.

### `assets/images/filtro2.png`

Produto exibido na pagina:

```text
pages/servico.html?servico=filtros-reuso-agua
```

Representa filtro com valvula automatica.

## Placeholders Atuais

Substituir antes de publicar:

- WhatsApp: `5592999999999`
- Telefone: `(92) 99999-9999`
- E-mail: `contato@aguadoceart.com.br`
- Instagram: `#`
- LinkedIn: `#`

## Pontos de Atencao

- O conteudo dos arquivos aparece com caracteres quebrados em alguns pontos, especialmente em palavras acentuadas. Isso sugere problema de encoding em arquivos ja existentes.
- `pages/about_us.html` esta vazio.
- O projeto depende de CDN para Tailwind e Google Fonts; sem internet, a pagina perde parte do estilo e das fontes.
- Nao ha testes automatizados, lint ou formatador configurado.
- Os links de WhatsApp e dados de contato ainda usam placeholders.

## Como Rodar

Como e um site estatico, pode ser aberto diretamente pelo navegador:

```text
index.html
```

Para testar as paginas dinamicas de servico, abra:

```text
pages/servico.html?servico=analises-agua
pages/servico.html?servico=filtros-reuso-agua
```

Se algum navegador bloquear comportamento por arquivo local, servir a pasta com um servidor estatico simples.

## Fluxo de Edicao Recomendado

Para alterar textos da home:
- Editar `index.html`

Para alterar textos dos servicos:
- Editar o objeto `services` em `assets/js/service-page.js`

Para alterar cores globais:
- Editar `assets/js/tailwind-config.js`
- Conferir variaveis em `assets/css/styles.css`

Para alterar layout e componentes:
- Ajustar classes Tailwind nos HTMLs
- Ajustar estilos compartilhados em `assets/css/styles.css`

Para trocar imagens:
- Substituir arquivos em `assets/images/`
- Conferir referencias em HTML, CSS e `service-page.js`
