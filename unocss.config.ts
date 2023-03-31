import { defineConfig, extractorSplit, presetAttributify, presetIcons, presetUno } from "unocss";

export default defineConfig({
  presets: [presetAttributify(), presetIcons(), presetUno()],
  extractors: [extractorSplit],
  rules: [
    [/^z-(\d+)$/, ([, d]) => ({ 'z-index': d })],
    [
      'flex_center',
      {
        display: 'flex',
        'justify-content': 'center',
        'align-items': 'center'
      }
    ]
  ]
});
