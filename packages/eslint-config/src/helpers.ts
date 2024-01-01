export const ignores = [
  '**/{.,}{dist,coverage,generated,tmp}',
  '**/{changeset,.next}',
  '**/*.tmp.*',
  '**/tmp.*',
] as const

export const files = {
  all: ['**/*.{c,m,}{j,t}s{x,}'],
  node: {
    all: ['**/*.{c,m,}{j,t}s'],
    plain: ['**/*.{j,t}s'],
    commonjs: ['**/*.c{j,t}s'],
    module: ['**/*.m{j,t}s'],
  },
  jsx: {
    all: ['**/*.{c,m,}{j,t}sx'],
    plain: ['**/*.{j,t}sx'],
    commonjs: ['**/*.c{j,t}sx'],
    module: ['**/*.m{j,t}sx'],
  },
  javascript: {
    all: ['**/*.{c,m,}js'],
    plain: ['**/*.js'],
    commonjs: ['**/*.cjs'],
    module: ['**/*.mjs'],
  },
  typescript: {
    all: ['**/*.{c,m,}ts'],
    plain: ['**/*.ts'],
    commonjs: ['**/*.cts'],
    module: ['**/*.mts'],
  },
  test: [
    '**/*.{test,spec}.{c,m,}{j,t}s{x,}',
    '**/__tests__/**/*.{c,m,}{j,t}s{x,}',
  ],
} as const
