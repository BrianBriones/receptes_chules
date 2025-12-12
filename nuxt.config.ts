// https://nuxt.com/docs/api/configuration/nuxt-config
import tsconfigPaths from "vite-tsconfig-paths";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  // We include the stylesheet via a public link to avoid module resolution issues
  // (vite-node / vitest sometimes can't resolve `~` or ./ paths for CSS modules).
  css: [],
  app: {
    head: {
      link: [{ rel: "stylesheet", href: "/css/global.css" }],
    },
  },
  modules: ["@pinia/nuxt"],
  vite: {
    plugins: [tsconfigPaths()],
  },
});
