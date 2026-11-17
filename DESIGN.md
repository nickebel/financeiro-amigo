# Design System — Meu Financeiro

**Sistema bloqueado:** decisões abaixo devem permanecer consistentes entre telas.
**Referência:** Hallmark v2.0.0, MIT — https://github.com/Nutlope/hallmark
**Referência fixada:** commit 04977e15f3dfd6ee4b74c887dac3eb52665d6c92.
**Escopo:** redesign full de app screens; não é uma landing page.
**Direção:** Cobalt adaptado a um instrumento financeiro pessoal, calmo e preciso.

## Produto e integridade

O usuário abre o app e registra uma entrada ou despesa. Em seguida, acompanha o saldo do mês, contas próximas e seus lançamentos. O registro financeiro é manual.

O projeto não tem login, senha, conta, API, banco remoto ou sincronização automática. Dados ficam exclusivamente no IndexedDB do navegador/aparelho. Backup JSON é uma ação manual e pertence ao usuário, nunca ao repositório.

Redesign preserva os seis destinos, todos os formulários, IDs, handlers, operações de CRUD, cálculos, campos, valores e conteúdo funcional. Não trocar armazenamento nem redefinir o perfil local.

## Hierarquia das telas

- Visão geral: saldo do período em primeiro plano; entradas e despesas como apoio; despesas por categoria, vencimentos e tabela de lançamentos recentes.
- Lançamentos, contas e parcelas: tabelas primeiro, sem cartões externos ao redor das tabelas.
- Cartões e metas: cartões somente porque cada item representa um objeto real, não um registro tabular.
- Relatórios: resumo sem indicadores inventados e detalhamento por categoria.
- O shell mantém navegação superior com seis destinos. A partir de 60rem, os destinos recolhem para o menu móvel; a navegação indica o destino atual.

Não criar mural de indicadores, medidores decorativos, gráficos de rosca, séries fictícias, tendências ou números demonstrativos que pareçam reais.

## Paleta e tokens

Todos os valores de cor devem ser declarados em `:root` e reutilizados como tokens. Não escrever cores literais nos seletores dos componentes.

- Papel: `--color-paper`, `--color-paper-2`, `--color-paper-3`.
- Texto: `--color-ink`, `--color-ink-2`, `--color-muted`.
- Bordas e campos: `--color-rule`, `--color-field-edge`.
- Azul de ação e seleção: `--color-accent`, `--color-accent-deep`, `--color-accent-wash`, `--color-accent-ink`.
- Semântica: `--color-positive`, `--color-negative`, `--color-error` e superfícies suaves.
- Foco: `--color-focus`.
- Movimento funcional: `--dur-micro` e `--dur-short`.

Azul marca apenas ação primária e seleção; não deve tingir cartões de conteúdo ou saldos. Verde significa entrada/sucesso; vermelho significa despesa/erro. Não usar gradientes, roxo, neon, glassmorphism, sombras decorativas ou cartões aninhados.

## Tipografia, controles e dados

- Uma única família system sans-serif, com corpo de 16px.
- Tabelas e apoio podem usar 12px quando legíveis; labels permanecem em caixa normal.
- Valores em BRL e datas em pt-BR.
- Valores, percentuais e datas usam números tabulares.
- Controles de app entre 32 e 40px, com área de toque de pelo menos 44px; inputs móveis em 16px para evitar zoom.
- Botões primários preenchidos; secundários discretos. Estados de foco visível, hover, pressionado, desativado, carregando e erro.
- Campos mostram rótulos visíveis. Erros são associados ao campo com `aria-invalid` e `aria-describedby`; submissão mostra progresso sem esconder o texto do botão.
- Diálogos usam o elemento nativo `<dialog>`, com `showModal()`, foco inicial e fechamento por Escape, botão e clique no fundo.

## Layout, tabelas e navegação

- Container central com largura máxima e gutters responsivos.
- Tabelas não ficam dentro de cartões ou bordas externas. Usam linhas horizontais, cabeçalhos sentence case e números tabulares.
- Em telas estreitas, a coluna de identificação e a coluna de ação permanecem visíveis durante a rolagem horizontal. Tabelas sem ações mantêm a coluna de identificação.
- O destino atual tem `aria-current="page"`.
- O destino de tela fica no fragmento da URL. O período e o filtro de tipo ficam nos parâmetros `month` e `type`, permitindo compartilhar a visão; o texto digitado na busca não entra na URL por privacidade.
- Sem overflow horizontal em 320–1920px: `overflow-x: clip` em `html` e `body`.
- Sem animação de largura, altura, `top` ou `left`; sem `transition: all`.

## Estados e acessibilidade

- Toda região que depende dos dados locais tem carregamento com skeleton, vazio com explicação e ação de preenchimento, erro com possibilidade de tentar novamente e conteúdo.
- Mudanças visíveis após gravação local são a própria confirmação; não mostrar toast de sucesso redundante. Toast permanece para efeitos invisíveis, como o download de backup, e para erros.
- Exclusões pedem confirmação. Restauração de backup informa que substituirá os dados atuais e pede confirmação.
- A interface atualiza `aria-busy`, `aria-expanded`, `aria-current` e estados de validação.
- Movimento respeita `prefers-reduced-motion`.
- Não inventar transações, limites, saldo, progresso, conexão bancária ou dados de exemplo.

## Privacidade

- Nunca introduzir token, chave, senha ou endpoint remoto para ler/escrever dados financeiros.
- Nunca versionar backups JSON.
- Não prometer que o site é privado: sem autenticação, a publicação é acessível a quem tiver o endereço.
- Nunca adicionar sincronização automática sem redesenhar a arquitetura e explicar as implicações de privacidade.
