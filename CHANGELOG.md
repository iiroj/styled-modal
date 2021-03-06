# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [7.1.4](https://github.com/iiroj/styled-modal/compare/v7.1.3...v7.1.4) (2021-02-19)

### [7.1.3](https://github.com/iiroj/styled-modal/compare/v7.1.2...v7.1.3) (2020-12-03)


### Bug Fixes

* correctly react to open prop and run lifecycles using hooks ([37df16e](https://github.com/iiroj/styled-modal/commit/37df16ee6b2d3b208a33c71237b5892700f91cc2))
* **deps:** enable tsc skipLibCheck during development because of @rollup/plugin-typescript bug ([8cae241](https://github.com/iiroj/styled-modal/commit/8cae24198615ff679046775819d98dfde12259ef))
* **deps:** update eslint rule name ([c78705d](https://github.com/iiroj/styled-modal/commit/c78705ddacacbda9a2f5832244f7c3ba97a214df))

### [7.1.2](https://github.com/iiroj/styled-modal/compare/v7.1.1...v7.1.2) (2020-05-04)


### Bug Fixes

* do not set useRef to document.body when server-side ([2786e5b](https://github.com/iiroj/styled-modal/commit/2786e5bff1e677cd222f7f43fc019e202a2ddc80))
* do not use .mjs extension for module field ([c9964fd](https://github.com/iiroj/styled-modal/commit/c9964fd46b6cee845ce7b972a572660fde44352b))
* install eslint-plugin-react-hooks and fix issues ([23fa376](https://github.com/iiroj/styled-modal/commit/23fa376f480592147dc7aa914c29d00a7260ebc5))

### [7.1.1](https://github.com/iiroj/styled-modal/compare/v7.1.0...v7.1.1) (2020-03-14)

## [7.1.0](https://github.com/iiroj/styled-modal/compare/v7.0.8...v7.1.0) (2019-12-30)


### Features

* use mjs extension for esm module ([06903f4](https://github.com/iiroj/styled-modal/commit/06903f4006c2770cd222779e517a80321d9fdfee))

### [7.0.8](https://github.com/iiroj/styled-modal/compare/v7.0.7...v7.0.8) (2019-12-01)

### [7.0.7](https://github.com/iiroj/styled-modal/compare/v7.0.6...v7.0.7) (2019-10-26)

### [7.0.6](https://github.com/iiroj/styled-modal/compare/v7.0.5...v7.0.6) (2019-09-25)

### [7.0.5](https://github.com/iiroj/styled-modal/compare/v7.0.4...v7.0.5) (2019-09-22)

### [7.0.4](https://github.com/iiroj/styled-modal/compare/v7.0.3...v7.0.4) (2019-08-27)

### [7.0.3](https://github.com/iiroj/styled-modal/compare/v7.0.2...v7.0.3) (2019-07-11)



### [7.0.2](https://github.com/iiroj/styled-modal/compare/v7.0.1...v7.0.2) (2019-07-07)


### Build System

* add husky, commitlint and lint-staged ([d46abe0](https://github.com/iiroj/styled-modal/commit/d46abe0))



### [7.0.1](https://github.com/iiroj/styled-modal/compare/v7.0.0...v7.0.1) (2019-07-06)



## [7.0.0](https://github.com/iiroj/styled-modal/compare/v6.0.0...v7.0.0) (2019-06-03)


### Features

* replace collectPortals function with PortalCollector component ([aef7d0e](https://github.com/iiroj/styled-modal/commit/aef7d0e))


### Tests

* fix coverage calculation ([71cf67f](https://github.com/iiroj/styled-modal/commit/71cf67f))


### BREAKING CHANGES

* The use of global variable for collecting SSR portals is removed, and the use of `collectPortals` function should be replaced with the `<PortalCollector />` component



## [6.0.0](https://github.com/iiroj/styled-modal/compare/v5.5.0...v6.0.0) (2019-06-02)


### Bug Fixes

* correctly run lifecycle methods with callbacks ([d2acd63](https://github.com/iiroj/styled-modal/commit/d2acd63))
* portal doesn't create new target element if it exists ([530a9bc](https://github.com/iiroj/styled-modal/commit/530a9bc))
* use awesome-typescript-loader ([ba60a7d](https://github.com/iiroj/styled-modal/commit/ba60a7d))


### Features

* rewrite with React hooks ([9096d9a](https://github.com/iiroj/styled-modal/commit/9096d9a))


### Tests

* fix Portal SSR and add test ([3e0b15c](https://github.com/iiroj/styled-modal/commit/3e0b15c))
* rename tests ([7b391f6](https://github.com/iiroj/styled-modal/commit/7b391f6))


### BREAKING CHANGES

* React version >=16.8 is now required



# [5.5.0](https://github.com/iiroj/styled-modal/compare/v5.4.15...v5.5.0) (2019-04-28)


### Bug Fixes

* typescript issues ([b325364](https://github.com/iiroj/styled-modal/commit/b325364))
* **storybook:** use merging config for webpack ([7ba6bdb](https://github.com/iiroj/styled-modal/commit/7ba6bdb))


### Features

* use eslint ([6979202](https://github.com/iiroj/styled-modal/commit/6979202))



## [5.4.15](https://github.com/iiroj/styled-modal/compare/v5.4.14...v5.4.15) (2019-03-27)



## [5.4.14](https://github.com/iiroj/styled-modal/compare/v5.4.13...v5.4.14) (2019-03-17)



<a name="5.4.13"></a>
## [5.4.13](https://github.com/iiroj/styled-modal/compare/v5.4.12...v5.4.13) (2019-03-02)



<a name="5.4.9"></a>
## [5.4.9](https://github.com/iiroj/styled-modal/compare/v5.4.8...v5.4.9) (2019-03-01)



<a name="5.4.8"></a>
## [5.4.8](https://github.com/iiroj/styled-modal/compare/v5.4.7...v5.4.8) (2019-02-08)


### Bug Fixes

* pass refs through React.forwardRef ([b8f808a](https://github.com/iiroj/styled-modal/commit/b8f808a))



<a name="5.4.7"></a>
## [5.4.7](https://github.com/iiroj/styled-modal/compare/v5.4.6...v5.4.7) (2019-02-05)



<a name="5.4.6"></a>
## [5.4.6](https://github.com/iiroj/styled-modal/compare/v5.4.5...v5.4.6) (2019-01-26)



<a name="5.4.5"></a>
## [5.4.5](https://github.com/iiroj/styled-modal/compare/v5.4.4...v5.4.5) (2019-01-26)



<a name="5.4.4"></a>
## [5.4.4](https://github.com/iiroj/styled-modal/compare/v5.4.3...v5.4.4) (2019-01-19)



<a name="5.4.3"></a>
## [5.4.3](https://github.com/iiroj/styled-modal/compare/v5.4.2...v5.4.3) (2019-01-15)



<a name="5.4.2"></a>
## [5.4.2](https://github.com/iiroj/styled-modal/compare/v5.4.1...v5.4.2) (2019-01-13)



<a name="5.4.1"></a>
## [5.4.1](https://github.com/iiroj/styled-modal/compare/v5.4.0...v5.4.1) (2019-01-09)



<a name="5.4.0"></a>
# [5.4.0](https://gitlab.com/iiroj/styled-modal/compare/v5.3.0...v5.4.0) (2019-01-04)


### Features

* use terser instead of babel-minify ([c3a0629](https://gitlab.com/iiroj/styled-modal/commit/c3a0629))



<a name="5.3.0"></a>
# [5.3.0](https://gitlab.com/iiroj/styled-modal/compare/v5.2.1...v5.3.0) (2019-01-03)


### Features

* build umd bundle in addition to commonjs and esm ([b6f06ca](https://gitlab.com/iiroj/styled-modal/commit/b6f06ca))



<a name="5.2.1"></a>
## [5.2.1](https://gitlab.com/iiroj/styled-modal/compare/v5.2.0...v5.2.1) (2019-01-03)



<a name="5.2.0"></a>
# [5.2.0](https://gitlab.com/iiroj/styled-modal/compare/v5.1.1...v5.2.0) (2019-01-03)


### Features

* use body-scroll-lock and support the `scrollLockRef` prop ([8fa1628](https://gitlab.com/iiroj/styled-modal/commit/8fa1628))



<a name="5.1.1"></a>
## [5.1.1](https://gitlab.com/iiroj/styled-modal/compare/v5.1.0...v5.1.1) (2018-12-26)



<a name="5.1.0"></a>
# [5.1.0](https://gitlab.com/iiroj/styled-modal/compare/v5.0.5...v5.1.0) (2018-12-26)


### Features

* generate cjs and esm build with rollup ([74a6b8d](https://gitlab.com/iiroj/styled-modal/commit/74a6b8d))
* use react-focus-lock instead of dom-focus-lock ([56bbfb4](https://gitlab.com/iiroj/styled-modal/commit/56bbfb4))



<a name="5.0.5"></a>
## [5.0.5](https://gitlab.com/iiroj/styled-modal/compare/v5.0.4...v5.0.5) (2018-11-30)



<a name="5.0.4"></a>
## [5.0.4](https://gitlab.com/iiroj/styled-modal/compare/v5.0.3...v5.0.4) (2018-11-12)


### Bug Fixes

* export StyledModalProps from index ([e67ec74](https://gitlab.com/iiroj/styled-modal/commit/e67ec74))



<a name="5.0.3"></a>
## [5.0.3](https://gitlab.com/iiroj/styled-modal/compare/v5.0.2...v5.0.3) (2018-11-10)



<a name="5.0.2"></a>
## [5.0.2](https://gitlab.com/iiroj/styled-modal/compare/v5.0.1...v5.0.2) (2018-10-25)


### Bug Fixes

* **prettier:** run tslint --fix ([204eee6](https://gitlab.com/iiroj/styled-modal/commit/204eee6))
* rename type definition ([648d771](https://gitlab.com/iiroj/styled-modal/commit/648d771))



<a name="5.0.1"></a>
## [5.0.1](https://gitlab.com/iiroj/styled-modal/compare/v5.0.0...v5.0.1) (2018-10-25)


### Bug Fixes

* remove styled-components dependency ([d81ae80](https://gitlab.com/iiroj/styled-modal/commit/d81ae80))



<a name="5.0.0"></a>
# [5.0.0](https://gitlab.com/iiroj/styled-modal/compare/v4.2.7...v5.0.0) (2018-10-11)


### Features

* Remove hard dependency on styled-components ([f5ae2aa](https://gitlab.com/iiroj/styled-modal/commit/f5ae2aa))


### BREAKING CHANGES

* Switched to supporting React.forwardRef and object styles by default, so the module is more generic and doesn’t rely on styled-components. Can be used with emotion as well. The reason for this change is that now styled-components supports object styles.

This will probably not work well with styled-components until its TypeScript typings are updated to support object styles.



<a name="4.2.7"></a>
## [4.2.7](https://gitlab.com/iiroj/styled-modal/compare/v4.2.6...v4.2.7) (2018-09-22)



<a name="4.2.6"></a>
## [4.2.6](https://gitlab.com/iiroj/styled-modal/compare/v4.2.5...v4.2.6) (2018-09-15)



<a name="4.2.5"></a>
## [4.2.5](https://gitlab.com/iiroj/styled-modal/compare/v4.2.4...v4.2.5) (2018-09-09)



<a name="4.2.4"></a>
## [4.2.4](https://gitlab.com/iiroj/styled-modal/compare/v4.2.3...v4.2.4) (2018-08-28)



<a name="4.2.3"></a>
## [4.2.3](https://gitlab.com/iiroj/styled-modal/compare/v4.2.2...v4.2.3) (2018-08-27)



<a name="4.2.2"></a>
## [4.2.2](https://gitlab.com/iiroj/styled-modal/compare/v4.2.1...v4.2.2) (2018-08-27)



<a name="4.2.1"></a>
## [4.2.1](https://gitlab.com/iiroj/styled-modal/compare/v4.2.0...v4.2.1) (2018-08-27)



<a name="4.2.0"></a>
# [4.2.0](https://gitlab.com/iiroj/styled-modal/compare/v4.1.0...v4.2.0) (2018-08-27)


### Bug Fixes

* Remove unused typings ([075a366](https://gitlab.com/iiroj/styled-modal/commit/075a366))


### Features

* Use Jest instead of Mocha to collect coverage ([5459fd0](https://gitlab.com/iiroj/styled-modal/commit/5459fd0))
* Use ts-loader and fork-ts-checker-webpack-plugin ([828aabb](https://gitlab.com/iiroj/styled-modal/commit/828aabb))



<a name="4.1.0"></a>
# [4.1.0](https://gitlab.com/iiroj/styled-modal/compare/v4.0.1...v4.1.0) (2018-08-16)


### Features

* Use standard-version ([9fd3263](https://gitlab.com/iiroj/styled-modal/commit/9fd3263))



----

# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [4.0.1] - 2018-08-09
### Changed
- Update packages
- Update readme

## [4.0.0] - 2018-07-26
### Added
- Added async lifecycle methods `beforeOpen`, `afterOpen`, `beforeClose` and `afterClose`, which run around the changing of `open: boolean`. They are awaited so the modal will only open after `beforeOpen` resolves, and close after `beforeClose` resolves. Similarly, the `beforeOpen` cannot fire before `afterClose` is resolved, or `beforeClose` before `afterOpen`.
### Fixed
- Fix incorrect usage of `onKeyUp` on a non-input element and thus `closeOnEsc` not working

## [3.1.2] - 2018-07-23
### Fixed
- Fix initializing `open: false` from prop

## [3.1.1] - 2018-07-23
### Fixed
- Use `getSnapshotBeforeUpdate` for setting `isToggled` to make sure it applies before rendering

## [3.1.0] - 2018-07-23
### Added
- Add `isToggled: boolean` prop passed to all custom modal components. By default `false`, this will change to `true` once the modal has been toggled client-side. Useful for enabling animations (so that initial SSR animation are not applied).

## [3.0.0] - 2018-07-19
### Added
- Add initial tests, with Mocha, Chai and Enzyme, transpiled with Babel
- Add `isClientSide: boolean` prop passed to all custom modal components. See Readme for usage
### Changed
- the `hasDom` helper is ran only once, and its behaviour has changed slightly. Now it checks for `window` and `window.document` not being undefined
  - This helper is now also exported
- *BREAKING CHANGE*: The `<Portal />` component's `target?: string = 'modal'` prop is now a string instead of a dom node
- The above `target?: string = 'modal'` props has been added to the default import `<StyledModal />`, and is passed through to the `<Portal />`
- When using a custom `target?: string` (the "root" where modals are portaled to), the `flushPortals` function can be supplied the the same `target?: string = 'modal'` as an argument

## [2.9.0] - 2018-07-3
### Changed
- Use React synthetic events for closing the Modal. This fixes bugs related to the clicked DOM node disappearing from inside the Modal, and thus the Modal closing.
- Fix bug with scroll-locking by always importing dependencies

## [2.8.1] - 2018-07-2
### Changed
- Update packages

## [2.8.0] - 2018-06-24
### Changed
- Escape key detection uses `KeyboardEvent.key` and `KeyboardEvent.code` instead of `KeyboardEvent.keyCode`
- Rename `@types` to `types``
- Update packages

## [2.7.2] - 2018-06-07
### Fixed
- Fix typo in license

## [2.7.1] - 2018-06-06
### Changed
- Update to repository

## [2.7.0] - 2018-06-01
### Changed
- Update packages
- Use `React.createRef`

## [2.6.2] - 2018-05-14
### Changed
- Update packages
- Migrate `.babelrc` to `babel.config.js`

## [2.6.1] - 2018-04-30
### Fixed
- Update `package-lock.json`

## [2.6.0] - 2018-04-30
### Changed
- Allow supplying custom `Overscroll` component via prop.

## [2.5.2] - 2018-04-26
### Fixed
- Bumb version because of (possibly) failed publish

## [2.5.1] - 2018-04-26
### Fixed
- Specify `types` in package.json

## [2.5.0] - 2018-04-23
### Changed
- Import `dom-focus-lock` and `no-scroll` dynamically only if enabled

## [2.4.0] - 2018-04-23
### Added
- Added the props `lockFocusWhenOpen` and `lockScrollWhenOpen`
### Removed
- Remove extraneous `babel` packages that were unneeded for development (since the package is built with TSC)
### Changed
- Updated rest of the packages

## [2.3.7] - 2018-04-19
### Fixed
- Modules are "commonJs" instead of "amd"

## [2.3.6] - 2018-04-19
### Fixed
- Fix importing of React and other stuff for TypeScript Compiler

## [2.3.5] - 2018-04-19
### Fixed
- Fix importing of React and other stuff for TypeScript Compiler

## [2.3.4] - 2018-04-19
### Fixed
- Fix importing of React and other stuff for TypeScript Compiler

## [2.3.3] - 2018-04-19
### Changed
- The production package is now built with the TypeScript Compiler

## [2.3.2] - 2018-04-17
### Changed
- Use npm instead of Yarn in Travis

## [2.3.1] - 2018-04-17
### Changed
- Update packages
- Use npm instead of Yarn

## [2.3.0] – 2018-04-07
### Changed
- Rename `backdropComponent` to `containerComponent`
- Styles are now passed as a styled-components theme to `modalComponent` and `containerComponent`
- The Container component now receives the `open` prop and should return either JSX with `children` (the modal) or `null` (when modal is closed). This allows for better customization like animating the closing of the modal. See Readme for example for a custom component.
### Removed
- Removed tests, as they didn't really do anything meaningful; Storybook working is good enough of a test

## [2.2.0] - 2018-04-05
### Added
- Add a secondary `_ref` prop for the optional `modalComponent`, so that you can pass references to more complex components. This is because `styled-components` eats the `innerRef` prop and doesn't pass it to its children.

## [2.1.2] - 2018-04-04
### Fixed
- `has-dom` workaround for tslint complaining

## [2.1.1] - 2018-04-04
### Fixed
- `has-dom` util correctly checks for `window`
- `<Modal />` runs opening side-effects on componentDidMount, if necessary
### Changed
- Update Storybook's webpack config to new standard: https://storybook.js.org/configurations/custom-webpack-config/#full-control-mode--default

## [2.1.0] - 2018-04-03
### Changed
- Modal no longer has a state, and instead relies only on `open`, `handleOpen`, and `handleClose` props
- Update packages

## [2.0.1] - 2018-03-30
### Added
- Include sources in the package for Typescript definitions
### Changed
- Update readme

## [2.0.0] - 2018-03-30
### Changed
- Rewrite in Babel 7 / Typescript
- Update for React 16.3.0
- `<Portal />` can be render to whatever dom element by supplying it in the `target` prop

## [1.1.0] - 2018-03-10
### Added
- Pass all other props supplied to `<Modal />` to the container component. This allow you to set `aria-labelledby` and `aria-describedby`, for example
- When supplying an `appId` prop, that element is set to `aria-hidden="true"` when Modal is open
### Changed
- `modalComponent` and `backdropComponent` are set in `render()` so they can change dynamically
### Fixed
- Side effects for opening the Modal are now run on `componentWillMount()`, if Modal should be open when mounted.

## [1.0.3] - 2018-03-10
### Changed
- Target current node version
### Fixed
- Fix setting `this.container`

## [1.0.2] - 2018-03-10
### Fixed
- Fix running callback functions
- Fix running tests by changing from `react-focus-lock`to `dom-focus-lock`

## [1.0.1] - 2018-03-08
### Changed
- Pass fallback/defalt components through defaultProps

## [1.0.0] - 2018-03-08
### Added
- Modal locks focusing on elements inside itself when open
- Scrolling of Window is disabled when modal is open
- Modal has the `aria-role="dialog"` attribute
### Changed
- Instead of css, supply complete styled components for `backdropComponent`and `modalComponent`.
- Codebase structure is slightly changed, with stories in a separate folder.
### Fixed
- Fixed the logic of portaling into the specified element instead of duplicating it.

## [0.1.4] - 2018-03-06
### Changed
- Update readme.

## [0.1.3] - 2018-03-06
### Changed
- Update readme.

## [0.1.2] - 2018-03-06
### Changed
- Do not include src to published package.

## [0.1.1] - 2018-03-06
### Changed
- Change package name to `styled-modal` because it was available.

## [0.1.0] - 2018-03-06
### Added
- Initial Release
