# `@jjangga0214/jest-config`

A sharable config package for [jest](https://jestjs.io).

## Installation

```sh
npm install --save-dev @jjangga0214/jest-config
# or
yarn add --dev @jjangga0214/jest-config
# or
pnpm add --save-dev @jjangga0214/jest-config
```

And you should also install `peerDependencies` manually.
Check out package.json or `npm info`.

```sh
# This does not install them all. This just show them on terminal.
npm info "@jjangga0214/jest-config@latest" peerDependencies
```

Or install them all by [`install-peerdeps`](https://openbase.com/js/install-peerdeps/documentation).

```sh
# For npm
npx install-peerdeps --dev @jjangga0214/jest-config
# For yarn
yarn dlx install-peerdeps --yarn --dev @jjangga0214/jest-config
# For pnpm
pnpm dlx install-peerdeps --pnpm --dev @jjangga0214/jest-config
```

## Notes

- For [`transform`](https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object), [`@swc/jest`](https://www.npmjs.com/package/@swc/jest) is preconfigured. You can override it, by [`ts-jest`](https://www.npmjs.com/package/ts-jest), [`esbuild`](https://esbuild.github.io/), `babel`, or `tsc` for example.
- [`extensionsToTreatAsEsm`](https://jestjs.io/docs/next/configuration#extensionstotreatasesm-arraystring) is preconfigured. If your project is not ESM typescript, override it.
- [`moduleNameMapper`](https://jestjs.io/docs/next/configuration#modulenamemapper-objectstring-string--arraystring) is preconfigured, even when you're not using `produceConfig()`. If your project is not ESM typescript, override it.

## Usage

### For a project not using an alias

If your project is pure javascript or does not need [Typescript paths mapping](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping) and jest's [`moduleNameMapper`](https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring), then you can just import a config(json) directly.

```js
export { default } from '@jjangga0214/jest-config'
```

Otherwise, consider `produceConfig` (function).

```js
import { produceConfig } from '@jjangga0214/jest-config'
```

### For a single-project repo

**jest.config.js**:

```js
import { createRequire } from 'node:module'
import { produceConfig } from '@jjangga0214/jest-config'

const require = createRequire(import.meta.url)
// `./tsconfig.json` should not have comment in order to import.
const tsConfig = require('./tsconfig.json')

export default {
  ...produceConfig({ tsConfig }),
  // And possibly override other fields.
  // transform: {
  //   '.(ts|tsx)': 'ts-jest',
  // },
}
```

### For a monorepo

**jest.config.js** at the root:

For monorepo, you probably want to configure [`projects`](https://jestjs.io/docs/configuration#projects-arraystring--projectconfig).

```js
import { createRequire } from 'node:module'
import { produceConfig } from '@jjangga0214/jest-config'

const require = createRequire(import.meta.url)
// `./tsconfig.json` should not include comment to be imported.
const tsConfig = require('./tsconfig.json')

export const config = {
  ...produceConfig({ tsConfig }),
  // And possibly override other fields.
  // transform: {
  //   '.(ts|tsx)': 'ts-jest',
  // },
};

export default {
  ...config,
  projects: [
    '<rootDir>',
    '<rootDir>/packages/*',
    '<rootDir>/backends/*',
    '<rootDir>/frontends/*',
    '<rootDir>/libs/*',
    '<rootDir>/workflows/*',
  ],
}
```

**jest.config.js** in each sub-project:

```js
import { config } from '../../jest.config.js'

export default {
 ...config,
  // And possibly override other fields.
}
```

**However**, for monorepo with certain situations, it is OK that you don't depend on [`projects`](https://jestjs.io/docs/configuration#projects-arraystring--projectconfig). You may be able to treat your monorepo like a single project repo. JEST may still work well.

There is an issue of `projects`:  <https://github.com/facebook/jest/issues/12230>
