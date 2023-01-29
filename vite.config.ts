import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
import unocss from "unocss/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), unocss()],
  server: {
    port: 20018,
  },
  envPrefix: ["SETTING_HEADER_LIST_MAX_NUM"],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
});
