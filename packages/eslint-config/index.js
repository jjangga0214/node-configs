const common = {
  env: {
    node: true,
    es6: true,
  },
  plugins: ['prettier', 'markdown', 'unicorn'],
  parserOptions: {
    'ecmaVersion': 'latest',
    'sourceType': 'module'
  },
  extends: [
    'plugin:unicorn/recommended',
    'airbnb',
    "airbnb/hooks",
    'prettier',
    'plugin:markdown/recommended', // REF: https://github.com/eslint/eslint-plugin-markdown/blob/main/lib/index.js
  ],
  rules: {
    'prettier/prettier': 'error',
    'import/prefer-default-export': 'off',
    'import/extensions': 'off',
    'unicorn/prefer-module': 'warn',
    'unicorn/prefer-node-protocol': 'off',
    'unicorn/prevent-abbreviations': 'warn',
    'no-console': 'off',
    'no-iterator': 'off',
    'no-restricted-syntax': 'off',
    'no-await-in-loop': 'off',
    'consistent-return': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'no-underscore-dangle': 'off',
    '@typescript-eslint/no-shadow': 'off',
  },
}

const js = {
  ...common,
}

const ts = {
  ...common,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ...common.parserOptions,
    project: './tsconfig.json', // REF: https://www.npmjs.com/package/eslint-config-airbnb-typescript
  },
  env: common.env,
  plugins: [...common.plugins, '@typescript-eslint'],
  extends: [
    ...common.extends,
    // 'airbnb-typescript/base', // "base" does not include tsx rules. REF: https://www.npmjs.com/package/eslint-config-airbnb-typescript
    'airbnb-typescript', // "base" does not include tsx rules. REF: https://www.npmjs.com/package/eslint-config-airbnb-typescript
    'plugin:@typescript-eslint/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'prettier', // Let prettier have high priority
  ],
  rules: {
    ...common.rules,
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true
      },
    },
  },
}

// Why separating config for test files? => REF: https://github.com/jest-community/eslint-plugin-jest/issues/934
const jsTest = {
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
  },
}

const tsTest = {
  ...ts,
  env: {
    ...ts.env,
    ...jsTest.env,
  },
  plugins: [...ts.plugins, ...jsTest.plugins],
  extends: [...ts.extends, ...jsTest.extends],
  rules: {
    ...ts.rules,
    ...jsTest.rules,
  },
}

module.exports = {
  root: true,
  files: ['**/*.js', '**/*.cjs', '**/*.mjs', '**/*.ts'],
  overrides: [
    {
      ...js,
      files: ['**/*.js', '**/*.cjs', '**/*.mjs'],
      overrides: [
        {
          files: ['**/*.test.js', '**/*.spec.js', '**/__test__/**/*.spec.js'],
          env: {
            ...js.env,
            ...jsTest.env,
          },
          plugins: [...js.plugins, ...jsTest.plugins],
          extends: [...js.extends, ...jsTest.extends],
          rules: {
            ...js.rules,
            ...jsTest.rules,
          },
        },
        {
          ...common,
          // In eslint-plugin-markdown v2, configuration for fenced code blocks is separate from the
          // containing Markdown file. Each code block has a virtual filename
          // appended to the Markdown file's path.
          files: ['**/*.md/*.js'],
          // Configuration for fenced code blocks goes with the override for
          // the code block's virtual filename, for example:
          parserOptions: {
            ...common.parserOptions,
            ecmaFeatures: {
              impliedStrict: true,
            },
          },
          rules: {
            ...common.rules,
            'import/no-unresolved': 'off',
            'import/no-extraneous-dependencies': 'off',
          },
        },
      ]
    },
    {
      ...ts,
      files: ['**/*.ts'],
      overrides: [
        {
          ...tsTest,
          files: ['**/*.test.ts', '**/*.spec.ts', '**/__test__/**/*.ts'],
        },
        {
          files: ['**/*.md/*.ts'],
          // Why `common.parserOptions` instead of `ts.parserOptions`?
          // It's not to provide `parserOptions.project` property. [REF](https://github.com/eslint/eslint-plugin-markdown/issues/114)
          parserOptions: common.parserOptions,
          rules: {
            ...ts.rules,
            'import/no-unresolved': 'off',
            'import/no-extraneous-dependencies': 'off',
          },
        },
      ]
    },
    {
      /*
      eslint-plugin-markdown only finds javascript code block snippet.
      For specific spec, refer to https://github.com/eslint/eslint-plugin-markdown
      */
      files: ['**/*.md'],
      processor: 'markdown/markdown',
    },
  ],
}
