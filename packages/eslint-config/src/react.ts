// @ts-expect-error no declaration file
import airbnbReact from 'eslint-config-airbnb/rules/react'
// @ts-expect-error no declaration file
import airbnbReactA11y from 'eslint-config-airbnb/rules/react-a11y'
// @ts-expect-error no declaration file
import airbnbReactHooks from 'eslint-config-airbnb/rules/react-hooks'
// @ts-expect-error no declaration file
import airbnbTs from 'eslint-config-airbnb-typescript'
// @ts-expect-error no declaration file
import react from 'eslint-plugin-react'
// @ts-expect-error no declaration file
import reactHooks from 'eslint-plugin-react-hooks'
// @ts-expect-error no declaration file
import jsxA11y from 'eslint-plugin-jsx-a11y'
import globals from 'globals'
import personal from './personal.js'

export default [
  {
    // name: "personal:react/filename-case",
    files: ['**/*.{c,m,}{j,t}s{x,}'],
    languageOptions: {
      globals: {
        ...globals.es2021,
        ...globals.browser,
      },
    },
  },
  {
    // name: "eslint-config-airbnb/rules/react",
    files: ['**/*.{c,m,}{j,t}s{x,}'],
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: airbnbReact.parserOptions,
    },
    settings: airbnbReact.settings,
    rules: airbnbReact.rules,
  },
  {
    // name: "eslint-config-airbnb/rules/react-a11y",
    files: ['**/*.{c,m,}{j,t}s{x,}'],
    plugins: {
      'jsx-a11y': jsxA11y,
      react,
    },
    languageOptions: {
      parserOptions: airbnbReactA11y.parserOptions,
    },
    rules: airbnbReactA11y.rules,
  },
  {
    // name: "eslint-config-airbnb/hooks",
    files: ['**/*.{c,m,}{j,t}s{x,}'],
    plugins: {
      'react-hooks': reactHooks,
    },
    languageOptions: {
      parserOptions: airbnbReactHooks.parserOptions,
    },
    rules: airbnbReactHooks.rules,
  },
  {
    // name: "plugin:react/jsx-runtime",
    files: ['**/*.{c,m,}{j,t}s{x,}'],
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: react.configs['jsx-runtime'].parserOptions,
    },
    rules: react.configs['jsx-runtime'].rules,
  },
  {
    // name: "eslint-config-airbnb-typescript",
    files: ['**/*.{c,m,}{j,t}s{x,}'],
    plugins: {
      react,
    },
    settings: airbnbTs.settings,
    rules: airbnbTs.rules,
  },
  ...personal,
] as const
