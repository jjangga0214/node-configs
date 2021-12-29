# `@jjangga0214/eslint-config`

A sharable config package and development environment for [eslint](https://eslint.org).

## Installation

```sh
npm install --save-dev @jjangga0214/eslint-config
# or
yarn add --dev @jjangga0214/eslint-config
# or
pnpm add --save-dev @jjangga0214/eslint-config
```

And you should also install peerDependencies manually.

Or install them all by [`install-peerdeps`](https://openbase.com/js/install-peerdeps/documentation).

```sh
# For npm
npx install-peerdeps --dev @jjangga0214/eslint-config
# For yarn
npx install-peerdeps --yarn --dev @jjangga0214/eslint-config
# For pnpm
npx install-peerdeps --pnpm --dev @jjangga0214/eslint-config
```

## Note

- This package includes plugin and config packages (e.g. `eslint-config-*`, `eslint-plugin-*`, etc). You do not need to manually install them.

## Development

[REF](https://eslint.org/docs/developer-guide/shareable-configs)

## Usage

**package.json**:

```jsonc
{
  "name": "your-cool-library",
  "eslintConfig": {
    "extends": "@jjangga0214/eslint-config"
  },
  "eslintIgnore": ["dist", "foo", "bar"]
}
```

Or you can import it into javascript config file.

**.eslintrc.js**:

```js
module.exports = {
  extends: "@jjangga0214/eslint-config",
};
```
