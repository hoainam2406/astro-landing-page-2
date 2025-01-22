import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-moon-landing.netlify.app/",
  integrations: [tailwind(), icon()],
  build: {
    output: 'server',
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=3600', // Cache trong 1 giờ
      'ETag': 'W/"unique-version"', // Chỉ revalidate khi file thay đổi
    },
  },

});
