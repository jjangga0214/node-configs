// @ts-ignore
import airbnbReact from 'eslint-config-airbnb/rules/react'
// @ts-ignore
import airbnbReactA11y from 'eslint-config-airbnb/rules/react-a11y'
// @ts-ignore
import airbnbReactHooks from 'eslint-config-airbnb/rules/react-hooks'
// @ts-ignore
import airbnbTs from 'eslint-config-airbnb-typescript'
// @ts-ignore
import react from 'eslint-plugin-react'
// @ts-ignore
import reactHooks from 'eslint-plugin-react-hooks'
// @ts-ignore
import jsxA11y from 'eslint-plugin-jsx-a11y'
// @ts-ignore
import unicorn from 'eslint-plugin-unicorn'
import globals from 'globals'

export = [
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
  {
    // name: "personal:react/filename-case",
    files: ['**/*.{c,m,}{j,t}sx'],
    plugins: {
      unicorn,
    },
    rules: {
      'unicorn/filename-case': [
        // REF: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
        'warn',
        {
          cases: {
            kebabCase: true,
            pascalCase: true,
          },
        },
      ],
    },
  },
] as const
