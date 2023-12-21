// @ts-ignore
import * as _import from 'eslint-plugin-import'
import tsEslint from '@typescript-eslint/eslint-plugin'
// @ts-ignore (bug)
import tsParser from '@typescript-eslint/parser'
// @ts-ignore
import airbnbTsLibShared from 'eslint-config-airbnb-typescript/lib/shared'
import globals from 'globals'

export = [
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
      import: _import,
      '@typescript-eslint': tsEslint,
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
      import: _import,
      '@typescript-eslint': tsEslint,
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
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tsEslint,
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
    languageOptions: {
      parser: tsParser,
    },
    plugins: {
      '@typescript-eslint': tsEslint,
    },
    rules: tsEslint.configs.recommended.rules,
  },
  {
    files: ['**/*.{c,m,}ts{x,}'],
    plugins: {
      import: _import,
    },
    settings: _import.configs.typescript.settings,
    rules: _import.configs.typescript.rules,
  },
  {
    // [personal config]
    // name: "personal:typescript",
    files: ['**/*.{c,m,}ts{x,}'],
    plugins: {
      '@typescript-eslint': tsEslint,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        // REF: https://www.npmjs.com/package/eslint-config-airbnb-typescript
        project: ['./packages/*/tsconfig.json', './tsconfig.json'],
      },
    },
    rules: {
      '@typescript-eslint/no-shadow': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': [
          '.ts',
          '.tsx',
          '.cts',
          '.ctsx',
          '.mts',
          '.mtsx',
        ],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: ['packages/*/tsconfig.json', 'tsconfig.json'],
        },
      },
    },
  },
] as unknown[]
