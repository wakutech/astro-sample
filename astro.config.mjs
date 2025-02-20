// @ts-check
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 8080,
  },
  devToolbar: {
    enabled: false,
  },
  image: {
    domains: ["images.microcms-assets.io"],
    remotePatterns: [
      {
        protocol: "https",
      },
    ],
  },
  vite: {
    define: {
      "import.meta.env.MICROCMS_SERVICE_DOMAIN":
        process.env.MICROCMS_SERVICE_DOMAIN,
      "import.meta.env.MICROCMS_API_KEY": process.env.MICROCMS_API_KEY,
    },
  },
});
