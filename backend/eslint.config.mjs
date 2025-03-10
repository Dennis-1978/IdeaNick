import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import eslint from '@eslint/js';
import globals from 'globals';

export default [
  eslint.configs.recommended,

  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: true,
      },
      globals: {
        ...globals.node,
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      semi: ['error', 'always'],
      '@typescript-eslint/semi': ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],
      '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'error',
      'no-undef': 'off',
    },
  },
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    ignores: ['node_modules/', 'dist/'],
  },
];
