import markdown from 'eslint-plugin-markdown'
import prettier from 'eslint-plugin-prettier'
import unicorn from 'eslint-plugin-unicorn'
import react from 'eslint-plugin-react'
import airbnb from 'eslint-config-airbnb'
import airbnbHooks from 'eslint-config-airbnb/hooks'
// import { FlatCompat } from '@eslint/eslintrc';

export default [
  {
    // eslint-plugin-markdown processes .js and .ts fenced code blockß snippet.
    // REF: https://github.com/eslint/eslint-plugin-markdown
    files: ['**/*.md'],
    plugins: {
      markdown
    },
    processor: 'markdown/markdown',
  },
  'eslint:recommended',
  unicorn.configs.recommended,
  airbnb,
  airbnbHooks,
  react.configs['jsx-runtime'],
  prettier.configs.recommended,
  {
    files: ['**/*.js', '**/*.mjs', '**/*.cjs', '**/*.jsx'],
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
          impliedStrict: true,
        }
      },
    },
    plugins: {
      prettier,
      markdown,
      unicorn,
    },
    rules: {
      'prettier/prettier': 'error',
      'import/prefer-default-export': 'off',
      'import/extensions': 'off',
      'unicorn/prefer-module': 'warn',
      'unicorn/prefer-node-protocol': 'off',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/filename-case': [ // REF: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
        'warn',
        {
          'case': 'kebabCase',
          'ignore': [
            /.+\.md$/,
            /.+\.txt$/,
            /.+\.env$/,
            /.+\.yaml$/,
          ]
        }
      ],
      'no-console': 'off',
      'no-iterator': 'off',
      'no-restricted-syntax': 'off',
      'no-await-in-loop': 'off',
      'consistent-return': 'off',
      'no-shadow': 'off',
      'no-unused-vars': 'off',
      'no-underscore-dangle': 'off',
    }
  },
  {
    files: ['**/*.{jsx,tsx}'],
    rules: {
      'unicorn/filename-case': [ // REF: https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/filename-case.md
        'warn',
        {
          'cases': {
            'kebabCase': true,
            'pascalCase': true
          }
        }
      ],
    }
  },
  {
    // In eslint-plugin-markdown v2, configuration for fenced code blocks is separate from the
    // containing Markdown file. Each code block has a virtual filename
    // appended to the Markdown file's path.
    files: ['**/*.md/*.js'],
    rules: {
      'import/no-unresolved': 'off',
      'import/no-extraneous-dependencies': 'off',
    },
  },

]
