import eslint from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import globals from 'globals';

export default [
  eslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaFeatures: { jsx: true },
        ecmaVersion: 2022,
        sourceType: 'module'
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        React: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin
    },
    rules: {
      '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
      '@typescript-eslint/semi': ['error', 'always'],
      'react/jsx-uses-vars': 'error',
      'semi': 'off',
      'comma-dangle': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'error',
      'no-console': ['warn', { allow: ['info', 'error', 'warn'] }]
    }
  },
  {
    ignores: [
      'node_modules/',
      'dist/',
      '**/*.d.ts',
      '.eslintrc.*'
    ]
  }
];