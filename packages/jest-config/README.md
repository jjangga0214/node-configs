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

And also install peerDependencies.

```sh
npx install-peerdeps --dev @jjangga0214/jest-config
```

## Note

- This package includes not only config file and related packages(e.g.[`ts-jest`](https://www.npmjs.com/package/ts-jest), [`@swc/jest`](https://www.npmjs.com/package/@swc/jest), but also the CLI [`jest`](https://www.npmjs.com/package/jest). You don't need to manually install them.
- For [`transform`](https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object), [`@swc/jest`](https://www.npmjs.com/package/@swc/jest) is preconfigured. But as of writing, it has a few issues. You can override it, by [`ts-jest`](https://www.npmjs.com/package/ts-jest) for example.
- [`projects`](https://jestjs.io/docs/configuration#projects-arraystring--projectconfig) is preconfigured for monorepo. Check it out and decide whether to override it.

## Usage for a monorepo

**jest.config.js** at the root:

For monorepo, you probably want to configure [`projects`](https://jestjs.io/docs/configuration#projects-arraystring--projectconfig).

```js
import { getConfig } from "@jjangga0214/jest-config";
// `./tsconfig.json` should not have comment to be imported.
import { compilerOptions } from "./tsconfig";

export const baseConfig = {
  ...getConfig(compilerOptions), 
  // You can override other fields as well.
  // transform: {
  //   '.(ts|tsx)': 'ts-jest',
  // },
}

export default {
  ...baseConfig,
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
import { baseConfig } from "../../jest.config.js";

export default {
  ...baseConfig,
  // You can override other fields as well.
};
```

## Usage for single-project repo

**jest.config.js**:

```js
import { getConfig } from "@jjangga0214/jest-config";
// `./tsconfig.json` should not have comment in order to import.
import { compilerOptions } from "./tsconfig";

export default {
  ...getConfig(compilerOptions),
  // You can override other fields as well.
  // transform: {
  //   '.(ts|tsx)': 'ts-jest',
  // },
};
```

## Usage for projects not using alias

If your project is pure javascript or does not need [Typescript paths mappting](https://www.typescriptlang.org/docs/handbook/module-resolution.html#path-mapping) and [jest's `moduleNameMapper`](https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring), then you can just import a config(json) directly,

```js
import config from "@jjangga0214/jest-config";
```

instead of `getConfig` (function).

```js
import { getConfig } from "@jjangga0214/jest-config";
```
