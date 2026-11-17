# Design System — Meu Financeiro

**Sistema visual:** Rich Blue × editorial paper.
**Referências fornecidas:** paleta Rich Blue e direção editorial da página Terra.
**Escopo:** aplicativo financeiro pessoal; não é landing page e não deve imitar o layout de turismo.
**Objetivo:** precisão, calma e personalidade, com hierarquia visual assimétrica e leitura confortável.

## Integridade do produto

O usuário registra manualmente entradas e despesas e acompanha saldo do período, vencimentos, cartões, parcelas, metas e relatórios.

O app permanece sem login, senha, conta, API, banco remoto ou sincronização automática. Os dados ficam no IndexedDB deste navegador/aparelho. Backup JSON é sempre manual, pertence ao usuário e nunca deve ser incluído no repositório.

Redesign preserva os seis destinos, todos os formulários, IDs, handlers, operações CRUD, cálculos, campos e conteúdo funcional.

## Paleta Rich Blue

As quatro cores centrais vêm literalmente da referência visual:

- Petroleum: `#00171F` — navegação, fundo do cartão de saldo e títulos principais.
- Prussian Blue: `#003459` — ações, seleções e hierarquia secundária.
- Non Photo Blue: `#ADEBFF` — detalhe de contraste, foco e textura discreta.
- White: `#FFFFFF` — superfícies e contraste.

Tons muito suaves derivados de branco e azul claro podem apoiar o fundo e as divisórias. Verde e vermelho ficam reservados a estados financeiros semânticos (entrada e despesa); não competem com a identidade principal.

É proibido usar gradiente azul-roxo, néon, glassmorphism, sombras decorativas ou superfícies com efeitos sem função.

## Tipografia

No máximo duas famílias, ambas locais e sem dependência de rede:

- Display/editorial: Baskerville, Iowan Old Style, Palatino Linotype ou Georgia, com fallback serifado, em títulos e números principais de destaque.
- Interface: Segoe UI e fallback sans-serif do sistema para corpo, navegação, dados, controles e formulários.

Não carregar Google Fonts nem outras fontes remotas: o app deve manter o mesmo aspecto offline e não depender de terceiros.

## Composição e ritmo

- O saldo do período é o principal ponto de entrada visual: painel escuro, amplo, com valor em azul-claro e grade pontilhada de baixíssimo contraste no lado direito.
- Entradas e despesas ficam em uma coluna lateral, mais silenciosas, sem duas caixas gêmeas ao redor de cada número.
- Gráfico e vencimentos usam uma divisão editorial com linhas finas, não cartões idênticos.
- Títulos serifados, rótulos curtos, espaços negativos generosos e pequenas assimetrias dão personalidade sem prejudicar a leitura.
- A navegação é uma faixa petroleum. Os seis destinos são texto primeiro; ícones decorativos não são repetidos em todos os itens.
- No celular, a hierarquia torna-se linear e compacta, com o saldo em primeiro plano e as métricas de apoio abaixo.
- Tabelas seguem planas, legíveis e sem cartões externos.

## Componentes e acessibilidade

- Botões sólidos em Petroleum/Prussian Blue; ações secundárias discretas e sem glass.
- Campos mantêm rótulos visíveis, foco claro e estados de validação.
- Diálogos usam `<dialog>` nativo, com foco inicial e fechamento por Escape, botão e clique no fundo.
- Alvos de toque com pelo menos 44px; inputs móveis em 16px.
- Estados de carregamento, vazio e erro continuam presentes.
- Movimento respeita `prefers-reduced-motion`.
- Não adicionar chat flutuante falso, ícones decorativos indiscriminados, dados inventados, indicadores sem base ou rodapé de template.

## Privacidade

- Nunca adicionar token, chave, senha ou endpoint remoto para ler/escrever dados financeiros.
- Nunca versionar backups JSON.
- Não prometer privacidade do site: sem autenticação, a publicação é acessível a quem tiver o endereço.
- Nunca adicionar sincronização automática sem redesenhar a arquitetura e explicar as implicações.
