// @ts-expect-error no declaration file
import unicorn from 'eslint-plugin-unicorn'
import globals from 'globals'

export default [
  {
    files: ['**/*.js'],
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
