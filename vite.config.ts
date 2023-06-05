/// <reference types="vitest" />
import { resolve } from "node:path";
import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import unocss from "unocss/vite";

export default defineConfig(({ mode }) => {
  const { PROJECT_NAME } = loadEnv(mode, process.cwd(), "PROJECT_NAME");
  return {
    define: {
      __VUE_I18N_FULL_INSTALL__: true,
      __VUE_I18N_LEGACY_API__: false,
      __INTLIFY_PROD_DEVTOOLS__: false
    },
    plugins: [
      vue({
        script: {
          propsDestructure: true,
          defineModel: true
        }
      }),
      vueJsx(),
      unocss()
    ],
    server: {
      port: 20018
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
      "STYLE_BASE_FONT_SIZE",
      "BUILD_ENCRYPTED_KEY",
      "BUILD_IV",
      "STYLE_HEADER_HEIGHT",
      "EMAIL"
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
        "#": resolve(__dirname)
      }
    },
    test: {
      root: "src",
      environment: "jsdom",
      transformMode: {
        web: [/.[tj]sx$/]
      }
    },
    ssr: {
      format: "cjs"
    }
  };
});
