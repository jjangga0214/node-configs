const unicorn = require('eslint-plugin-unicorn')
const { files } = require('./helpers')
const globals = require('globals')

module.exports = [
  {
    files: files.javascript.plain,
    languageOptions: {
      sourceType: 'commonjs',
      globals: {
        ...globals.es2021,
        ...globals.node, // globals.node = globals.nodeBuiltins + globals.commonjs
      },
    },
    plugins: {
      unicorn,
    },
    rules: {
      'unicorn/prefer-module': 'off',
    },
  },
]
