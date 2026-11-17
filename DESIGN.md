# Design System — Meu Financeiro

**Sistema visual:** Blue Mist Atmosphere — Rich Blue em uma atmosfera oceânica.
**Escopo:** aplicativo financeiro pessoal com prioridade para leitura, consistência e dados legíveis.

## Integridade do produto

O app mantém os seis destinos, os formulários, IDs, handlers, CRUD, cálculos, IndexedDB, backup manual, PWA e fluxo offline. Nenhum dado financeiro é enviado para serviço remoto.

## Paleta

- Fundo profundo: `#071F27`
- Petróleo principal: `#0B2932`
- Superfície oceânica: `#153D47`
- Superfície elevada: `#285560`
- Azul-luz: `#ADEBFF`
- Texto principal: `#EEF8F3`
- Texto secundário: `#D2E6E0`
- Texto auxiliar: `#A8C5C1`
- Entrada positiva: `#91DCC0`
- Despesa/erro: `#FFB9B9`

Sem gradientes azul-roxo genéricos. O fundo atmosférico não pode competir com textos e valores.

## Tipografia

No máximo duas famílias, sem fontes remotas:

- Display: Baskerville / Iowan Old Style / Palatino / Georgia para títulos e valores de destaque.
- Interface: Segoe UI e fallback sans-serif do sistema para corpo, navegação, dados e controles.

## Leitura e ritmo

- Blocos de texto corrido limitados a 62ch; blocos longos não excedem 65ch.
- Parágrafos usam `text-wrap: pretty`; títulos h1, h2 e h3 usam `text-wrap: balance`.
- Texto de leitura, cards e listas é alinhado à esquerda.
- Títulos usam `clamp()` e line-height entre 1.1 e 1.2; corpo usa line-height 1.55.
- Palavras nunca quebram no meio; navegação, botões, tags e ações mantêm seus rótulos em uma linha.
- Valores monetários e códigos permanecem inteiros e usam tamanhos responsivos para evitar overflow.
- Colunas seguem grids com `minmax(0, ...)`, evitando alargamento por conteúdo longo.
- Cartões e metas usam uma distribuição assimétrica 7/5 em telas largas, empilhando no celular.
- Painel de resumo mantém saldo como elemento dominante; entradas e despesas ficam em segundo plano.
- Tabelas usam rolagem horizontal local em telas pequenas, sem quebrar rótulos ou números.

## Responsividade e acessibilidade

- Navegação desktop cede lugar ao menu móvel já existente em telas estreitas.
- Seções e cabeçalhos empilham antes de causar compressão dos botões.
- Controles mantêm pelo menos 44px de alvo tátil; inputs móveis permanecem em 16px.
- Contraste, foco visível e `prefers-reduced-motion` permanecem obrigatórios.

## Privacidade

Sem login, API, banco remoto ou sincronização automática. Backups JSON são manuais e nunca devem ser versionados.
