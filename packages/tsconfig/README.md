# `@jjangga0214/tsconfig`

A sharable package for typescript config file.

## Installation

```shell
npm install --save-dev @jjangga0214/tsconfig
# or
yarn add --dev @jjangga0214/tsconfig
# or
pnpm add --save-dev @jjangga0214/tsconfig
```

## Note

- Path-related fields, like `outDir`, `rootDir`, `baseUrl`, `paths`, `tsBuildInfoFile`, etc, are not set in this config. That's because Typescript resolves paths relative to the configuration file. Thus, you need to configure it manually. [REF](https://github.com/Microsoft/TypeScript/issues/29172)
- This package includes not only tsconfig.json, but also CLIs needed in typescript development environment: [`typescript`](https://www.npmjs.com/package/typescript), [`ts-node`](https://www.npmjs.com/package/ts-node) and so on.
- [`ts-node`](https://typestrong.org/ts-node/) is configured to use [`swc`](https://github.com/swc-project/swc) under the hood. [REF](https://typestrong.org/ts-node/docs/transpilers)

## Example for a single-project repo

**tsconfig.json**:

```json
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

### Example for a monorepo

**tsconfig.json**:

```json
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
