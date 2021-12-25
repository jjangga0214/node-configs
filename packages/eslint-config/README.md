# `@jjangga0214/eslint-config`

Personal, opinionated eslint config and development environment.

## Usage

```shell
npm install --save-dev @jjangga0214/eslint-config
# or
yarn add --dev @jjangga0214/eslint-config
# or
pnpm add --save-dev @jjangga0214/eslint-config
```

**.eslintrc.js**:

```js
module.exports = {
  extends: "@jjangga0214/eslint-config",
};
```

## Notes

- This package includes the CLI `eslint` as well as plugin and config packages (e.g. `eslint-config-*`, `eslint-plugin-*`, etc). You do not have to manually install them.
- Check out **peerDependencies**.

## Development

REF: <https://eslint.org/docs/developer-guide/shareable-configs>
