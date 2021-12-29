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

And you should also install peerDependencies manually.

Or install them all by [`install-peerdeps`](https://openbase.com/js/install-peerdeps/documentation).

```sh
# For npm
npx install-peerdeps --dev @jjangga0214/commitlint-config
# For yarn
npx install-peerdeps --yarn --dev @jjangga0214/commitlint-config
# For pnpm
npx install-peerdeps --pnpm --dev @jjangga0214/commitlint-config
```

## Development

[REF](https://commitlint.js.org/#/reference-configuration?id=shareable-configuration)

## Usage

**.commitlint.config.js**:

```js
module.exports = {
  // REF: https://commitlint.js.org/#/concepts-shareable-config
  extends: ["@jjangga0214/commitlint-config"],
  // rules: { ... } // You can override it.
};
```
