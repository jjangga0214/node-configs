# `@jjangga0214/prettier-config`

A sharable config package and development environment for [prettier](https://prettier.io).

## Installation

```sh
npm install --save-dev @jjangga0214/prettier-config
# or
yarn add --dev @jjangga0214/prettier-config
# or
pnpm add --save-dev @jjangga0214/prettier-config
```

And you should also install `peerDependencies` manually.
Check out package.json or `npm info`.

```sh
# This does not install them all. This just show them on terminal.
npm info "@jjangga0214/prettier-config@latest" peerDependencies
```

Or install them all by [`install-peerdeps`](https://openbase.com/js/install-peerdeps/documentation).

```sh
# For npm
npx install-peerdeps --dev @jjangga0214/prettier-config
# For yarn
yarn dlx install-peerdeps --yarn --dev @jjangga0214/prettier-config
# For pnpm
pnpm dlx install-peerdeps --pnpm --dev @jjangga0214/prettier-config
```

## Usage

**package.json**:

```jsonc
{
  "name": "your-cool-library",
  "prettier": "@jjangga0214/prettier-config"
  // Other fields are ommitted for brevity
}
```

Or you can import it into the javascript config file.

**.prettierrc.js**:

```js
export { default } from '@jjangga0214/prettier-config'
```

## Development

- [REF](https://prettier.io/docs/en/configuration.html#sharing-configurations)
