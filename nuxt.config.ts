// https://nuxt.com/docs/api/configuration/nuxt-config
import tsconfigPaths from "vite-tsconfig-paths";
const COMPONENT_PATHS = [
  { path: 'Components', pathPrefix: false }
];

export default defineNuxtConfig({
  components: COMPONENT_PATHS,
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  srcDir: 'app/',
  // We include the stylesheet via a public link to avoid module resolution issues
  // (vite-node / vitest sometimes can't resolve `~` or ./ paths for CSS modules).
  css: [],
  app: {
    head: {
      link: [{ rel: "stylesheet", href: "/css/global.css" }],
    },
  },
  modules: ["@pinia/nuxt"],
  runtimeConfig: {
    public: {
      geminiKey: process.env.VITE_GEMINI_KEY || "",
    },
  },
  vite: {
    plugins: [tsconfigPaths()],
  },
});
