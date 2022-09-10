# `@jjangga0214/eslint-configurer`

This is NOT a [`Sharable Config`](https://eslint.org/docs/latest/developer-guide/shareable-configs) for eslint.
Rather, it provides functions to easily create an eslint config.
Thus, its concept is similar to sharable config.
You can create Sharable Config by depending on this package.
In fact, Sharable Config `@jjangga0214/eslint-config` depends on this package.

## Installation

```sh
npm install --save-dev @jjangga0214/eslint-configurer
# or
yarn add --dev @jjangga0214/eslint-configurer
# or
pnpm add --save-dev @jjangga0214/eslint-configurer
```

And you should also install `peerDependencies` manually.
Checkout package.json or `npm info`.

```sh
# This does not install them all. This just show them on terminal.
npm info "@jjangga0214/eslint-configer@latest" peerDependencies
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

## Optional `peerDependencies`

As you can see from `peerDependenciesMeta` in package.json, some `peerDependencies` are marked as optional. For `peerDependencies` NOT specified as optional, you must install them.

### When you ONLY use javascript (.js, .mjs, .cjs)

You don't have to install optional `peerDependencies` at all.
You still have to install non-optional `peerDependencies` (e.g. `eslint`, `prettier`, `eslint-plugin-unicorn`).

### When you use typescript (.ts, .tsx)

If you use typescript, you should install these optional `peerDependencies`.
(So these are in fact NOT optional if you use typescript.)

- `@typescript-eslint/eslint-plugin`
- `eslint-import-resolver-typescript`
- `eslint-plugin-import` (This is needed both for typescript and react)
- `typescript`

### When you use react (.jsx, .tsx)

If you use react, you should install these optional `peerDependencies`.
(So these are in fact NOT optional if you use react.)

- `eslint-plugin-import` (This is needed both for typescript and react)
- `eslint-plugin-jsx-a11y`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`

### Why are these 3 packages listed on both `peerDependencies` and `dependencies` simultaneously?

- `eslint-plugin-jsx-a11y`
- `eslint-plugin-react`
- `eslint-plugin-react-hooks`

Theses packages above are listed on both `dependencies` and `peerDependencies`.
One of this pacakges dependency, `eslint-config-airbnb`, which contains react rules along with pure javascript rules, **requires** them as `peerDependencies`.
Though it's possible letting the final consumer install them as `dependencies`, it's avoided intentionally by listing them in this package's `dependencies`.

This is because I don't want to force the final users to install those plugins even when their projects don't include react code.

Therefore I let those plugins become **optional** `peerDependencies` to the final consumer by specifying them as `dependencies` in this package's package.json.

For users who use react, they have to install the plugins anyway (So it's in fact not optional).
For users who don't use react, they don't have to install the plugins.

## Usage

**.eslintrc.js**:

```js
const { configure } = require('@jjangga0214/eslint-configurer');

module.exports = configure({
  react: true,
  typescript: true,
  jest: true,
})
```

### If you have tsconfig named/located unconventional

By default, `./packages/*/tsconfig.json` or (if not found) `./tsconfig.json` is used. If your tsconfig file is named/located differently (e.g. `tsconfig.eslint.json`), then you might want to override `parserOptions.project` AND `settings['import/resolver'].typescript.project` from typescript config.

```js
parserOptions: {  
  project: ['./packages/*/tsconfig.json', './tsconfig.json',], // Override it
},
settings: {
  'import/parsers': {
    '@typescript-eslint/parser': [".ts", ".tsx"]
  },
  'import/resolver': {
    typescript: {
      alwaysTryTypes: true,
      project: [ // Override this as well
        'packages/*/tsconfig.json',
        'tsconfig.json',
      ]
    },
  },
}
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
