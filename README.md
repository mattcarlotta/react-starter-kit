## Webpack React Boilerplate

A fork from <a href="https://github.com/HashemKhalifa/webpack-react-boilerplate">Webpack React Boilerplate</a>. This is a highly opinionated boilerplate and may not be suitable for everyone.

Note: A fullstack M.E.R.N boilerplate can be found on the <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/tree/fullstack">fullstack</a> branch.

![U5hVlFQ.gif](https://i.imgur.com/U5hVlFQ.gif)

## Table of contents

[Project structure](#project-structure)

[Installation](#installation)

[Configuration](#configuration)

[Packages Incorporated](#packages-incorporated)

## Project structure

```
├── build
|   ├── css
|   |   ├── main.[contenthash:8].css
|   |   └── main.[contenthash:8].css.map
|   ├── js
|   |   ├── main.[hash].js
|   |   └── main.[hash].js.map
|   ├── media
|   |   └── [hash].[ext]
|   └── favicon.ico
|   └── index.html
|
├── config
|   ├── paths.js
|   ├── webpack.common.js
|   ├── webpack.dev.js
|   └── webpack.prod.js
|
├── public
|   ├── favicon.ico
|   └── index.html
|
├── src
|   ├── components
|   ├── containers
|   ├── images
|   ├── reducers
|   ├── root
|   ├── routes
|   ├── store
|   ├── styles
|   ├── test
|   ├── types
|   ├── index.js
|   └── setupTests.js
|
└── webpack.config.js
```

## Installation

1 - Clone the boilerplate repo

```
 git clone -b master git@github.com:mattcarlotta/Webpack-React-Boilerplate.git
```

2 - `npm i` to install npm packages

3 - While at the app's `root` folder, start `webpack-dev-server` using `npm run dev`.

To build and bundle your client resources for staging, use `npm run staging` while inside the `root` folder (staging utilizes source maps for errors).
To build and bundle your client resources for production, use `npm run build` while inside the `root` folder (source maps will be excluded).

Unit testing will watch all your changes in the test files as well as create coverage folder for you via `npm run test`.

## Configuration

- Webpack config paths are based on the file structure in `config/paths.js` (modify the source and file names based upon your needs).
- `client/config/webpack.common.js` common webpack config for both development and production environments.
- `client/config/webpack.dev.js` webpack config for development environment only.
- `client/config/webpack.prod.js` webpack config for production environment only.
- `client/webpack.config.js` main webpack config that merges common and environments based upon ENV.
- Enzyme config `client/src/setupTest.js` enzyme test setup for your React components.
- Babel config `client/.babelrc`.
- Prettier config `client/.prettierc`.
- Browsers list config `client/.browserslistrc`.

## Packages Incorporated

- [Webpack 4](https://github.com/webpack/webpack)
- [Babel 7](https://github.com/babel/babel)
- [React 16.5.2](https://github.com/facebook/react)
- [React Router 3.2.1](https://github.com/ReactTraining/react-router/releases/tag/v3.2.1)
- [Redux 4.0.0](https://github.com/reduxjs/redux)
- [Redux Thunk 2.3.0](https://github.com/reduxjs/redux-thunk)
- [Redux Form 7.4.2](https://redux-form.com/)
- [Redux DevTools Extension 2.13.5](https://github.com/zalmoxisus/redux-devtools-extension)
- [React Router Redux 4.0.8](https://github.com/reactjs/react-router-redux)
- [Stylized Components 3.4.9](https://github.com/styled-components/styled-components)
- [Stylized Theming 2.2.0](https://github.com/styled-components/styled-theming)
- [Axios 0.18.0](https://github.com/axios/axios)
- [Lodash](https://github.com/lodash/lodash)
- [Jest](https://github.com/facebook/jest)
- [Enzyme](http://airbnb.io/enzyme/)
- [Eslint](https://github.com/eslint/eslint/)
- [Husky](https://github.com/typicode/husky)
- [Stylelint](https://stylelint.io/)
- [Stylelint-SCSS](https://github.com/kristerkari/stylelint-scss)
- [Stylelint-Config-Recommended](https://github.com/stylelint/stylelint-config-recommended)
- [Prettier](https://github.com/prettier/prettier)
- [CSS Loader](https://github.com/webpack-contrib/css-loader)
- [Sass Loader](https://github.com/webpack-contrib/sass-loader)
- [Style Loader](https://github.com/webpack-contrib/style-loader)
- [Mini CSS Extract Plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
- [Error Overlay Webpack Plugin](https://github.com/smooth-code/error-overlay-webpack-plugin)
- [UglifyJS Webpack Plugin](https://www.npmjs.com/package/uglifyjs-webpack-plugin)
- [Browsers list](https://github.com/browserslist/browserslist)
- [Webpack Dev Server](https://github.com/webpack/webpack-dev-server)
