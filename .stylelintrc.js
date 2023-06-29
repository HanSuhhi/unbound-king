const caseConfigs = {
  "function-name-case": "lower",
  "selector-type-case": "lower",
  "value-keyword-case": "lower",
};

const emptyLines = {
  "at-rule-empty-line-before": [
    "always",
    {
      except: ["after-same-name", "first-nested"],
    },
  ],
  "comment-empty-line-before": [
    "always",
    {
      except: ["first-nested"],
      ignore: ["after-comment", "stylelint-commands"],
      ignoreComments: ["property"],
    },
  ],
  "custom-property-empty-line-before": [
    "always",
    {
      except: ["after-comment", "after-custom-property", "first-nested"],
    },
  ],
  "declaration-empty-line-before": [
    "always",
    {
      except: ["first-nested", "after-comment"],
      ignore: ["after-declaration"],
    },
  ],
  "rule-empty-line-before": [
    "always",
    {
      except: ["after-single-line-comment", "first-nested"],
    },
  ],
};

const notationConfigs = {
  "alpha-value-notation": "percentage",
  "color-function-notation": [
    "modern",
    {
      ignore: ["with-var-inside"],
    },
  ],
  "hue-degree-notation": "angle",
  "import-notation": "url",
  "keyframe-selector-notation": "percentage-unless-within-keyword-only-block",
  "media-feature-range-notation": "context",
  "selector-not-notation": "simple",
  "selector-pseudo-element-colon-notation": "double",
};

const quotesConfigs = {
  "font-family-name-quotes": "always-where-recommended",
  "function-url-quotes": "always",
  "selector-attribute-quotes": "always",
};

const redundantConfgis = {
  "declaration-block-no-redundant-longhand-properties": true,
  "shorthand-property-no-redundant-values": true,
};

const MaxMinConfigs = {
  "declaration-block-single-line-max-declarations": 0,
};

const deprecatedConfigs = {
  "indentation": [2, {
    "baseIndentLevel": 0,
  }],
  "selector-combinator-space-before": "always",
  "selector-combinator-space-after": "always",
}

const stylelintDefaultRules = {
  "no-descending-specificity": true,
  "comment-whitespace-inside": "always",
  "declaration-block-no-duplicate-custom-properties": true,
  "declaration-block-no-duplicate-properties": true,
  "font-family-no-duplicate-names": true,
  "keyframe-block-no-duplicate-selectors": true,
  "no-duplicate-at-import-rules": true,
  "no-duplicate-selectors": true,
  "comment-no-empty": true,
  "function-calc-no-unspaced-operator": true,
  "keyframe-declaration-no-important": true,
  "no-invalid-position-at-import-rule": true,
  "string-no-newline": true,
  "font-family-no-missing-generic-family-keyword": true,
  "custom-property-no-missing-var-function": true,
  "function-linear-gradient-no-nonstandard-direction": true,
  "declaration-block-no-shorthand-property-overrides": true,
  "selector-anb-no-unmatchable": true,
  "declaration-property-value-no-unknown": [true, {
    ignoreProperties: {
      "width": ["-webkit-fill-available","/^v-bind\\(.+\\)$/"],
      "/.+/":  ["/^v-bind\\(.+\\)$/"]
    }
  }],
  "media-feature-name-no-unknown": true,
  // every custom property need to be defined in their block
  // "no-unknown-custom-properties": true
  "selector-pseudo-class-no-unknown": [
    true,
    {
      ignorePseudoClasses: ["deep"],
    },
  ],
  "selector-pseudo-element-no-unknown": true,
  "selector-type-no-unknown": true,
  "declaration-no-important": true,
  "selector-class-pattern": null,
  "color-named": "never",
  "length-zero-no-unit": true,
  "value-no-vendor-prefix": [true, {
    ignoreValues: ["fill-available"]
  }],
  "property-no-vendor-prefix": [true, {
    ignoreProperties: ["mask", "mask-composite"]
  }],
  ...caseConfigs,
  ...emptyLines,
  ...notationConfigs,
  ...quotesConfigs,
  ...redundantConfgis,
  ...MaxMinConfigs,
  ...deprecatedConfigs
};

module.exports = {
  extends: ["stylelint-config-standard", "stylelint-config-recommended-vue", "stylelint-config-clean-order"],
  plugins: ["stylelint-declaration-block-no-ignored-properties", "stylelint-color-format", "stylelint-group-selectors"],
  rules: {
    "plugin/declaration-block-no-ignored-properties": true,
    "color-format/format": {
      format: "hsl",
    },
    "plugin/stylelint-group-selectors": true,
    ...stylelintDefaultRules,
    "at-rule-no-unknown": [
      true,
      {
        "ignoreAtRules": ["layer", "component", "base"]
      }
    ]
  },
};
