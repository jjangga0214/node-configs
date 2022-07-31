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

And you should also install peerDependencies manually.

Or install them all by [`install-peerdeps`](https://openbase.com/js/install-peerdeps/documentation).

```sh
# For npm
npx install-peerdeps --dev @jjangga0214/prettier-config
# For yarn
npx install-peerdeps --yarn --dev @jjangga0214/prettier-config
# For pnpm
npx install-peerdeps --pnpm --dev @jjangga0214/prettier-config
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

Or you can import it into javascript config file.

**.prettierrc.js**:

```js
module.exports = {
  ...require("@jjangga0214/prettier-config"),
  // You can override some fileds
};
```

## Development

- [REF](https://prettier.io/docs/en/configuration.html#sharing-configurations)
