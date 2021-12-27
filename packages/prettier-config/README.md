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

## Note

- This package includes the CLI `prettier` as well as config. You do not have to manually install it.

## Development

- [REF](https://prettier.io/docs/en/configuration.html#sharing-configurations)

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
