# Glyph Portal — integração React

## Estado atual do repositório

O Ray em produção continua sendo um aplicativo estático em HTML, CSS e JavaScript. Ele ainda não tem `package.json`, React, TypeScript, Tailwind CSS, Vite ou configuração shadcn. O CSS do app existente está no arquivo raiz `style.css`.

Os arquivos deste diretório foram adicionados como uma integração React preparada, mas **não são carregados pelo site estático atual**. A página financeira não foi convertida para React e o workflow do GitHub Pages não foi alterado.

## Arquivos preparados

- `components/ui/glyph-portal.tsx`: componente React/TypeScript e lógica de câmera/rolagem.
- `components/ui/demo.tsx`: demonstração do Ray usando a palavra RAY e uma fotografia do Unsplash como cenário.
- O componente mantém o aviso de copyright e licença MIT do autor original.

O componente não usa ícones externos, lucide-react, framer-motion ou outra biblioteca de animação. Para renderizá-lo, ele precisa apenas de React e de um ambiente que compile TSX. Tailwind é incluído na configuração recomendada porque faz parte da estrutura shadcn solicitada, embora o CSS interno do Glyph Portal seja encapsulado e não dependa de classes Tailwind.

## Por que `components/ui`

`components/ui` é o diretório convencional para componentes visuais reutilizáveis no ecossistema shadcn. A CLI consulta `components.json` para saber onde gravar componentes adicionados e os caminhos de importação que deve gerar. Manter essa estrutura evita espalhar componentes base pela aplicação e faz imports como `@/components/ui/glyph-portal` permanecerem previsíveis.

Neste repositório, o arquivo foi colocado em `/components/ui` na raiz, conforme solicitado. Em um projeto Vite React recém-criado, o padrão normalmente fica em `src/components/ui`; copie os dois arquivos para esse diretório dentro do novo app ou ajuste os aliases para apontarem à pasta raiz.

## Configuração segura recomendada

Para não substituir o HTML que já publica o Ray nem quebrar os dados locais, teste o componente em um app React separado. No terminal, a partir da raiz deste repositório:

```bash
npm create vite@latest glyph-portal-app -- --template react-ts
cd glyph-portal-app
npm install
npm install tailwindcss @tailwindcss/vite
npm install -D @types/node
npx shadcn@latest init
```

Copie os arquivos preparados para o diretório convencional do Vite:

**PowerShell (Windows):**

```powershell
New-Item -ItemType Directory -Force src/components/ui
Copy-Item ../components/ui/glyph-portal.tsx, ../components/ui/demo.tsx src/components/ui/
```

**macOS/Linux:**

```bash
mkdir -p src/components/ui
cp ../components/ui/glyph-portal.tsx ../components/ui/demo.tsx src/components/ui/
```

### Tailwind CSS

No projeto Vite, o arquivo `src/index.css` deve importar o Tailwind v4:

```css
@import "tailwindcss";
```

### Alias do Vite

Configure o alias `@` para `src` em `vite.config.ts`, ao lado dos plugins React e Tailwind:

```ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
```

### Alias TypeScript

O template Vite React atual divide a configuração entre `tsconfig.json` e `tsconfig.app.json`. Em ambos, dentro de `compilerOptions`, configure:

```json
{
  "paths": {
    "@/*": ["./src/*"]
  }
}
```

Não é necessário adicionar `baseUrl` para esse alias. Confirme também que o `components.json` criado pela CLI aponta `ui` para `@/components/ui` e `components` para `@/components`.

### Renderizar a demonstração

No `src/App.tsx`:

```tsx
import RayGlyphPortalDemo from "@/components/ui/demo";

export default function App() {
  return <RayGlyphPortalDemo />;
}
```

Depois rode:

```bash
npm run dev
```

A demonstração usa uma imagem de fundo do Unsplash. A URL segue o formato de imagem documentado pelo próprio Unsplash. O componente também aceita fundos ReactNode próprios, como imagem local, vídeo ou canvas.

## Como colocar no Ray principal

Não publique este demo sobre a página financeira sem decidir onde a experiência ficará. O Glyph Portal é uma abertura de tela cheia e controlada por rolagem; inseri-lo antes do dashboard faria o usuário atravessar uma animação antes de acessar saldos e lançamentos.

Quando a aplicação React isolada estiver validada, a integração no site principal deve ser uma rota ou uma tela de boas-vindas opcional. A publicação exigirá uma etapa de build do React (Vite) no GitHub Actions e uma decisão explícita sobre como servir a rota sem substituir o app financeiro estático atual.

## Referências oficiais

- shadcn/ui — instalação com Vite, React, TypeScript e Tailwind: https://ui.shadcn.com/docs/installation/vite
- Unsplash — documentação de URLs de imagem: https://unsplash.com/documentation
