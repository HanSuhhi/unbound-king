import { defineConfig, extractorSplit, presetAttributify, presetIcons } from "unocss";

export default defineConfig({
  presets: [presetAttributify(), presetIcons()],
  extractors: [extractorSplit],
});
