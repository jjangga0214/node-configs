// @ts-ignore
import js from '@eslint/js'
// @ts-ignore
import prettier from 'eslint-plugin-prettier'
// @ts-ignore
import markdown from 'eslint-plugin-markdown'
// @ts-ignore
import unicorn from 'eslint-plugin-unicorn'
// @ts-ignore
import * as _import from 'eslint-plugin-import'
// @ts-ignore
import prettierConfig from 'eslint-config-prettier'
// @ts-ignore
import airbnbBestPractices from 'eslint-config-airbnb-base/rules/best-practices'
// @ts-ignore
import airbnbNode from 'eslint-config-airbnb-base/rules/node'
// @ts-ignore
import airbnbStyle from 'eslint-config-airbnb-base/rules/style'
// @ts-ignore
import airbnbVariables from 'eslint-config-airbnb-base/rules/variables'
// @ts-ignore
import airbnbEs6 from 'eslint-config-airbnb-base/rules/es6'
// @ts-ignore
import airbnbImports from 'eslint-config-airbnb-base/rules/imports'
// @ts-ignore
import airbnbStrict from 'eslint-config-airbnb-base/rules/strict'
// @ts-ignore
import globals from 'globals'
import personal from './personal'

export = [
  {
    files: ['**/*.{c,m,}js'],
    languageOptions: {
      globals: {
        ...globals.es2021,
        ...globals.nodeBuiltin,
      },
    },
  },
  js.configs.recommended,
  {
    // name: "plugin:import/recommended",
    plugins: {
      import: _import,
    },
    rules: _import.configs.recommended.rules,
  },
  {
    plugins: {
      unicorn,
    },
    rules: unicorn.configs.recommended.rules,
  },
  {
    // name: "eslint-config-airbnb-base/rules/best-practices",
    rules: airbnbBestPractices.rules,
  },
  {
    // name: "eslint-config-airbnb-base/rules/node",
    rules: airbnbNode.rules,
  },
  {
    // name: "eslint-config-airbnb-base/rules/style",
    rules: airbnbStyle.rules,
  },
  {
    // name: "eslint-config-airbnb-base/rules/variables",
    rules: airbnbVariables.rules,
  },
  {
    // name: "eslint-config-airbnb-base/rules/es6",
    languageOptions: {
      parserOptions: {
        ecmaFeatures: airbnbEs6.parserOptions.ecmaFeatures,
      },
    },
    rules: airbnbEs6.rules,
  },
  {
    // name: "eslint-config-airbnb-base/rules/import",
    plugins: {
      import: _import,
    },
    settings: airbnbImports.settings,
    rules: airbnbImports.rules,
  },
  {
    // name: "eslint-config-airbnb-base/rules/strict",
    rules: airbnbStrict.rules,
  },
  ...personal,
] as const
