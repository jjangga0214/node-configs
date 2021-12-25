# `@jjangga0214/jest-config`

## Usage

```shell
npm install --save-dev @jjangga0214/jest-config
# or
yarn add --dev @jjangga0214/jest-config
# or
pnpm add --save-dev @jjangga0214/jest-config
```

### For monorepo

**jest.config.js** at the root:

```js
import { getConfig } from "@jjangga0214/jest-config";
// `./tsconfig.json` should not have comment in order to import.
import { compilerOptions } from "./tsconfig";

export default {
  ...getConfig(compilerOptions),
  projects: [
    "<rootDir>",
    "<rootDir>/packages/*",
    "<rootDir>/backends/*",
    "<rootDir>/frontends/*",
    "<rootDir>/libs/*",
    "<rootDir>/workflows/*",
  ],
  // You can override other fields as well.
  // transform: {
  //   '.(ts|tsx)': 'ts-jest',
  // },
};
```

**jest.config.js** in each sub projects:

```js
import baseConfig from "../../jest.config.js";

delete baseConfig.projects

export default {
  ...baseConfig,
  // You can override other fields as well.
};
```

## For single-project repo

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

## For pure-javascript repo

Import a config(json)

```js
import config from "@jjangga0214/jest-config";
```

instead of getConfig(function).

```js
import { getConfig } from "@jjangga0214/jest-config";
```

## Notes

- This package includes not only config file and related packages(e.g.`ts-jest`, `@swc/jest`), but also the CLI `jest`. You don't need to manually install them.
- For [`transform`](https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object), `@swc/jest` is preconfigured. But as of writing, it has a few issues. You can override it, by `ts-jest` for example.
- [`projects`](https://jestjs.io/docs/configuration#projects-arraystring--projectconfig) is preconfigured for monorepo. Check it out and decide whether to override it.
