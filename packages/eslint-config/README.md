# `@jjangga0214/eslint-config`

An ESlint [`Sharable Config`](https://eslint.org/docs/latest/developer-guide/shareable-configs) for javascript, typescript, react, jest.

This package assumes (non-optional) you use typescript and jest.
However, This package does not assume (optional) you always use react, though this sharable config includes eslint rules for react.

## Installation

```sh
npm install --save-dev @jjangga0214/eslint-config
# or
yarn add --dev @jjangga0214/eslint-config
# or
pnpm add --save-dev @jjangga0214/eslint-config
```

And you should also install `peerDependencies` manually.
Checkout package.json or `npm info`.

```sh
# This does not install them all. This just show them on terminal.
npm info "@jjangga0214/eslint-config@latest" peerDependencies
```

Or install them all by [`install-peerdeps`](https://openbase.com/js/install-peerdeps/documentation).

```sh
# For npm
npx install-peerdeps --dev @jjangga0214/eslint-config
# For yarn
npx install-peerdeps --yarn --dev @jjangga0214/eslint-config
# For pnpm
npx install-peerdeps --pnpm --dev @jjangga0214/eslint-config
```

**But before the installtion, please read this docs first.**

### Typescript-related non-optional `peerDependencies`

- `@typescript-eslint/eslint-plugin`
- `eslint-import-resolver-typescript`
- `eslint-plugin-import` (This is needed both for typescript and react)
- `typescript`

This Sharable Config package assumes you to use typescript.
The `peerDependencies` above are for typescript and non-optional.
You must install them.
As long as you install them, it's still possible for you to use this shareable config with only .js or .jsx.

### Jest-related non-optional `peerDependencies`

- `eslint-plugin-jest`

This Sharable Config package assumes you to use jest.
The `peerDependencies` above is for jest and non-optional.
Even when you use another test runner (not jest), a problem might occur as eslint rules for jest would still be applied.
For those cases, this Sharable Config is not suitable.

### React-related **optional** `peerDependencies`

If you use react, you should install these `peerDependencies`.
If you do not use react, you don't have to install these.

- `eslint-plugin-jsx-a11y`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`

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
