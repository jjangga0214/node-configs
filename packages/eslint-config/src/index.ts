import { ignores } from './helpers.js'
import javascript from './javascript.js'
import jest from './jest.js'
import typescript from './typescript.js'
import react from './react.js'

export default [
  {
    ignores,
  },
  ...javascript,
  ...typescript,
  ...react,
  ...jest,
]
