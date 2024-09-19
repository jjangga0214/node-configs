// @ts-expect-error no declaration file
import prettierConfig from 'eslint-config-prettier'
import prettier from 'eslint-plugin-prettier'
// @ts-expect-error no declaration file
import markdown from 'eslint-plugin-markdown'
// @ts-expect-error no declaration file
import unicorn from 'eslint-plugin-unicorn'
// @ts-expect-error no declaration file
import importPlugin from 'eslint-plugin-import'
import ts from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'

export default [
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
    files: ['**/*.{c,m,}{j,t}s{x,}'],
    plugins: {
      unicorn,
      import: importPlugin,
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
      'no-continue': 'off',
    },
    linterOptions: {
      reportUnusedDisableDirectives: true, // REF: https://eslint.org/docs/latest/use/configure/rules#report-unused-eslint-disable-comments
    },
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
  {
    // name: "personal:javascript/2",
    files: [
      '**/{eslint,haetae,prettier,commitlint}.config.{c,m,}{j,t}s',
      '**/.prettierrc.{c,m,}{j,t}s',
    ],
    plugins: {
      import: importPlugin,
    },
    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
  },
  {
    // name: "personal:typescript",
    files: ['**/*.{c,m,}ts{x,}'],
    plugins: {
      '@typescript-eslint': ts,
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
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          // e.g. `{ fn(_) { ... } }` when argument starts with `_`,
          // @typescript-eslint/no-unused-vars is ignored for that argument
          args: 'all',
          argsIgnorePattern: '^_',
          caughtErrors: 'all',
          caughtErrorsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
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
      import: importPlugin,
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
    // name: "personal:haetae",
    files: ['**/haetae.config.{c,m,}{j,t}s'],
    rules: {
      'import/no-extraneous-dependencies': 'off',
    },
  },
] as Record<string, unknown>[]
