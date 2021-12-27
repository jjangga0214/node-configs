# `@jjangga0214/commitlint-config`

A sharable config package and development environment for [commitlint](https://commitlint.js.org/#/).

## Installation

```sh
npm install --save-dev @jjangga0214/commitlint-config
# or
yarn add --dev @jjangga0214/commitlint-config
# or
pnpm add --save-dev @jjangga0214/commitlint-config
```

And also install peerDependencies.

```sh
npx install-peerdeps --dev @jjangga0214/commitlint-config
```

## Note

- This package includes the CLI [`@commitlint/cli`](https://www.npmjs.com/package/@commitlint/cli) and [`commitizen`](https://www.npmjs.com/package/commitizen) as well as config. You do not have to manually install them.

## Usage

**.commitlint.config.js**:

```js
module.exports = {
  // REF: https://commitlint.js.org/#/concepts-shareable-config
  extends: ["@jjangga0214/commitlint-config"],
  // rules: { ... } // You can override it.
};
```
