import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ["**/*.{js,mjs,cjs,ts,tsx,jsx}"], // Apply to all JavaScript and TypeScript files
    languageOptions: { globals: globals.browser },
    rules: {
      "no-unused-vars": "off", // Turn off default no-unused-vars
      "no-undef": "error", // Keep no-undef errors
      "@typescript-eslint/no-explicit-any": "off", // Allow "any" in TypeScript
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ], // Ignore unused vars starting with "_"
      "react/react-in-jsx-scope": "off", // Disable the rule for JSX scope
      "react/jsx-filename-extension": [
        1,
        { extensions: [".js", ".jsx", ".ts", ".tsx"] },
      ], // Allow JSX in both JS and TS files
    },
  },
];
