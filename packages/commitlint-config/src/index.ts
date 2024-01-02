// Why not `export default`, but `export = { }`?
// REF: https://github.com/microsoft/TypeScript/issues/2719
export = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'header-max-length': [0, 'always', 100],
    'body-max-length': [0, 'always'],
    'body-max-line-length': [0, 'always'],
    'footer-max-length': [0, 'always'],
    'footer-max-line-length': [0, 'always'],
    'subject-case': [0, 'always'],
  },
  prompt: {
    settings: {
      enableMultipleScopes: true,
      scopeEnumSeparator: ',',
    },
  },
} as const
