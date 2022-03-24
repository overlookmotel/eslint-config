# Changelog

## 10.0.1

Dev:

* Update dev dependencies

Docs:

* Fix changelog

## 10.0.0

Breaking changes:

* Update to ESLint 8

Dev:

* Run tests on CI on Node v17
* Clean up after `cover` NPM script even if fails

Docs:

* Update license year

## 9.0.7

Bug fixes:

* Enable `commonjs` option on `import/no-unresolved` rule

Dependencies:

* Update peer dependencies

## 9.0.6

Dependencies:

* Update peer dependencies

Dev:

* Update dev dependencies

## 9.0.5

Rule changes:

* Disable `no-multi-assign` rule

## 9.0.4

Dev:

* Fix `package-lock.json` version
* Update dev dependencies

## 9.0.3

Dev:

* Use NPM v7 for development
* CI run lint and coverage with Node v16

## 9.0.2

Bug fixes:

* Remove `returnsProp` JSDoc tag rule

## 9.0.1

No code:

* Linting fixes

## 9.0.0

Breaking changes:

* Add JSDoc rules [major]

## 8.0.0

Breaking changes:

* Disable `no-nested-ternary` rule
* Disable `no-return-await` rule
* Parser `ecmaVersion` 2021

Bug fixes:

* Parse `.mjs` files as ES Modules

Features:

* Drop support for Node v10

Dependencies:

* Update peer dependencies

Dev:

* Use Github Actions for CI
* Update dev dependencies

Docs:

* Remove Greenkeeper badge
* Update license year
* Remove license indentation

## 7.2.1

Tests:

* Import module by name [fix]

## 7.2.0

Tests:

* Import module by name [refactor]

## 7.1.4

Dev:

* Replace Mocha + Chai with Jest

## 7.1.3

Features:

* Drop support for Node v8

Dependencies:

* Update peer dependencies

Dev:

* CI run tests on Node v14
* Simplify lint scripts
* Update dev dependencies
* `.editorconfig` config
* Replace `.npmignore` with `files` list in `package.json`
* Remove `sudo` key from Travis CI config
* Travis CI cache NPM

## 7.1.2

Docs:

* Fix missing changelog entry [fix]

## 7.1.1

No code:

* Header code comments

## 7.1.0

Rule changes:

* Tab width of 2 not 4

## 7.0.0

Breaking changes:

* Update ESLint peer dependencies

Rule changes:

* Enforce `import/extensions` rule
* Relax `object-shorthand` rule with `ignoreConstructors` option

Refactor:

* File extensions on imports

Dev:

* Update dev dependencies
* ESLint ignore coverage dir
* Update `.gitignore` + `.npmignore`

Docs:

* Versioning policy
* Update license year

## 6.0.0

Breaking changes:

* Remove Node-specific functionality (use `@overlookmotel/eslint-config-node`)
* Update ESLint peer dependencies

Dev:

* Update dev dependencies

## 5.0.1

Dev:

* Update dev dependencies

## 5.0.0

Breaking changes:

* Update ESLint peer dependencies

Dev:

* Update dev dependencies

## 4.3.2

Rule changes:

* Disable `max-classes-per-file` rule

## 4.3.1

Rule changes:

* `arrow-parens` rule only brackets for block arrow functions

## 4.3.0

Rule changes:

* `strict` rule global option

## 4.2.0

Rule changes:

* Update AirBnB config

Dev:

* Update dev dependencies

## 4.1.0

Rule changes:

* Add `eslint-plugin-node`

## 4.0.1

Dev:

* Update dev dependencies

## 4.0.0

Breaking changes:

* Drop support for Node v6
* Update peer dependencies

Dev:

* CI run tests on Node v12
* `package-lock.json`
* Update dev dependencies

## 3.0.2

Dev:

* Git ignore package-lock.json
* Reformat package.json

## 3.0.1

Dev:

* ESLint config no `.js` in require path

## 3.0.0

Rule changes:

* `no-console` rule error not warning

## 2.1.2

Rule changes:

* Disable `guard-for-in` rule

## 2.1.1

Rule changes:

* Disable `no-await-in-loop` rule

## 2.1.0

Rule changes:

* Alter `generator-star-spacing` rule
* Disable `no-continue` rule
* `object-shorthand` rule disable `ignoreConstructors` option

Other:

* Lint `index.js`

## 2.0.0

Breaking changes:

* Base on airbnb config

Other:

* Update dependencies
* Lint this library with own config

## 1.1.1

* README update
* Rename CI npm script `ci`
* NPM ignore `.gitattributes`

## 1.1.0

* Add `eslint-comments` plugin [feat]
* Rules for `max-len` [feat]
* Use `@overlookmotel/eslint-config-tests` ESLint config for tests

## 1.0.0

* Initial release
