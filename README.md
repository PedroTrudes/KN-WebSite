# KN Serralheria e Vidraçaria — React + SCSS

Landing page convertida para **React com JavaScript (JSX)**, **Vite** e **SCSS**, mantendo o design, as imagens e as funcionalidades da versão original.

## Executar

Requer Node.js 20.19+ ou 22.12+.

```bash
npm install
npm run dev
```

Abra o endereço indicado pelo Vite, normalmente **http://localhost:5173**. `npm start` também inicia o ambiente de desenvolvimento.

## Gerar e visualizar o build

```bash
npm run build
npm run preview
```

O build gera a pasta `dist/`. Uma etapa adicional pré-renderiza o conteúdo React no HTML para que textos, serviços, links e catálogo já estejam presentes no documento entregue aos visitantes e mecanismos de busca. No navegador, o React hidrata esse HTML para ativar as interações.

## Organização

- `src/App.jsx`: composição da página e estado do produto selecionado.
- `src/components/`: cabeçalho, hero, serviços, catálogo, modal, sobre, etapas, localização, perguntas frequentes e rodapé.
- `src/data/site.js`: referências do catálogo, filtros, número do WhatsApp e mensagens de orçamento.
- `src/styles/main.scss`: entrada dos estilos.
- `src/styles/_variables.scss`: paleta.
- `src/styles/_mixins.scss`: mixin para breakpoints.
- Demais arquivos SCSS: estilos organizados por seção e responsividade.
- `public/assets/`: imagens e favicon.
- `index.html`: metadados e dados estruturados de SEO.
- `scripts/prerender.mjs` e `src/render.jsx`: pré-renderização durante o build.

## Editar o catálogo

Edite o array `products` em `src/data/site.js`. Cada referência contém título, descrição, categorias, texto do card e classe de imagem. Os cards e o modal utilizam esses mesmos dados.

As quatro imagens vêm dos quadrantes de `public/assets/catalogo.webp`. As classes `image-one` a `image-four` estão em `src/styles/_catalog.scss`. Para usar fotos individuais, altere as classes e ajuste `background-size` para `cover`, incluindo o modal em `_modal.scss`.

As imagens são **referências ilustrativas geradas por IA**, não obras executadas pela KN. Substitua pelas fotografias reais autorizadas da empresa.

## Editar o WhatsApp

Altere `whatsappNumber` e `messages` em `src/data/site.js`. Atualize também os números exibidos nos componentes `Location.jsx` e `Footer.jsx` e os dados estruturados em `index.html`.

## Publicar

Configure sua hospedagem estática com:

- Comando de build: `npm run build`.
- Diretório de saída: `dist`.

Atualize o domínio nas tags `canonical`, `og:url`, `og:image`, em `public/robots.txt` e `public/sitemap.xml`. Elas ainda apontam para a hospedagem original.

Os assets usam caminhos a partir da raiz do domínio. Para publicar em um subdiretório, ajuste o `base` do Vite e os caminhos dos assets/metadados de acordo com esse prefixo.

## GitHub

Extraia o ZIP e envie os arquivos para seu repositório. O `.gitignore` exclui `node_modules` e `dist`; ambos são recriados pelos comandos acima.

O pacote não inclui histórico Git, credenciais nem vínculo com a hospedagem original. Os prompts das imagens estão em `assets-prompts.md`.
