## Webpack React Boilerplate

![ZSLxywi.gif](https://i.imgur.com/ZSLxywi.gif)

Note: A React Hot Loaded boilerplate can be found on the <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/tree/hotloaded">hotloaded</a> branch, a fullstack M.E.R.N boilerplate can be found on the <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/tree/fullstack">fullstack</a> branch, or a React SSR boilerplate can be found on the <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/tree/ssr">ssr</a> branch..

## Table of contents

[Project Structure](#project-structure)

[Installation](#installation)

[Commands](#commands)

[Configuration](#configuration)

[Packages Incorporated](#packages-incorporated)

## Project Structure

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
|   ├── devServer.js
|   ├── envs.js
|   ├── optimization.js
|   ├── output.js
|   ├── paths.js
|   ├── plugins.js
|   └── rules.js
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
|   ├── tests
|   ├── types
|   └── index.js
|
└── webpack.config.js
```

## Installation

1 - Clone the boilerplate repository.

```
 git clone -b master git@github.com:mattcarlotta/Webpack-React-Boilerplate.git
```

2 - Run `npm i` to install dependencies.

3 - While at the application's root directory, start the `webpack-dev-server` by running `npm run dev`.

## Commands

To lint your .js files, run `npm run lintjs`.

To prettify your .js files, run `npm run format`.

To lint your .scss files, run `npm run lintstyles`.

To run your tests, while inside the client's root directory, run `npm run test`. Testing will watch all your changes in the `.test.js` files as well as create a `coverage` folder. To view the current coverage report, navigate to `coverage/Icov-report/src` and open `index.html` in a browser. Please note that `*.test.js` files will be ignored by ESlint. To find out why, please see <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/blob/master/src/setupTests.js">setupTest.js</a> for more information.

To build and bundle your client resources for staging, use `npm run staging` while inside the root directory (staging utilizes source maps for errors).

To build and bundle your client resources for production, use `npm run build` while inside the root directory (source maps will be excluded).

## Configuration

- `config/devServer.js` webpack devServer options.
- `config/envs.js` webpack environment variables.
- `config/optimization.js` webpack optimization options.
- `config/output.js` webpack output options.
- `config/paths.js` webpack config folder paths.
- `config/plugins.js` webpack plugins options.
- `config/rules.js` webpack rules functions.
- `webpack.config.js` an single webpack environment based config.
- `src/client/tests/setup/setupTest.js` enzyme test setup for your React components.
- `.babelrc` babel config for react js files.
- `.browserslistrc` browsers list config.
- `.eslintignore` eslint config for ignoring scss files.
- `.eslintrc` eslint config for linting js files.
- `.prettierc` prettier config.
- `.stylelintrc.json` stylelint config for linting scss files.
- `jest.json` jest config.

## Packages Incorporated

These packages are updated by an automated script that can be found <a href="https://github.com/mattcarlotta/UpdateBoilerplate">here</a>. To see the latest package versions, please check out the <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/blob/master/package.json">package.json</a>. If you run into any issues, please fill out an issue report <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/issues">here</a>.

- [Webpack](https://github.com/webpack/webpack)
- [Babel](https://github.com/babel/babel)
- [React](https://github.com/facebook/react)
- [React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [Redux](https://github.com/reduxjs/redux)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Redux Form](https://redux-form.com/)
- [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)
- [Connected React Router](https://github.com/supasate/connected-react-router)
- [History](https://github.com/ReactTraining/history)
- [Stylized Components](https://github.com/styled-components/styled-components)
- [Stylized Theming](https://github.com/styled-components/styled-theming)
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
- [Error Overlay Webpack Plugin](https://github.com/smooth-code/error-overlay-webpack-plugin)
- [Friendly Errors Webpack Plugin](https://github.com/geowarin/friendly-errors-webpack-plugin)
- [UglifyJS Webpack Plugin](https://www.npmjs.com/package/uglifyjs-webpack-plugin)
- [Browsers List](https://github.com/browserslist/browserslist)
- [Webpack Dev Server (Hot Loaded)](https://github.com/webpack/webpack-dev-server)
