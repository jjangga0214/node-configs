/* eslint-disable import/no-unresolved */ // <-- Workaround for a bug

const { ignores } = require('@jjangga0214/eslint-config/helpers')
const javascript = require('@jjangga0214/eslint-config/javascript')
const commonjs = require('@jjangga0214/eslint-config/commonjs')
const typescript = require('@jjangga0214/eslint-config/typescript')

module.exports = [
  { ignores },
  ...javascript,
  ...typescript,
  ...commonjs,
  {
    files: ['packages/eslint-config/src/*.ts'],
    rules: {
      '@typescript-eslint/no-unsafe-assignment': 'off',
      '@typescript-eslint/no-unsafe-member-access': 'off',
    },
  },
]
