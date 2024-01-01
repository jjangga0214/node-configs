// @ts-expect-error no declaration file
import * as importPlugin from 'eslint-plugin-import'
import ts from '@typescript-eslint/eslint-plugin'
import * as tsParser from '@typescript-eslint/parser'
// @ts-expect-error no declaration file
import * as airbnbTsLibShared from 'eslint-config-airbnb-typescript/lib/shared'
import globals from 'globals'
import personal from './personal.js'

export default [
  {
    files: ['**/*.{c,m,}ts'],
    languageOptions: {
      globals: {
        ...globals.es2021,
        ...globals.nodeBuiltin,
      },
    },
  },
  {
    files: ['**/*.{c,m,}ts{x,}'],
    plugins: {
      import: importPlugin,
      '@typescript-eslint': ts,
    },
    languageOptions: {
      parser: tsParser,
    },
    settings: airbnbTsLibShared.settings,
    rules: airbnbTsLibShared.rules,
  },
  {
    // Patched from eslint-config-airbnb-typescript/lib/shared
    files: ['**/*.{c,m,}ts{x,}'],
    plugins: {
      import: importPlugin,
      '@typescript-eslint': ts,
    },
    languageOptions: {
      parser: tsParser,
    },
    settings: airbnbTsLibShared.settings,
    rules: {
      'constructor-super': 'off',
      'getter-return': 'off',
      'no-const-assign': 'off',
      'no-dupe-args': 'off',
      'no-dupe-class-members': 'off',
      'no-dupe-keys': 'off',
      'no-func-assign': 'off',
      'no-import-assign': 'off',
      'no-new-symbol': 'off',
      'no-obj-calls': 'off',
      'no-redeclare': 'off',
      'no-setter-return': 'off',
      'no-this-before-super': 'off',
      'no-undef': 'off',
      'no-unreachable': 'off',
      'no-unsafe-negation': 'off',
      'valid-typeof': 'off',
      'import/named': 'off',
      'import/no-named-as-default-member': 'off',
      'import/no-unresolved': 'off',
    },
  },
  {
    // name: "plugin:@typescript-eslint/eslint-recommended",
    files: ['**/*.{c,m,}ts{x,}'],
    plugins: {
      '@typescript-eslint': ts,
    },
    languageOptions: {
      parser: tsParser,
    },
    rules: {
      'constructor-super': 'off',
      'getter-return': 'off',
      'no-const-assign': 'off',
      'no-dupe-args': 'off',
      'no-dupe-class-members': 'off',
      'no-dupe-keys': 'off',
      'no-func-assign': 'off',
      'no-import-assign': 'off',
      'no-new-symbol': 'off',
      'no-obj-calls': 'off',
      'no-redeclare': 'off',
      'no-setter-return': 'off',
      'no-this-before-super': 'off',
      'no-undef': 'off',
      'no-unreachable': 'off',
      'no-unsafe-negation': 'off',
      'no-var': 'error',
      'prefer-const': 'error',
      'prefer-rest-params': 'error',
      'prefer-spread': 'error',
    },
  },
  {
    // name: "plugin:@typescript-eslint/recommended",
    files: ['**/*.{c,m,}ts{x,}'],
    plugins: {
      '@typescript-eslint': ts,
    },
    languageOptions: {
      parser: tsParser,
    },
    rules: ts.configs['recommended-type-checked'].rules,
  },
  {
    files: ['**/*.{c,m,}ts{x,}'],
    plugins: {
      import: importPlugin,
    },
    settings: importPlugin.configs.typescript.settings,
    rules: importPlugin.configs.typescript.rules,
  },
  ...personal,
] as Record<string, unknown>[]
