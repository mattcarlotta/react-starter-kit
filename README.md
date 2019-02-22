## Webpack SSR Boilerplate

![cvU2GRX.png](https://i.imgur.com/cvU2GRX.png)

Note: This a SSR (Server Side Rendering) boilerplate! A React only boilerplate can be found on the <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/tree/master">master</a> branch or a React Hot Loaded boilerplate can be found on the <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/tree/hotloaded">hotloaded</a> branch, or a fullstack M.E.R.N boilerplate can be found on the <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/tree/fullstack">fullstack</a> branch.

## Table of contents

[Project Structure](#project-structure)

[Installation](#installation)

[Commands](#commands)

[Configuration](#configuration)

[Packages Incorporated](#packages-incorporated)

## Project Structure

```
├── coverage
|   ├── Icov-report
|   ├── clover.xml
|   ├── coverage-final.json
|   └── Icov.info
|
├── public
|   ├── assets
|   ├── favicon.ico
|   ├── loadable-assets.json
|   └── webpack-assets.json
|
├── src
|   ├── actions
|   ├── components
|   ├── containers
|   ├── reducers
|   ├── routes
|   ├── store
|   ├── styles
|   ├── tests
|   ├── types
|   ├── utils
|   |   ├── renderHtml.js
|   |   └── tests.js
|   ├── client.js
|   └── server.js
|
├── tools
|   ├── jest
|   |   ├── assetMock.js
|   |   ├── setup.js
|   |   └── styleMock.js
|   |
|   └── webpack
|       ├── config.babel.js
|       ├── entry.js
|       ├── envs.js
|       ├── hooks.js
|       ├── paths.js
|       ├── plugins.js
|       └── rules.js
├── index.js
└──  postcss.config.js
```

## Installation

1 - Clone the boilerplate `ssr` repository.

```
 git clone -b ssr git@github.com:mattcarlotta/Webpack-React-Boilerplate.git
```

2 - Run `npm install` to install dependencies.

3 - Globally or locally install `nodemon` for handling and updating the application for file changes:

Locally (while at the application's root directory): `npm i -D nodemon`

Globally: `sudo npm i -g nodemon`

4 - While at the application's root directory, start both servers by running `npm run dev`.

## Commands

To lint your .js/.scss files, run `npm run lint` while at the application's root directory.

To run your tests, while inside the client's root directory, run `npm run test` or `npm run test:watch`. Testing will watch all your changes in the `.test.js` files as well as create a `coverage` folder. To view the current coverage report, navigate to `coverage/Icov-report/src` and open `index.html` in a browser.

To build and bundle your client resources for production, while inside the client's root directory, use `npm run build` (source maps will be excluded). After you have built your React application for production, use `npm start` while at the application's root directory. You should now see your React application running on `http://localhost:3000`.

## Configuration

- `public/assets` contains compiled, production build .CSS, .MAP, .JS, and .GZ files.
- `public/loadable-assets.json` contains development file chunks.
- `public/webpack-assets.json` contains production file chunks.
- `public/assets` contains compiled, production build .CSS, .MAP, .JS, and .GZ files.
- `src/client.js` client-side setup.
- `src/server.js` express server that serves the client.
- `tools/webpack/config.babel.js` webpack config for both development and production environments.
- `tools/webpack/entry.js` webpack entry variables.
- `tools/webpack/envs.js` webpack environment variables.
- `tools/webpack/hooks.js` webpack hooks for handling SASS/CSS and media imports.
- `tools/webpack/paths.js` webpack config folder paths.
- `tools/webpack/plugins.js` webpack plugins required for development or production.
- `tools/webpack/rules.js` webpack rules testing.
- `utils/renderHtml.js` factory function to rewrite client-side DOM structure.
- `utils/tests.js` test setup for Jest and Enzyme (see notes in file for important information).

## Packages Incorporated

These packages are updated by an automated script that can be found <a href="https://github.com/mattcarlotta/UpdateBoilerplate">here</a>. To see the latest package versions, please check out the <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/blob/ssr/package.json">package.json</a>. If you run into any issues, please fill out an issue report <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/issues">here</a>.

- [Webpack](https://github.com/webpack/webpack)
- [Babel](https://github.com/babel/babel)
- [React](https://github.com/facebook/react)
- [React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [React Hot Loader](https://github.com/gaearon/react-hot-loader)
- [Redux](https://github.com/reduxjs/redux)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)
- [Connected React Router](https://github.com/supasate/connected-react-router)
- [History](https://github.com/ReactTraining/history)
- [Axios](https://github.com/axios/axios)
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
- [Style Loader](https://github.com/webpack-contrib/style-loader)
- [Sass Loader](https://github.com/webpack-contrib/sass-loader)
- [Mini CSS Extract Plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
- [Friendly Errors Webpack Plugin](https://github.com/geowarin/friendly-errors-webpack-plugin)
- [UglifyJS Webpack Plugin](https://www.npmjs.com/package/uglifyjs-webpack-plugin)
