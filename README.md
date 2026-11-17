# Ray

Ray é um app financeiro pessoal de identidade editorial minimalista, com tema claro e modo escuro em tons de azul. Não exige login nem cadastro. Abre diretamente no painel e guarda os lançamentos no próprio navegador por meio do IndexedDB.

## O que o app faz

- Visão mensal com saldo, entradas e despesas.
- Lançamentos de receitas e gastos.
- Cartões e compras parceladas.
- Contas a pagar e status de pagamento.
- Metas de economia e contribuições.
- Gráficos por categoria e relatórios.
- Exportação e restauração de backup em JSON.
- Instalação como PWA e abertura offline depois da primeira visita.
- Navegação por URL: páginas, período e tipo de lançamento podem ser compartilhados; a busca digitada não é incluída.

## Como os dados são guardados

**Não existe conta, senha, banco remoto ou sincronização entre dispositivos.** O código e a publicação ficam no GitHub; os lançamentos financeiros ficam no IndexedDB do navegador/aparelho em que foram criados.

Isso significa:
- Abrir o mesmo endereço em outro celular ou computador começa com um espaço vazio.
- Quem usar o mesmo perfil de navegador no mesmo aparelho poderá abrir e ver os dados locais.
- Limpar os dados do navegador, remover o perfil ou perder o aparelho pode apagar os lançamentos.
- Faça backups regularmente em **Baixar backup** e guarde o arquivo JSON em local seguro.
- Para trocar de aparelho, abra o app no novo dispositivo e use **Restaurar** com o arquivo de backup.

O backup contém informações financeiras pessoais. Não o envie ao repositório, não o compartilhe publicamente e não o deixe em um computador compartilhado.

## Publicação pelo GitHub Pages

O repositório já inclui um workflow em `.github/workflows/deploy-pages.yml` que publica o conteúdo da raiz por GitHub Actions.

1. Abra **Settings → Pages** e selecione **GitHub Actions** como fonte de publicação.
2. Faça um push na branch `main` ou execute manualmente o workflow **Deploy to GitHub Pages**.
3. Depois da primeira execução bem-sucedida, o endereço do site aparece em **Settings → Pages**.

Este repositório está público, então o GitHub Pages pode ser usado no plano Free. O site publicado também será público e acessível a quem tiver o endereço. Isso não expõe os lançamentos financeiros, que permanecem no armazenamento local do navegador. Consulte a [documentação oficial do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages).

Como não há login, o site publicado é acessível a quem tiver o endereço. Os dados não são enviados pelo site; permanecem no dispositivo. Não use este modo em aparelho compartilhado.

## Design e qualidade

A interface segue o sistema editorial do Ray documentado em [DESIGN.md](DESIGN.md). Inclui tema claro e modo escuro azul, com a preferência guardada localmente no navegador. O workflow **Hallmark design audit** roda as verificações de JavaScript, renderização, estados e preservação de controles em cada pull request e push na branch principal.

## Desenvolvimento

O app financeiro publicado é estático: HTML, CSS e JavaScript nativos. Não requer npm, build, banco externo, API key ou serviço pago. Para testar localmente, sirva a pasta raiz por HTTP ou abra a página em um host HTTPS; recursos PWA e IndexedDB precisam de um contexto seguro.
