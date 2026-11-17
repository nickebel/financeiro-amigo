# Meu Financeiro

Aplicativo pessoal de controle financeiro, em português (pt-BR), com identidade visual azul e acesso privado.

## O que já vem da base

- Visão geral com saldo, receitas e despesas.
- Lançamentos de entradas e despesas.
- Cartões de crédito e compras parceladas.
- Contas a pagar.
- Metas de economia.
- Relatórios e gráficos.
- Interface responsiva e instalável como PWA.
- Sincronização com Supabase e políticas de Row Level Security (RLS).

## Acesso individual

Este projeto foi preparado para **uma única conta autorizada**. O cadastro público fica oculto e bloqueado na interface. Crie a conta do usuário diretamente no painel do Supabase e desative novos cadastros nas configurações de autenticação.

A proteção dos dados não depende de esconder os botões: as tabelas usam RLS e cada usuário autenticado só pode ler e alterar registros cujo `user_id` corresponda ao próprio `auth.uid()`.

## Configuração do Supabase

1. Crie um **novo projeto Supabase**, separado de qualquer outro financeiro.
2. Abra o SQL Editor e execute todo o arquivo `supabase/schema.sql`.
3. Em Authentication → Users, crie a conta do seu amigo e confirme o e-mail.
4. Em Authentication → Settings, desative a opção que permite novos cadastros (Sign-ups).
5. Em Project Settings → API, copie a Project URL e a chave pública publishable/anon.
6. Faça uma cópia de `config.example.js` com o nome `config.js` e preencha esses dois valores. Esse arquivo precisa estar incluído no deploy; como ele está no `.gitignore`, ao usar Git local será necessário adicioná-lo explicitamente (`git add -f config.js`).
7. Em Authentication → URL Configuration, configure a URL final do site como Site URL e como Redirect URL.

**Nunca coloque a chave `service_role`, senha do banco ou qualquer segredo administrativo em arquivos do navegador.** A chave publishable/anon pode ser usada no frontend porque o acesso aos dados é limitado pelas políticas RLS.

## Publicação

O repositório é privado. Ele pode ser conectado ao Cloudflare Pages para publicar a aplicação estática. Use:
- Framework preset: None
- Build command: `exit 0` (ou deixar vazio para site estático simples)
- Build output directory: `.` (raiz do projeto)

Depois de configurar o Supabase e o `config.js`, faça o deploy e adicione a URL gerada em Authentication → URL Configuration.

## Privacidade e observações

- O banco deste projeto deve ser exclusivo para o Financeiro Amigo.
- Os registros são inseridos manualmente; não existe conexão automática com bancos ou cartões.
- O saldo é calculado a partir dos lançamentos cadastrados.
- O app precisa de internet para autenticar e sincronizar. O cache offline guarda apenas recursos locais do aplicativo; dados financeiros continuam separados por usuário no IndexedDB e no Supabase.
- Proteja também o celular/computador com senha ou biometria.
