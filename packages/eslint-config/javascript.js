const js = require('@eslint/js')
const prettier = require('eslint-plugin-prettier')
const markdown = require('eslint-plugin-markdown')
const unicorn = require('eslint-plugin-unicorn')

const _import = require('eslint-plugin-import')
const prettierConfig = require('eslint-config-prettier')
const airbnbBestPractices = require('eslint-config-airbnb-base/rules/best-practices')
const airbnbNode = require('eslint-config-airbnb-base/rules/node')
const airbnbStyle = require('eslint-config-airbnb-base/rules/style')
const airbnbVariables = require('eslint-config-airbnb-base/rules/variables')
const airbnbEs6 = require('eslint-config-airbnb-base/rules/es6')
const airbnbImports = require('eslint-config-airbnb-base/rules/imports')
const airbnbStrict = require('eslint-config-airbnb-base/rules/strict')
const globals = require('globals')

module.exports = [
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
    // First part of "plugin:markdown/recommended"
    files: ['*.md'],
    plugins: {
      markdown,
    },
    processor: 'markdown/markdown',
  },
  {
    // second part of "plugin:markdown/recommended"
    files: ['**/*.md/**'],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          impliedStrict: true,
        },
      },
    },
    plugins: {
      markdown,
    },
    rules: {
      'eol-last': 'off',
      'no-undef': 'off',
      'no-unused-expressions': 'off',
      'no-unused-vars': 'off',
      'padded-blocks': 'off',
      strict: 'off',
      'unicode-bom': 'off',
    },
  },
  {
    // name: "personal:markdown",
    // In eslint-plugin-markdown v2, configuration for fenced code blocks is separate from the
    // containing Markdown file. Each code block has a virtual filename
    // appended to the Markdown file's path.
    files: ['**/*.md/*.{m,c,}{j,t}s{x,}'],
    plugins: {
      import: _import,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          impliedStrict: true,
        },
      },
    },
    rules: {
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': 'off',
    },
  },
  {
    // name: "plugin:import/recommended",
    plugins: {
      import: _import,
    },
    rules: _import.configs.recommended.rules,
  },
  // {
  //   plugins: {
  //     unicorn,
  //   },
  //   rules: unicorn.configs.recommended.rules,
  // },
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
  {
    // name: "eslint-config-prettier",
    rules: prettierConfig.rules,
  },
  {
    // name: "plugin:prettier/recommended",
    plugins: {
      prettier,
    },
    rules: prettier.configs.recommended.rules,
  },
  {
    // name: "personal:javascript/1",
    plugins: {
      unicorn,
      import: _import,
      prettier,
    },
    rules: {
      'prettier/prettier': 'error',
      'import/prefer-default-export': 'off',
      'import/extensions': 'off',
      'unicorn/prefer-module': 'warn',
      'unicorn/prefer-node-protocol': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/filename-case': [
        // REF: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
        'warn',
        {
          case: 'kebabCase',
          ignore: [/.+\.md$/, /.+\.txt$/, /.+\.env$/, /.+\.yaml$/],
        },
      ],
      'no-console': 'off',
      'no-iterator': 'off',
      'no-restricted-syntax': 'off',
      'no-await-in-loop': 'off',
      'consistent-return': 'off',
      'no-shadow': 'off',
      'no-unused-vars': 'off',
      'no-underscore-dangle': 'off',
    },
    linterOptions: {
      reportUnusedDisableDirectives: true, // REF: https://eslint.org/docs/latest/use/configure/rules#report-unused-eslint-disable-comments
    },
  },
  {
    // name: "personal:javascript/2",
    files: [
      '**/eslint.config.{c,m,}{j,t}s',
      '**/haetae.config.{c,m,}{j,t}s',
      '**/prettier.config.{c,m,}{j,t}s',
      '**/.prettierrc.{c,m,}{j,t}s',
      '**/commitlint.config.{c,m,}{j,t}s',
    ],
    plugins: {
      import: _import,
    },
    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
  },
]
