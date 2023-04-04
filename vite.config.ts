import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { resolve } from "path";
import unocss from "unocss/vite";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    unocss(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  server: {
    port: 20018,
  },
  envPrefix: [
    "SETTING_HEADER_LIST_MAX_NUM",
    "PROJECT_NAME",
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
});
