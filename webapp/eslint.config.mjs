import eslint from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';

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
        sourceType: 'module',
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        React: 'readonly',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      import: importPlugin,
    },
    rules: {
      '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
      '@typescript-eslint/semi': ['error', 'always'],
      'react/jsx-uses-vars': 'error',
      semi: 'off',
      'comma-dangle': 'off',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': 'error',
      'no-console': [
        'error',
        {
          allow: ['info', 'error', 'warn'],
        },
      ],
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
          ],
          pathGroups: [
            {
              pattern: '@/**',
              group: 'internal',
              position: 'after',
            },
            {
              pattern: '*.{css,scss,sass,less}',
              group: 'object',
              patternOptions: { matchBase: true },
              position: 'after',
            },
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
      '@typescript-eslint/no-restricted-imports': [
        'error',
        {
          paths: [
            {
              name: '@ideanick/backend/**',
              allowTypeImports: true,
              message: 'Only types and input schemas are allowed from backend',
              allow: [
                {
                  name: '@ideanick/backend/**/input',
                  importNames: ['zCreateIdeaTrpcInput'],
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    ignores: ['node_modules/', 'dist/', '**/*.d.ts', '.eslintrc.*'],
  },
];
