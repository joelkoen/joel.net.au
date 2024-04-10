import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  build: {
    assets: "assets",
  },
  compressHTML: true,
  integrations: [tailwind()],
  vite: {
    build: {
      assetsInlineLimit: 12288,
    },
  },
});
