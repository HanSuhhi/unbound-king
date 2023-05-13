/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
import unocss from "unocss/vite";

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    unocss(),
  ],
  server: {
    port: 20018,
  },
  envPrefix: [
    "PROJECT_NAME",
    "ROUTER_DEFAULT_PAGE",
    "I18N_DEFAULT_LANG",
    "STYLE_ASIDE_WIDTH",
    "STYLE_ASIDE_MODULES_WIDTH",
    "STYLE_COLLAPSE_WIDTH",
    "STYLE_ANIMATION_DURATION",
    "STYLE_EXTEND_WIDTH",
    "BUILD_ENCRYPTED_KEY",
    "BUILD_IV",
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
});
