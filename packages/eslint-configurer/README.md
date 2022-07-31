# `@jjangga0214/eslint-configurer`

This is NOT a [`Sharable Config`](https://eslint.org/docs/latest/developer-guide/shareable-configs) for eslint.
Rather, it provides functions to easily configure/override eslint config.
Thus, its concept is similar to sharable config.
You can create Sharable Config by depending on this package.
In fact, Sharable Config `@jjangga0214/eslint-config`, `@jjangga0214/eslint-config-react` depends on this package.

## Installation

```sh
npm install --save-dev @jjangga0214/eslint-configurer
# or
yarn add --dev @jjangga0214/eslint-configurer
# or
pnpm add --save-dev @jjangga0214/eslint-configurer
```

And you should also install peerDependencies manually.

### Note

This package includes config packages (e.g. `eslint-config-*`). You do not need to manually install them. They are not `peerDependencies`.

### Optional `peerDependencies`

As you can see from `peerDependenciesMeta` in package.json, some `peerDependencies` are marked as optional. For `peerDependencies` NOT specified as optional, you must install them.

#### When you use typescript

If you use typescript, you should install these optional `peerDependencies`.
(So these become NOT optional if you use typescript.)

- `@typescript-eslint/eslint-plugin`
- `eslint-import-resolver-typescript`
- `eslint-plugin-import` (This is needed both for typescript and react)
- `typescript`

#### When you use react

If you use react, you should install these optional `peerDependencies`.
(So these become NOT optional if you use react.)

- `eslint-plugin-import` (This is needed both for typescript and react)
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`

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

## Development

### `Sharable Config`

You should understand what eslint's concept of sharable config. 
The official docs is [here](https://eslint.org/docs/developer-guide/shareable-configs).

### Plugins are `peerDependencies`, while Sharable Configs are `dependencies`

Sharable Config can depend on other Sharable Configs. Therefore the final consumer does not need to manually install all Sharable Configs. They are all to be installed transitively (dependency of dependency).

Once [eslint#3458](https://github.com/eslint/eslint/issues/3458) is resolved, Plugins can be moved from `peerDependencies` to `dependencies`. Currently, only `eslint-config-*` are allowed to be `dependencies`.

### Why using `require.resolve`?

As you can see `require.resolve` is used for `extend` field in config.
Eslint extract sharable config name from omited  prefix `eslint-config`.

```js
{
  'extends': [
    'eslint:recommended', // "eslint:" protocol is reserved for eslint itself 
    'plugin:unicorn/recommended', // "plugin:" protocol is a must for plugins
    'airbnb', // This is specifying "eslint-config-airbnb". The prefix "eslint-config" can be ommitted.
  ]
}
```

However, this only works when you directly configure eslint for your project.
For, a Sharable Config depending on other Sharable Configs, this does not work.
Therefore, a full path should be specified.
This is why `require.resolve` is used.

```js
{
  'extends': [
    'eslint:recommended',
    'plugin:unicorn/recommended',
    require.resolve('eslint-config-airbnb'), 
  ]
}
```
