import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
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
      "next-env.d.ts",
    ],
  },
  // Base JS recommendations
  js.configs.recommended,

  // TypeScript recommendations
  ...tseslint.configs.recommended,

  // Next.js core-web-vitals rules (flat config)
  nextPlugin.flatConfig.coreWebVitals,

  // Browser globals for app code
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    languageOptions: {
      globals: globals.browser,
      parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    },
    rules: {},
  },

  // Node environment for config files
  {
    files: [
      "*.config.{js,cjs,mjs,ts}",
      "**/*.config.{js,cjs,mjs,ts}",
      "next-env.d.ts",
      "src/config.js",
    ],
    languageOptions: {
      globals: { ...globals.node },
      sourceType: "module",
    },
    rules: {},
  },
]);
