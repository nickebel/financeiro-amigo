# Design System — Meu Financeiro

**Direção:** minimalismo editorial monocromático.
**Objetivo:** destacar valores, nomes e registros por tipografia, grade e espaço negativo — não por pilhas de cartões.

## Paleta

- Fundo: `#FAFAFA`
- Superfície: `#FFFFFF`
- Texto principal: `#111111`
- Texto secundário: `#444444`
- Texto auxiliar: `#707070`
- Divisórias: `#E5E5E5`
- Divisórias fortes: `#CFCFCF`
- Única cor de ação: `#003459` (reservada aos botões primários e seu foco acessível)

Não usar gradientes, tons coloridos em gráficos, cartões, entradas ou despesas, vidro, sombras pesadas ou superfícies coloridas.

## Tipografia

Duas famílias locais:
- Display editorial: Baskerville / Iowan Old Style / Palatino / Georgia para títulos e valores em destaque.
- Interface: Segoe UI e fallback sans-serif do sistema para corpo, navegação, tabelas e controles.

## Composição

- Respiro entre grandes seções de 96 a 128px.
- A hierarquia vem de tamanho, peso, alinhamento e divisórias finas.
- Cards de resumo são superfícies transparentes: saldo em primeiro plano, entradas e despesas em segundo.
- Grids assimétricos e alinhados com `minmax(0, ...)`; cartões e metas não se repetem em caixas idênticas.
- Tabelas permanecem planas, com divisórias horizontais e rolagem local em telas estreitas.
- Navegação textual, sem ícones decorativos genéricos.
- Cantos retos, sem sombras e sem glassmorphism.

## Leitura e acessibilidade

- Parágrafos e textos corridos limitados a 60ch.
- Títulos usam `text-wrap: balance`; parágrafos usam `text-wrap: pretty`.
- Line-height de títulos em 1.12 e corpo em 1.55.
- Palavras não são divididas no meio; ações e navegação não quebram os rótulos.
- Foco visível com a mesma cor de ação; alvos de toque de pelo menos 44px.
- Respeitar `prefers-reduced-motion`.

## Integridade e privacidade

O app mantém seis destinos, formulários, IDs, handlers, CRUD, cálculos, IndexedDB, backup manual, PWA e funcionamento offline. Não há login, API, banco remoto ou sincronização automática. Backups JSON nunca devem ser versionados.
