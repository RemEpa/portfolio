import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.NODE_ENV === "production" ? "/portfolio/" : "/",
  build: {
    outDir: "dist",
    sourcemap: true,
  },
  publicDir: "public",
});
