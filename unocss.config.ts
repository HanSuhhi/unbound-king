import { defineConfig, extractorSplit, presetAttributify, presetIcons, presetUno } from "unocss";

export default defineConfig({
  presets: [presetAttributify(), presetIcons(), presetUno()],
  extractors: [extractorSplit],
  rules: [
    [/^z-(\d+)$/, ([, d]) => ({ 'z-index': d })],
    [/^flex-(\d+)$/, ([, d]) => ({ 'flex': d })],
    ['dialog_reset', {
      'padding': '0',
      "border": 'none'
    }],
    ['pointer', { 'cursor': 'pointer' }],
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
