module.exports = {
  extends: "@antfu",
  rules: {
    "semi": [2, "always"],
    "@typescript-eslint/semi": [2, "always"],
    "comma-dangle": [2, "never"],
    "@typescript-eslint/comma-dangle": [2, "never"],
    "quotes": [2, "double"],
    "@typescript-eslint/quotes": [2, "double"],
    "vue/component-name-in-template-casing": [
      "error",
      "kebab-case",
      {
        registeredComponentsOnly: true,
        ignores: []
      }
    ],
    "antfu/if-newline": [0],
    "vue/valid-template -root": "off"
  },
  parserOptions: {
    project: [
      "./tsconfig.client.json",
      "./tsconfig.server.json",
      "./tsconfig.node.json"
    ],
  }
};
