const javascript = require('@jjangga0214/eslint-config/javascript')
const commonjs = require('@jjangga0214/eslint-config/commonjs')
const { ignores } = require('@jjangga0214/eslint-config/helpers')

module.exports = [{ ignores }, ...javascript, ...commonjs]
