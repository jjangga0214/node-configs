// @ts-ignore
import jest from 'eslint-plugin-jest'
import globals from 'globals'

export = [
  {
    // Part of "plugin:jest/all",
    files: ['**/*.snap'],
    plugins: {
      jest,
    },
    processor: 'jest/.snap',
  },
  {
    // Part of "plugin:jest/all",
    files: [
      '**/*.{test,spec}.{c,m,}{j,t}s{x,}',
      '**/__tests__/**/*.{c,m,}{j,t}s{x,}',
    ],
    languageOptions: {
      globals: {
        /*
         * Destructuring is used so as to avoid https://github.com/microsoft/TypeScript/issues/42873 .
         * `globals: globals.jest` causes the error.
         * `globals: { ...globals.jest }` is valid.
         */
        ...globals.jest,
      },
    },
    plugins: {
      jest,
    },
    rules: jest.configs.all.rules,
  },
  {
    // name: "personal:jest/off-ts-rules-for-js",
    files: [
      // only JS, not TS
      '**/*.{test,spec}.{c,m,}js{x,}',
      '**/__tests__/**/*.{c,m,}js{x,}',
    ],
    rules: {
      // REF: https://github.com/jest-community/eslint-plugin-jest#requires-type-checking
      // Currently, this is the only rule that requires type checking.
      'jest/unbound-method:': 'off',
    }
  },
]
