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
]
