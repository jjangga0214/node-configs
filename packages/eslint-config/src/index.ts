import helpers from './helpers'
import javascript from './javascript'
import jest from './jest'
import typescript from './typescript'
import react from './react'

export = [
  {
    ignores: helpers.ignores,
  },
  ...javascript,
  ...typescript,
  ...react,
  ...jest,
]
