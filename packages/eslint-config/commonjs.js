const unicorn = require('eslint-plugin-unicorn')
const globals = require('globals')
const { files } = require('./helpers')

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
