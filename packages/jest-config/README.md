# `@jjangga0214/jest-config`

A sharable config package and development environment for [jest](https://jestjs.io).

## Installation

```sh
npm install --save-dev @jjangga0214/jest-config
# or
yarn add --dev @jjangga0214/jest-config
# or
pnpm add --save-dev @jjangga0214/jest-config
```

And you should also install peerDependencies manually.

Or install them all by [`install-peerdeps`](https://openbase.com/js/install-peerdeps/documentation).

```sh
# For npm
npx install-peerdeps --dev @jjangga0214/jest-config
# For yarn
npx install-peerdeps --yarn --dev @jjangga0214/jest-config
# For pnpm
npx install-peerdeps --pnpm --dev @jjangga0214/jest-config
```

## Note

- This package includes not only config file and related packages(e.g.[`ts-jest`](https://www.npmjs.com/package/ts-jest), [`@swc/jest`](https://www.npmjs.com/package/@swc/jest), but also the CLI [`jest`](https://www.npmjs.com/package/jest). You don't need to manually install them.
- For [`transform`](https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object), [`@swc/jest`](https://www.npmjs.com/package/@swc/jest) is preconfigured. But as of writing, it has a few issues. You can override it, by [`ts-jest`](https://www.npmjs.com/package/ts-jest) for example.
- [`projects`](https://jestjs.io/docs/configuration#projects-arraystring--projectconfig) is preconfigured for monorepo. Check it out and decide whether to override it.

## Usage for a monorepo

**jest.config.js** at the root:

For monorepo, you probably want to configure [`projects`](https://jestjs.io/docs/configuration#projects-arraystring--projectconfig).

```js
const { getConfig } = require("@jjangga0214/jest-config");
// `./tsconfig.json` should not have comment to be imported.
const { compilerOptions } = require("./tsconfig");

const baseConfig = {
  ...getConfig(compilerOptions),
  // You can override other fields as well.
  // transform: {
  //   '.(ts|tsx)': 'ts-jest',
  // },
};

module.exports = {
  ...baseConfig,
  baseConfig,
  projects: [
    "<rootDir>",
    "<rootDir>/packages/*",
    "<rootDir>/backends/*",
    "<rootDir>/frontends/*",
    "<rootDir>/libs/*",
    "<rootDir>/workflows/*",
  ],
};
```

**jest.config.js** in each sub projects:

```js
const { baseConfig } = require("../../jest.config.js");

module.exports = {
  ...baseConfig,
  // You can override other fields as well.
};
```

## Usage for a single-project repo

**jest.config.js**:

```js
const { getConfig } = require("@jjangga0214/jest-config");
// `./tsconfig.json` should not have comment in order to import.
const { compilerOptions } = require("./tsconfig");

module.exports = {
  ...getConfig(compilerOptions),
  // You can override other fields as well.
  // transform: {
  //   '.(ts|tsx)': 'ts-jest',
  // },
};
```

## Usage for a project not using alias

If your project is pure javascript or does not need [Typescript paths mappting](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping) and [jest's `moduleNameMapper`](https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring), then you can just import a config(json) directly,

```js
const { config } = require("@jjangga0214/jest-config");
```

instead of `getConfig` (function).

```js
const { getConfig } = require("@jjangga0214/jest-config");
```
