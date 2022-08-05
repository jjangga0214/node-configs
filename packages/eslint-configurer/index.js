const merge = require('deepmerge')

function javascript({ react = false } = {}) {
  return {
    env: {
      'node': true,
      'es2020': true, // REF: https://eslint.org/docs/user-guide/configuring/language-options#specifying-parser-options
    },
    plugins: ['prettier', 'markdown', 'unicorn'],
    parserOptions: {
      'ecmaVersion': 'latest', // REF: https://eslint.org/docs/user-guide/configuring/language-options#specifying-parser-options
      'sourceType': 'module',
      'ecmaFeatures': {
        'jsx': react,
        'impliedStrict': true,
      }
    },
    extends: [
      'eslint:recommended',
      'plugin:unicorn/recommended',
      ...(
        react ? [
          require.resolve('eslint-config-airbnb'),
          require.resolve('eslint-config-airbnb/hooks'),
          'plugin:react/jsx-runtime',
        ] :
          [require.resolve('eslint-config-airbnb-base'),]

      ),
      require.resolve('eslint-config-prettier'),
      'plugin:markdown/recommended', // REF: https://github.com/eslint/eslint-plugin-markdown/blob/main/lib/index.js
    ],
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
          "case": "kebabCase",
          "ignore": [
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
    },
    reportUnusedDisableDirectives: true, // REF: https://eslint.org/docs/user-guide/configuring/rules#disabling-inline-comments
  }
}


function typescript({ react = false } = {}) {
  return merge(javascript({ react }), {
    parser: require.resolve('@typescript-eslint/parser'),
    parserOptions: {
      project: './tsconfig.json', // REF: https://www.npmjs.com/package/eslint-config-airbnb-typescript
    },
    plugins: ['@typescript-eslint'],
    extends: [
      react ?
        require.resolve('eslint-config-airbnb-typescript')
        : require.resolve('eslint-config-airbnb-typescript/base'), // "base" does not include tsx rules. REF: https://www.npmjs.com/package/eslint-config-airbnb-typescript
      'plugin:@typescript-eslint/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
      require.resolve('eslint-config-prettier'), // Let prettier have high priority
    ],
    rules: {
      '@typescript-eslint/no-shadow': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': [".ts", ".tsx"]
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true
        },
      },
    },
  });
}

// To avoid naming collisions
const _typescript = typescript

function jest({ react = false, typescript = false } = {}) {
  // Why separating config for test files? => REF: https://github.com/jest-community/eslint-plugin-jest/issues/934
  return merge(typescript ? _typescript({ react }) : javascript({ react }), {
    env: {
      'jest/globals': true,
    },
    plugins: ['jest'],
    extends: ['plugin:jest/all'],
    rules: {
      'jest/no-disabled-tests': 'warn',
      'jest/no-focused-tests': 'error',
      'jest/no-identical-title': 'error',
      'jest/prefer-to-have-length': 'warn',
      'jest/valid-expect': 'error',
      'jest/expect-expect': 'off',
      'jest/prefer-expect-assertions': 'off',
      'jest/no-test-return-statement': 'off',
      'jest/consistent-test-it': 'off',
    },
  })
}

// To avoid naming collisions
const _jest = jest

function configure({ react = false, typescript = false, jest = false } = {}) {
  const js = javascript({ react })

  return {
    // `ignorePatterns` should not be in `overrides`
    // REF: https://eslint.org/docs/user-guide/configuring/ignoring-code#ignorepatterns-in-config-files
    ignorePatterns: ['**/dist/**',],
    overrides: [
      {
        // eslint-plugin-markdown processes .js and .ts fenced code blockß snippet.
        // REF: https://github.com/eslint/eslint-plugin-markdown
        files: ['**/*.md'],
        processor: 'markdown/markdown',
      },
      {
        ...js,
        files: ['**/*.{js,cjs,mjs,jsx}',],
        overrides: [
          ...(jest ? [{
            files: ['**/*.{spec,test}.{js,jsx}', '**/__test__/**/*.{js,jsx}'],
            ..._jest({ react, typescript: false }),
          }] : []),
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
      },
      ...(typescript ? [{
        files: ['**/*.ts', '**/*.tsx'],
        ..._typescript({ react }),
        overrides: [
          ...(jest ? [{
            files: ['**/*.{spec,test}.{ts,tsx}', '**/__test__/**/*.{ts,tsx}'],
            ..._jest({ react, typescript: true }),
          }] : []),
          {
            files: ['**/*.md/*.ts'],
            // Why `js.parserOptions` instead of `ts.parserOptions`?
            // It's not to provide `parserOptions.project` property. [REF](https://github.com/eslint/eslint-plugin-markdown/issues/114)
            parserOptions: js.parserOptions,
            rules: {
              'import/no-unresolved': 'off',
              'import/no-extraneous-dependencies': 'off',
            },
          },
        ]
      }] : []),
    ],
  }
}

module.exports = {
  javascript,
  typescript,
  jest,
  configure,
}
