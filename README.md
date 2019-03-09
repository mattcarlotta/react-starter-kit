## Webpack React Boilerplate

![ZSLxywi.gif](https://i.imgur.com/ZSLxywi.gif)

## Versions

- <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/tree/master">React Boilerplate</a>
- <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/tree/hotloaded">React Hot Loader Boilerplate</a>
- <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/tree/fullstack">Fullstack M.E.R.N Boilerplate</a>
- <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/tree/ssr">React Server Side Rendering Boilerplate</a>

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
├── server.js
└── webpack.config.js
```

## Installation

1 - Clone the boilerplate repository.

```
 git clone -b master git@github.com:mattcarlotta/Webpack-React-Boilerplate.git
```

2 - Run `yarn install` to install dependencies.

3 - While at the application's root directory, start the `webpack-dev-server` by running `yarn dev`.

## Commands

To lint your .js files, run `yarn lintjs`.

To prettify your .js files, run `yarn format`.

To lint your .scss files, run `yarn lintstyles`.

To run your tests, while inside the client's root directory, run `yarn test`. Running `yarn test` will watch all your changes in the `.test.js` files. Running `yarn test:coverage` will create a `coverage` folder. To view the current coverage report, navigate to `coverage/Icov-report/src` and open `index.html` in a browser. Please note that `*.test.js` files will be partially ignored by ESlint. To find out why, please see <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/blob/master/src/tests/setup/setupTests.js#L8-L16">setupTest.js</a> for more information.

To build and bundle your client resources for production, use `yarn build` while inside the root directory (source maps will be excluded).

Once your application has been compiled, to run a local production build, run `yarn start`. By default, your application will be served on `http://localhost:8080` unless changed in the <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/blob/master/package.json#L24-L31">start script</a>.

## Configuration

- `config/devServer.js` webpack devServer options.
- `config/envs.js` webpack environment variables.
- `config/optimization.js` webpack optimization options.
- `config/output.js` webpack output options.
- `config/paths.js` webpack config folder paths.
- `config/plugins.js` webpack plugins options.
- `config/rules.js` webpack rules functions.
- `src/client/tests/setup/setupTest.js` enzyme test setup for your React components.
- `.babelrc` babel config for react js files.
- `.browserslistrc` browsers list config.
- `.eslintignore` eslint config for ignoring scss files.
- `.eslintrc` eslint config for linting js files.
- `.prettierc` prettier config.
- `.stylelintrc.json` stylelint config for linting scss files.
- `jest.json` jest config.
- `server.js` an express configuration to serve production assets.
- `webpack.config.js` an single webpack environment based config.

## Packages Incorporated

These packages are updated by an automated script that can be found <a href="https://github.com/mattcarlotta/UpdateBoilerplate">here</a>. To see the latest package versions, please check out the <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/blob/master/package.json#L98-L164">package.json</a>. If you run into any issues, please fill out an issue report <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/issues">here</a>.

- [Axios](https://github.com/axios/axios)
- [Babel](https://github.com/babel/babel)
- [Browsers List](https://github.com/browserslist/browserslist)
- [Connected React Router](https://github.com/supasate/connected-react-router)
- [CSS Loader](https://github.com/webpack-contrib/css-loader)
- [Enzyme](http://airbnb.io/enzyme/)
- [Error Overlay Webpack Plugin](https://github.com/smooth-code/error-overlay-webpack-plugin)
- [Express](https://github.com/expressjs/express)
- [Eslint](https://github.com/eslint/eslint/)
- [Friendly Errors Webpack Plugin](https://github.com/geowarin/friendly-errors-webpack-plugin)
- [History](https://github.com/ReactTraining/history)
- [Husky](https://github.com/typicode/husky)
- [Jest](https://github.com/facebook/jest)
- [Lodash](https://github.com/lodash/lodash)
- [Mini CSS Extract Plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
- [Morgan](https://github.com/expressjs/morgan)
- [Prettier](https://github.com/prettier/prettier)
- [React](https://github.com/facebook/react)
- [React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [Redux](https://github.com/reduxjs/redux)
- [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)
- [Redux Form](https://redux-form.com/)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Stylelint](https://stylelint.io/)
- [Stylelint-SCSS](https://github.com/kristerkari/stylelint-scss)
- [Stylelint-Config-Recommended](https://github.com/stylelint/stylelint-config-recommended)
- [Stylized Components](https://github.com/styled-components/styled-components)
- [Sass Loader](https://github.com/webpack-contrib/sass-loader)
- [Style Loader](https://github.com/webpack-contrib/style-loader)
- [UglifyJS Webpack Plugin](https://www.npmjs.com/package/uglifyjs-webpack-plugin)
- [Webpack](https://github.com/webpack/webpack)
- [Webpack Dev Server (Hot Loaded)](https://github.com/webpack/webpack-dev-server)
