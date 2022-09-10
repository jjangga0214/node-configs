# `@jjangga0214/eslint-config`

An ESlint `Sharable Config` for javascript and react(jsx).
This sharable config includes eslint rules for react, but you don't have to use react. 
This config is good for pure js project as well.

## Installation

```sh
npm install --save-dev @jjangga0214/eslint-config-js
# or
yarn add --dev @jjangga0214/eslint-config-js
# or
pnpm add --save-dev @jjangga0214/eslint-config-js
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

## Usage

**eslint.config.js**:

```js
import js '@jjangga0214/eslint-config-js'

export default [
  ...js,
  // { ... you can override here }
]
```
