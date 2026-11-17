# Design System — Meu Financeiro

**Sistema visual:** Blue Mist Atmosphere — Rich Blue em uma atmosfera oceânica, translúcida e cinematográfica.
**Referência:** composição vertical em tons azul-petróleo, névoa, superfícies foscas e formas fluidas abstratas fornecida pelo usuário.
**Escopo:** aplicativo financeiro pessoal; a referência inspira a atmosfera, não a estrutura de uma landing page institucional.

## Produto e integridade

O usuário registra manualmente entradas e despesas e acompanha saldo do período, vencimentos, cartões, parcelas, metas e relatórios.

O app permanece sem login, senha, conta, API, banco remoto ou sincronização automática. Os dados ficam no IndexedDB deste navegador/aparelho. Backup JSON é sempre manual, pertence ao usuário e nunca deve ser incluído no repositório.

Preservar os seis destinos, todos os formulários, IDs, handlers, operações CRUD, cálculos, campos, valores, estados de carregamento/vazio/erro, PWA e fluxo offline.

## Paleta e atmosfera

A base Rich Blue evolui para um conjunto atmosférico azul-petróleo e verde-água:

- Fundo profundo: `#071F27` / `#0B2932`.
- Oceano e elevação: `#153D47` / `#285560`.
- Azul-luz: `#ADEBFF`.
- Tipografia clara: `#EEF8F3`.
- Entradas positivas: verde-água claro; despesas: coral suave.

Usar gradientes radiais amplos e muito suaves para sugerir névoa e relevos. Não usar gradiente azul-roxo. Texturas e curvas ficam atrás do conteúdo e nunca reduzem o contraste.

## Tipografia

No máximo duas famílias, sem dependências externas:

- Display: Baskerville / Iowan Old Style / Palatino / Georgia, em títulos e valores de destaque.
- Interface: Segoe UI e fallback sans-serif do sistema para corpo, navegação, dados e controles.

## Composição

- Fundo imersivo azul-petróleo em camadas, com formas fluidas inspiradas em ondas e dunas abstratas.
- Navegação em vidro fosco discreto, com contraste e estado atual claros.
- O saldo é o foco: painel amplo e escuro, com reflexos azul-claro suaves e formas curvas abstratas.
- Entradas e despesas permanecem subordinadas, separadas por linhas e espaços.
- Painéis translúcidos são usados apenas para agrupar conteúdo real; blur, bordas e reflexos são discretos.
- Tabelas ficam abertas e legíveis, com linhas de separação e colunas sticky de fundo sólido o suficiente.
- No celular, o saldo aparece primeiro, os indicadores se empilham e os painéis mantêm contraste e toque acessível.
- Não reproduzir conteúdo de marketing, hero turístico, CTA de venda, chat flutuante ou rodapé de template.

## Componentes e acessibilidade

- Botões de ação em azul-luz ou azul-prussiano, sem efeito glass exagerado.
- Campos com superfície escura, borda definida, rótulos visíveis e foco claro.
- Diálogos usam `<dialog>` nativo.
- Alvos de toque com pelo menos 44px; inputs móveis em 16px.
- Estados de carregamento, vazio e erro continuam presentes.
- Movimento respeita `prefers-reduced-motion`; efeitos atmosféricos não devem ser necessários para compreender a tela.

## Privacidade

- Nunca adicionar token, chave, senha ou endpoint remoto para ler/escrever dados financeiros.
- Nunca versionar backups JSON.
- Sem autenticação, o site publicado é acessível a quem tiver o endereço.
- Nunca adicionar sincronização automática sem redesenhar a arquitetura e explicar as implicações.
