import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import pluginReact from 'eslint-plugin-react';
import pluginNext from '@next/eslint-plugin-next';

const config = [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      react: pluginReact,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': 'error',
      'react/react-in-jsx-scope': 'off',
    },
  },
  pluginNext.configs.recommended,
];

export default config;