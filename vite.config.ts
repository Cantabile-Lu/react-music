import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

import path from "path";

const { VITE_BASE_URL } = loadEnv(
  "development",
  path.resolve(__dirname, "env")
);
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envDir: path.resolve(__dirname, "env"),
  server: {
    proxy: {
      "/api": {
        target: VITE_BASE_URL,
        changeOrigin: true,
        rewrite: (path) => {
          let url = path.replace(/^\/api/, "");
          console.log(`🚀🚀🚀🚀🚀-> in vite.config.ts on 20`, path, url);
          return url;
        }
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")
    }
  }
});
