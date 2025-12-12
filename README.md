# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
## Migración de assets desde proyecto fuente

He añadido `app/styles/global.css`, composables y páginas migradas desde tu proyecto Vue.

Para copiar las imágenes utilizadas por la app, hay un script útil:

	scripts/copy-assets.sh

Edita la variable SOURCE_DIR dentro del script para apuntar a la carpeta que contiene tus imágenes (por ejemplo `~/m06/catClickers/img`) y luego ejecútalo.

npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
