# Design System — Ray

**Produto:** Ray — finanças pessoais.
**Direção:** minimalismo editorial com dois temas: claro e escuro azul.

## Tema claro

- Fundo: `#FAFAFA`
- Superfície: `#FFFFFF`
- Texto principal: `#111111`
- Texto secundário: `#444444`
- Texto auxiliar: `#707070`
- Divisórias: `#E5E5E5`
- Divisórias fortes: `#CFCFCF`
- Cor única de ação: `#003459`

## Tema escuro azul

- Fundo: `#071B31`
- Superfície: `#0B2745`
- Superfície elevada: `#0D2D4D`
- Texto principal: `#EAF4FF`
- Texto secundário: `#C4D8EF`
- Texto auxiliar: `#91AAC5`
- Divisórias: `#1D3B59`
- Azul de ação: `#63B3FF`
- Foco: `#8CC8FF`

O tema escuro usa variações da mesma família azul. Sem gradientes, vidro, sombras pesadas ou cores decorativas.

## Tipografia e composição

- Display editorial: Baskerville / Iowan Old Style / Palatino / Georgia.
- Interface: Segoe UI e fallback sans-serif do sistema.
- Respiro entre grandes seções de 96 a 128px.
- Parágrafos limitados a 60ch; títulos usam `text-wrap: balance`; parágrafos usam `text-wrap: pretty`.
- Títulos com line-height 1.12; corpo com 1.55.
- Palavras não se partem no meio; botões e navegação não quebram rótulos.
- Hierarquia baseada em tipografia, alinhamento e divisórias finas.

## Tema e preferência

- O tema claro editorial é o padrão inicial.
- O botão **Modo azul / Modo claro** alterna entre os dois temas.
- A preferência é salva em `localStorage` sob a chave `ray-theme-preference`; isso guarda apenas a aparência, não os dados financeiros.
- A cor da barra do navegador acompanha o tema selecionado.
- O PWA usa o mesmo nome e ícone de Ray.

## Integridade e privacidade

O Ray mantém os seis destinos, formulários, IDs, handlers, CRUD, cálculos e a mesma identificação de perfil IndexedDB usada pelo app. Os registros financeiros e backups continuam locais. Não há login, API, banco remoto ou sincronização automática.
