const javascript = require('./javascript')
const typescript = require('./typescript')
const jest = require('./jest')
const react = require('./react')
const { ignores } = require('./helpers')

// REF: https://github.com/eslint/eslint/discussions/16291
module.exports = [
  {
    ignores,
  },
  ...javascript,
  ...jest,
  ...typescript,
  ...react,
]
