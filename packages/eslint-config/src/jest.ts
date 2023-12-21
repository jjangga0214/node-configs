// @ts-ignore
import jest from 'eslint-plugin-jest'
import globals from 'globals'

export = [
  {
    files: ['**/*.snap'],
    plugins: {
      jest,
    },
    processor: 'jest/.snap',
  },
  {
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
