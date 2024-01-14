# `@jjangga0214/markdownlint-config`

A sharable config package for [`markdownlint-cli`](https://github.com/igorshubovych/markdownlint-cli).

## Installation

```sh
npm install --save-dev @jjangga0214/markdownlint-config
# or
yarn add --dev @jjangga0214/markdownlint-config
# or
pnpm add --save-dev @jjangga0214/markdownlint-config
```

And you should also install `peerDependencies` manually.
Check out package.json or `npm info`.

```sh
# This does not install them all. This just show them on terminal.
npm info "@jjangga0214/markdownlint-config@latest" peerDependencies
```

Or install them all by [`install-peerdeps`](https://openbase.com/js/install-peerdeps/documentation).

```sh
# For npm
npx install-peerdeps --dev @jjangga0214/markdownlint-config
# For yarn
yarn dlx install-peerdeps --yarn --dev @jjangga0214/markdownlint-config
# For pnpm
pnpm dlx install-peerdeps --pnpm --dev @jjangga0214/markdownlint-config
```

## Note

- There're [`markdownlint-cli`](https://www.npmjs.com/package/markdownlint-cli) and [`markdownlint-cli2`](https://www.npmjs.com/package/markdownlint-cli2). This package works with the former. This may or may not work with the latter.
- There's [`igorshubovych/markdownlint-cli#97`](https://github.com/igorshubovych/markdownlint-cli/issues/97) for extending sharable config, and/or autodiscovery of .js config file. Once the discussion is settled, the usage below might ought to be edited.

## Usage

**.markdownlint.json**:

```jsonc
{
  "extends": "@jjangga0214/markdownlint-config"
  // You can override/add rules here.
}
```

**.markdownlintignore** (Optional):

```txt
.git
**/node_modules
# specify any patterns you need
```
