import pluginJs from "@eslint/js";

import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import globals from "globals";

export default [
  { ignores: [".docusaurus/", "build/", "docs/", "blog/"] },
  { languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } } },
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node, Intl: true },
    },
  },
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  pluginJs.configs.recommended,
  pluginReactConfig,
  {
    rules: {
      "react/react-in-jsx-scope": 0,
      "react/jsx-uses-react": 0,
      "react/prop-types": 0,
    },
  },
  {
    rules: {
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    },
  },
];
