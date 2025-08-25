import { defineConfig } from "vite";
import { getMaps, getMapsScripts, getMapsOptimizers } from "wa-map-optimizer-vite";

const maps = getMaps(".");
const scripts = getMapsScripts(maps);
const mapOptimizers = getMapsOptimizers(maps);

export default defineConfig({
  plugins: [...mapOptimizers],
  server: {
    host: "localhost",
    port: 5173,
    open: "/",
    cors: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "*",
    },
  },
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        ...scripts,
      },
    },
  },
});