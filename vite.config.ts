/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
import unocss from "unocss/vite";

// https://vitejs.dev/config/
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
    "PARAM_SETTING_CHARACTER_HEIGHT_DEFAULT_MAX",
    "PARAM_SETTING_CHARACTER_WEIGHT_DEFAULT_MAX",
    "ASIDE_WIDTH",
    "ASIDE_MODULES_WIDTH",
    "BOX_COLLAPSE_WIDTH",
    "ANIMATION_DURATION",
    "BOX_EXTEND_WIDTH",
    "ENCRYPTED_KEY",
    "IV",
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
