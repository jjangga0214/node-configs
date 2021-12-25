# `@jjangga0214/commitlint-config`

## Usage

```shell
npm install --save-dev @jjangga0214/commitlint-config
# or
yarn add --dev @jjangga0214/commitlint-config
# or
pnpm add --save-dev @jjangga0214/commitlint-config
```

**.commitlint.config.js**:

```js
module.exports = {
  // REF: https://commitlint.js.org/#/concepts-shareable-config
  extends: ["@jjangga0214/commitlint-config"],
  // rules: { ... } // You can override it.
};
```

## Notes

This package includes the CLI `@commitlint/cli` and `commitizen` as well as config. You do not have to manually install them.
