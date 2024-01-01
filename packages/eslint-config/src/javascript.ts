// @ts-expect-error no declaration file
import js from '@eslint/js'
// @ts-expect-error no declaration file
import unicorn from 'eslint-plugin-unicorn'
// @ts-expect-error no declaration file
import * as importPlugin from 'eslint-plugin-import'
// @ts-expect-error no declaration file
import airbnbBestPractices from 'eslint-config-airbnb-base/rules/best-practices'
// @ts-expect-error no declaration file
import airbnbNode from 'eslint-config-airbnb-base/rules/node'
// @ts-expect-error no declaration file
import airbnbStyle from 'eslint-config-airbnb-base/rules/style'
// @ts-expect-error no declaration file
import airbnbVariables from 'eslint-config-airbnb-base/rules/variables'
// @ts-expect-error no declaration file
import airbnbEs6 from 'eslint-config-airbnb-base/rules/es6'
// @ts-expect-error no declaration file
import airbnbImports from 'eslint-config-airbnb-base/rules/imports'
// @ts-expect-error no declaration file
import airbnbStrict from 'eslint-config-airbnb-base/rules/strict'
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
      import: importPlugin,
    },
    rules: importPlugin.configs.recommended.rules,
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
    // name: "eslint-config-airbnb-base/rules/imports",
    plugins: {
      import: importPlugin,
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
