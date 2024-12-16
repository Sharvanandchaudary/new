import globals from "globals";
import pluginJs from "@eslint/js";

/** @type {import('eslint').Linter.Config} */
export default {
  env: {
    browser: true, // Enables browser global variables
    node: true,    // Enables Node.js global variables
    es2021: true,  // Enables ES2021 globals
  },
  languageOptions: {
    globals: globals.browser, // Use browser-specific globals
    parserOptions: {
      ecmaVersion: "latest", // Supports modern JavaScript features
      sourceType: "module",  // Enables ES modules
    },
  },
  plugins: [],
  extends: [
    pluginJs.configs.recommended, // Includes recommended rules from @eslint/js
  ],
  rules: {
    // Add custom rules or override defaults as needed
    "no-console": "warn",          // Warns on console.log usage
    "no-unused-vars": "warn",      // Warns on unused variables
    "eqeqeq": "error",             // Enforce strict equality
    "prefer-const": "error",       // Enforce usage of `const` where applicable
  },
};
