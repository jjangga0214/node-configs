# `@jjangga0214/eslint-config`

An ESlint [`Sharable Config`](https://eslint.org/docs/latest/developer-guide/shareable-configs) for javascript, typescript, react, jest.

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

## Usage

**package.json**:

```jsonc
{
  "name": "your-cool-project",
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

## Development

- The [official docs](https://eslint.org/docs/developer-guide/shareable-configs) for eslint sharable config
- Once [eslint#3458](https://github.com/eslint/eslint/issues/3458) is resolved, some of `peerDependencies` (plugins) can be re-organized as a `dependencies` of `@jjangga0214/eslint-configurer`, which means current `peerDependencies` can become transitive dependencies (`dependencies` of `dependencies`).
