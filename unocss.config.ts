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
    ],
    ["m_l", {"margin-left": "var(--base-margin)"}],
    ["m_r", {"margin-right": "var(--base-margin)"}],
    ["f_b_s", { "font-size": "var(--font-body-small)" }],
    ["c_g_b_2", { "color": "var(--gray-bright-2)" }],
  ]
});
