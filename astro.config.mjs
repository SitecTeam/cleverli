// @ts-check
import { defineConfig } from "astro/config";
import cloudflare from "@astrojs/cloudflare";
import tailwindcss from "@tailwindcss/vite";
import svgr from "vite-plugin-svgr";
import react from "@astrojs/react";

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
  },

  integrations: [react()],
});
