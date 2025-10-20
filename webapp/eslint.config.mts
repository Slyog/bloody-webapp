import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import react from "eslint-plugin-react";
import nextPlugin from "@next/eslint-plugin-next";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Ignore build and vendor outputs
  {
    ignores: [
      "**/node_modules/**",
      "**/.next/**",
      "**/dist/**",
      "**/build/**",
      "**/.turbo/**",
    ],
  },
  // Base JS recommendations
  js.configs.recommended,

  // TypeScript recommendations
  ...tseslint.configs.recommended,

  // Next.js core-web-vitals rules (flat config)
  nextPlugin.flatConfig.coreWebVitals,

  // Project files configuration and React plugin tuning
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    plugins: { react },
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    },
    settings: {
      react: { version: "detect" },
    },
    rules: {
      // React 17+ and Next.js do not require React in scope for JSX
      "react/react-in-jsx-scope": "off",
      // We generally rely on TypeScript for props typing
      "react/prop-types": "off",
    },
  },

  // Node environment for config files
  {
    files: ["*.config.{js,cjs,mjs,ts}", "**/*.config.{js,cjs,mjs,ts}", "next-env.d.ts"],
    languageOptions: {
      globals: { ...globals.node },
      sourceType: "module",
    },
    rules: {},
  },
]);
