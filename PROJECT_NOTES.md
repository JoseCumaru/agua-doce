# Notas do Projeto - Agua Doce ART & Solucoes Hidricas

## Estado Atual

Landing page institucional B2B criada em HTML, Tailwind CDN, CSS e JavaScript separados.

Arquivos principais:

- `index.html`: pagina inicial com hero, servicos, tabela B2C, sobre, blog e footer.
- `servico.html`: pagina dinamica de detalhe de servico.
- `assets/css/styles.css`: CSS proprio, incluindo backgrounds locais.
- `assets/js/tailwind-config.js`: configuracao Tailwind CDN.
- `assets/js/main.js`: menu mobile.
- `assets/js/service-page.js`: dados e renderizacao dinamica dos servicos.
- `assets/images/bg.png`: imagem local do hero.
- `assets/images/filtro1.png`: imagem do filtro com valvula semiautomatica.
- `assets/images/filtro2.png`: imagem do filtro com valvula automatica.

## Decisoes

- Os detalhes dos servicos usam uma unica pagina dinamica:
  - `servico.html?servico=analises-agua`
  - `servico.html?servico=analises-efluentes`
  - `servico.html?servico=filtros-reuso-agua`
  - `servico.html?servico=art-responsabilidade-tecnica`
  - `servico.html?servico=controle-hidrossanitario-piscinas`
  - `servico.html?servico=limpeza-reservatorios-laudo`

- A secao tecnica dos filtros aparece somente em:
  - `servico.html?servico=filtros-reuso-agua`

- A pagina de filtros inclui:
  - "Principais filtros"
  - "Filtros mistos para agua"
  - dois cards de filtro 2.000 L/H
  - zeolita, dolomita, carvao ativado e carvao ativado com prata coloidal
  - composicao, pressao, dimensoes e peso
  - imagens `filtro1.png` e `filtro2.png`

## Placeholders

- Numero de WhatsApp ainda esta como `5592999999999`.
- Telefone exibido no footer ainda esta como `(92) 99999-9999`.
- E-mail esta como `contato@aguadoceart.com.br`.
- Links de redes sociais Instagram e LinkedIn ainda estao como `#`.

## Verificacoes Feitas

- `node --check assets/js/main.js`: sem erros.
- `node --check assets/js/service-page.js`: sem erros.

## Proximos Ajustes Sugeridos

- Substituir numero de WhatsApp, telefone, e-mail e redes sociais reais.
- Revisar textos comerciais finais com a cliente.
- Conferir visual no navegador em desktop e mobile.
- Se for publicar em hospedagem estatica, manter os caminhos relativos como estao.
