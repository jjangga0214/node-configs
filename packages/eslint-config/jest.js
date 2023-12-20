const jest = require('eslint-plugin-jest')
const globals = require('globals')

module.exports = [
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
      globals: globals.jest,
    },
    plugins: {
      jest,
    },
    rules: jest.configs.all.rules,
  },
]
