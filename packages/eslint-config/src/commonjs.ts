// @ts-expect-error no declaration file
import unicorn from 'eslint-plugin-unicorn'
import globals from 'globals'
import helpers from './helpers.js'

export default [
  {
    files: helpers.files.javascript.plain,
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
] as const
