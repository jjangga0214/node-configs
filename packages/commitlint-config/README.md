# `@jjangga0214/commitlint-config`

A [Sharcable Config](https://commitlint.js.org/#/reference-configuration?id=shareable-configuration) package for [commitlint](https://commitlint.js.org/#/).

## Installation

```sh
npm install --save-dev @jjangga0214/commitlint-config
# or
yarn add --dev @jjangga0214/commitlint-config
# or
pnpm add --save-dev @jjangga0214/commitlint-config
```

And you should also install `peerDependencies` manually.
Check out package.json or `npm info`.

```sh
# This does not install them all. This just show them on terminal.
npm info "@jjangga0214/commitlint-config@latest" peerDependencies
```

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

Check out the official docs for [Sharable Config](https://commitlint.js.org/#/reference-configuration?id=shareable-configuration)

## Usage

**.commitlint.config.js**:

```js
module.exports = {
  // REF: https://commitlint.js.org/#/concepts-shareable-config
  extends: ["@jjangga0214/commitlint-config"],
  // rules: { ... } // You can override it.
};
```

## CJS and ESM

This package is intentionally CJS.
Once commitlint starts supporting ESM, this package becomes also free to migrate.
Refer to <https://github.com/conventional-changelog/commitlint/issues/3705>
