# `@jjangga0214/tsconfig`

A sharable config package for [Typescript](https://www.typescriptlang.org).

## Installation

```sh
npm install --save-dev @jjangga0214/tsconfig
# or
yarn add --dev @jjangga0214/tsconfig
# or
pnpm add --save-dev @jjangga0214/tsconfig
```

And you should also install `peerDependencies` manually.
Checkout package.json or `npm info`.

```sh
# This does not install them all. This just show them on terminal.
npm info "@jjangga0214/tsconfig@latest" peerDependencies
```

Or install them all by [`install-peerdeps`](https://openbase.com/js/install-peerdeps/documentation).

```sh
# For npm
npx install-peerdeps --dev @jjangga0214/tsconfig
# For yarn
yarn dlx install-peerdeps --yarn --dev @jjangga0214/tsconfig
# For pnpm
pnpm dlx install-peerdeps --pnpm --dev @jjangga0214/tsconfig
```

## Note

- Path-related fields, like `outDir`, `rootDir`, `baseUrl`, `paths`, `tsBuildInfoFile`, etc, are not set in this config. That's because Typescript resolves paths relative to the configuration file. Thus, you need to configure it manually. [REF](https://github.com/Microsoft/TypeScript/issues/29172)
- This package includes not only tsconfig.json, but also packages needed in typescript development environment, like [tsconfig-paths](https://github.com/dividab/tsconfig-paths) and so on.
- [`ts-node`](https://typestrong.org/ts-node/) is configured to use [`swc`](https://github.com/swc-project/swc) under the hood. [REF](https://typestrong.org/ts-node/docs/transpilers)

## Usage for a single-project repo

**tsconfig.json**:

```jsonc
{
  "extends": "@jjangga0214/tsconfig/tsconfig.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "./",
    "baseUrl": "./",
    "paths": {
      "@your-scope/foo": ["src/foo"],
      "#foo": ["src/foo"]
    }
  }
}
```

### Usage for a monorepo

**tsconfig.json**:

```jsonc
{
  "extends": "@jjangga0214/tsconfig/tsconfig.json",
  "compilerOptions": {
    "outDir": "dist",
    "rootDir": "./",
    "baseUrl": "./",
    "paths": {
      "@your-scope/*": [
        "backends/*/src",
        "frontends/*/src",
        "libs/*/src",
        "workflows/*/src"
      ],
      "#foo/*": ["libs/foo/src/*"],
      "#bar/*": ["libs/bar/src/*"],
      // ... (others are omitted for brevity)
      "#*": [
        "backends/*/src",
        "frontends/*/src",
        "libs/*/src",
        "workflows/*/src"
      ]
    }
  }
}
```

## Usage for import

```js
import tsconfig from "@jjangga0214/tsconfig";
```
