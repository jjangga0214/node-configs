# `@jjangga0214/eslint-config`

An ESlint [`Sharable Config`](https://eslint.org/docs/latest/developer-guide/shareable-configs) for javascript, typescript, react, and jest.

This package is for ESLint's new [Flat Config](https://eslint.org/blog/2022/08/new-config-system-part-1/).

## Installation

```sh
npm install --save-dev @jjangga0214/eslint-config
# or
yarn add --dev @jjangga0214/eslint-config
# or
pnpm add --save-dev @jjangga0214/eslint-config
```

And make sure `peerDependencies` are satisfied.

```sh
# This does not install them all. This just show them on terminal.
npm info "@jjangga0214/eslint-config@latest" peerDependencies
```

Or install them all by [`install-peerdeps`](https://openbase.com/js/install-peerdeps/documentation).

```sh
# For npm
npx install-peerdeps --dev @jjangga0214/eslint-config
# For yarn
npx install-peerdeps --yarn --dev @jjangga0214/eslint-config
# For pnpm
npx install-peerdeps --pnpm --dev @jjangga0214/eslint-config
```

## Entrypoints

- [`@jjangga0214/eslint-config/javascript`](https://github.com/jjangga0214/node-configs/blob/main/packages/eslint-config/javascript.js): Sharable config for javascript
- [`@jjangga0214/eslint-config/typescript`](https://github.com/jjangga0214/node-configs/blob/main/packages/eslint-config/typescript.js): Sharable config for typescript
- [`@jjangga0214/eslint-config/jest`](https://github.com/jjangga0214/node-configs/blob/main/packages/eslint-config/jest.js): Sharable config for jest
- [`@jjangga0214/eslint-config/react`](https://github.com/jjangga0214/node-configs/blob/main/packages/eslint-config/react.js): Sharable config for react
- [`@jjangga0214/eslint-config/commonjs`](https://github.com/jjangga0214/node-configs/blob/main/packages/eslint-config/commonjs.js): Sharable config for CJS.
- [`@jjangga0214/eslint-config/helpers`](https://github.com/jjangga0214/node-configs/blob/main/packages/eslint-config/helpers.js): Utility helpers

## Usage

**eslint.config.js**:

```js
import helpers from '@jjangga0214/eslint-config/helpers'
import javascript from '@jjangga0214/eslint-config/javascript'
import typescript from '@jjangga0214/eslint-config/typescript'
import jest from '@jjangga0214/eslint-config/jest'
import react from '@jjangga0214/eslint-config/react'

export default [
  {
    ignores: helpers.ignores,
  },
  ...javascript, // You MUST include this even for typescript and jsx.
  ...jest, // Include this only if you use jest
  ...typescript, // Include this only if you use typescript
  ...react, // Include this only if you use react
]
```

The example above is equivalent to just directly importing `@jjangga0214/eslint-config`.

```js
import config from '@jjangga0214/eslint-config'

export default config
```

ESM is configured by default.
For CJS, use `@jjangga0214/eslint-config/commonjs`

```js
import config from '@jjangga0214/eslint-config'
import commonjs from '@jjangga0214/eslint-config/commonjs'

export default [
  ...config,
  ...commonjs,
]
```

## tsconfig.json and `@jjangga0214/eslint-config/typescript`

By default, `./packages/*/tsconfig.json` and/or (if not found) `./tsconfig.json` are targets to search. 
If your tsconfig file is named/located differently (e.g. `tsconfig.eslint.json`), 
override
`languageOptions.parserOptions.project`
AND
`settings['import/resolver'].typescript.project`
 from typescript config.

```js
{ 
  // ...
  languageOptions:{
    // ...
    parserOptions: {
      project: ['./packages/*/tsconfig.json', './tsconfig.json',], // <-- Override it
    },
  },
  settings: {
    // ...
    'import/resolver': {
      typescript: {
        // ...
        project: [ // <-- Override this as well
          'packages/*/tsconfig.json',
          'tsconfig.json',
        ]
      },
    },
  }  
}
```

## Development Note

The config depends on other popular sharable configs.
Some of them do not provide flat configs, yet.
So `@jjangga0214/eslint-config` [transforms them internally](https://github.com/eslint/eslint/discussions/16291).
