// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import react from "@astrojs/react";

// @ts-ignore - process is available in Node.js environment
const isProd = process.env.NODE_ENV === "production";

// https://astro.build/config
export default defineConfig({
  output: isProd ? "server" : "static",
  adapter: isProd
    ? cloudflare({
        imageService: "passthrough",
      })
    : undefined,

  vite: {
    plugins: [tailwindcss(), svgr()],
    define: {
      // Vercel auto-sets VERCEL=1 during builds — expose to client code
      // @ts-ignore - process is available in Node.js environment
      __IS_VERCEL__: JSON.stringify(!!process.env.VERCEL),
    },
  },

  integrations: [react()],
});
