import { defineConfig } from "astro/config";
import image from "@astrojs/image";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://aju-blog-vercel.app",
  integrations: [
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
    sitemap(),
  ],
});
