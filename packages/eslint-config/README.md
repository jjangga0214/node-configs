# `@jjangga0214/eslint-config`

An ESlint `Shareable Config` for javascript, typescript, react, and jest.

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

```bash
# For npm
npx install-peerdeps --dev @jjangga0214/eslint-config
# For yarn
yarn dlx install-peerdeps --yarn --dev @jjangga0214/eslint-config
# For pnpm
pnpm dlx install-peerdeps --pnpm --dev @jjangga0214/eslint-config
```

## Entrypoints

- [`@jjangga0214/eslint-config/helpers`](https://github.com/jjangga0214/node-configs/blob/main/packages/src/eslint-config/helpers.ts): Utility helpers
- [`@jjangga0214/eslint-config/javascript`](https://github.com/jjangga0214/node-configs/blob/main/packages/src/eslint-config/javascript.ts): Sharable config for javascript
- [`@jjangga0214/eslint-config/typescript`](https://github.com/jjangga0214/node-configs/blob/main/packages/src/eslint-config/typescript.ts): Sharable config for typescript
- [`@jjangga0214/eslint-config/react`](https://github.com/jjangga0214/node-configs/blob/main/packages/src/eslint-config/react.ts): Sharable config for react
- [`@jjangga0214/eslint-config/jest`](https://github.com/jjangga0214/node-configs/blob/main/packages/src/eslint-config/jest.ts): Sharable config for jest
- [`@jjangga0214/eslint-config/commonjs`](https://github.com/jjangga0214/node-configs/blob/main/packages/src/eslint-config/commonjs.ts): Sharable config for CJS.
- [`@jjangga0214/eslint-config/personal`](https://github.com/jjangga0214/node-configs/blob/main/packages/src/eslint-config/personal.ts): Personal overrider.

## Usage

**eslint.config.js**:

```js
import { ignores } from '@jjangga0214/eslint-config/helpers'
import javascript from '@jjangga0214/eslint-config/javascript'
import typescript from '@jjangga0214/eslint-config/typescript'
import jest from '@jjangga0214/eslint-config/jest'
import react from '@jjangga0214/eslint-config/react'

export default [
  { ignores, },
  // The order matters!
  ...javascript, // You MUST include this even for typescript and jsx.
  ...typescript, // Include this only if you use typescript
  ...react, // Include this only if you use react
  ...jest, // Include this only if you use jest
]
```

The example above is equivalent to the default export of `@jjangga0214/eslint-config`.

```js
export { default } from '@jjangga0214/eslint-config'
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

Entry points of `/javascript`, `/typescript`, `/react`, and `/jest` are all mainly composed of popular 3rd-party configs.
At the end of them, `@jjangga0214/eslint-config/personal` overrides partial rules internally.

When you need other configurations at the end,

```js
import config from '@jjangga0214/eslint-config'

export default [
  ...config,
  { /* Your another config */ }, // <-- This may override too widely
]
```

sometimes its range is too wide.

Then use `/personal` to finalize.

```js
import config from '@jjangga0214/eslint-config'
import personal from '@jjangga0214/eslint-config/personal'

export default [
  ...config,
  { /* Your another config */ },
  ...personal,
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

The config depends on other popular shareable configs.
Some of them do not provide flat configs, yet.
So `@jjangga0214/eslint-config` [transforms them internally](https://github.com/eslint/eslint/discussions/16291).
Though more concise porting is possible, they are intentionally converted as-is for comparability.
