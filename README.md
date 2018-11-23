## Webpack FullStack Boilerplate

![cvU2GRX.png](https://i.imgur.com/cvU2GRX.png)

Note: This a M.E.R.N. (Mongo, Express, React, NodeJS) fullstack boilerplate! A React only boilerplate can be found on the <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/tree/master">master</a> branch or a React Hot Loaded boilerplate can be found on the <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/tree/hotloaded">hotloaded</a> branch.

## Table of contents

[Project Structure](#project-structure)

[Installation](#installation)

[Commands](#commands)

[Client Configuration](#client-configuration)

[Packages Incorporated](#packages-incorporated)

## Project Structure

```
├── client
|   ├── build
|   |   ├── css
|   |   |   ├── main.[contenthash:8].css
|   |   |   └── main.[contenthash:8].css.map
|   |   ├── js
|   |   |   ├── main.[hash].js
|   |   |   └── main.[hash].js.map
|   |   ├── media
|   |   |   └── [hash].[ext]
|   |   ├── favicon.ico
|   |   └── index.html
|   |
|   ├── config
|   |   ├── envs.js
|   |   ├── paths.js
|   |   ├── rules.js
|   |   ├── webpack.common.js
|   |   ├── webpack.dev.js
|   |   └── webpack.prod.js
|   |
|   ├── public
|   |   ├── favicon.ico
|   |   └── index.html
|   |
|   ├── src
|   |   ├── components
|   |   ├── containers
|   |   ├── images
|   |   ├── reducers
|   |   ├── root
|   |   ├── routes
|   |   ├── store
|   |   ├── styles
|   |   ├── tests
|   |   ├── types
|   |   ├── index.js
|   |   └── setupTests.js
|   |
|   └── webpack.config.js
|
├── controllers
├── database
├── env
├── middlewares
├── models
├── routes
├── server
├── services
├── shared
└── app.js
```

## Installation

1 - Clone the boilerplate `fullstack` repository.

```
 git clone -b fullstack git@github.com:mattcarlotta/Webpack-React-Boilerplate.git/
```

2 - Run `npm i && cd client && npm i` to install dependencies.

3 - Globally or locally install `nodemon` for handling and updating the application for file changes:

Locally (while at the application's root directory): `npm i -D nodemon`

Globally: `sudo npm i -g nodemon`

4 - While at the application's root directory, start both servers by running `npm run dev`.

## Commands

To prettify and lint your .js/.scss files, run `npm run lint` while at the application's root directory.

To run your tests, while inside the client's root directory, run `npm run test`. Testing will watch all your changes in the `.test.js` files as well as create a `coverage` folder. To view the current coverage report, navigate to `coverage/Icov-report/src` and open `index.html` in a browser.

To build and bundle your client resources for staging, while inside the client's root directory, use `npm run staging` (staging utilizes source maps for errors). After you have built your React application for staging, use `npm start` while at the application's root directory. You should now see your React application running on `http://localhost:5000`.

To build and bundle your client resources for production, while inside the client's root directory, use `npm run build` (source maps will be excluded). After you have built your React application for production, use `npm start` while at the application's root directory. You should now see your React application running on `http://localhost:5000`.

## Client Configuration

- `client/config/envs.js` webpack environment variables.
- `client/config/paths.js` webpack config folder paths.
- `client/config/rules.js` webpack rules functions.
- `client/config/webpack.common.js` common webpack config for both development and production environments.
- `client/config/webpack.dev.js` webpack config for development environment only.
- `client/config/webpack.prod.js` webpack config for production environment only.
- `client/webpack.config.js` main webpack config that merges common and an environment based config
- `client/src/setupTest.js` enzyme test setup for your React components.
- `client/.babelrc` babel config for react js files.
- `client/.browserslistrc` browsers list config.
- `client/.eslintignore` eslint config for ignoring scss files.
- `client/.eslintrc` eslint config for linting js files.
- `client/.prettierc` prettier config.
- `client/.stylelintrc.json` stylelint config for linting scss files.

## Packages Incorporated

### Client

- [Webpack 4](https://github.com/webpack/webpack)
- [Babel 7](https://github.com/babel/babel)
- [React 16.6.0](https://github.com/facebook/react)
- [React Router DOM 4.3.1](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [Redux 4.0.1](https://github.com/reduxjs/redux)
- [Redux Thunk 2.3.0](https://github.com/reduxjs/redux-thunk)
- [Redux Form 7.4.2](https://redux-form.com/)
- [Redux DevTools Extension 2.13.5](https://github.com/zalmoxisus/redux-devtools-extension)
- [Connected React Router 5.0.1](https://github.com/supasate/connected-react-router)
- [History 4.7.2](https://github.com/ReactTraining/history)
- [Stylized Components 4.0.3](https://github.com/styled-components/styled-components)
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
- [Style Loader](https://github.com/webpack-contrib/style-loader)
- [Sass Loader](https://github.com/webpack-contrib/sass-loader)
- [Mini CSS Extract Plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
- [Error Overlay Webpack Plugin](https://github.com/smooth-code/error-overlay-webpack-plugin)
- [Friendly Errors Webpack Plugin](https://github.com/geowarin/friendly-errors-webpack-plugin)
- [UglifyJS Webpack Plugin](https://www.npmjs.com/package/uglifyjs-webpack-plugin)
- [Browsers List](https://github.com/browserslist/browserslist)
- [Webpack Dev Server (Hot Loaded)](https://github.com/webpack/webpack-dev-server)

### Server

- [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)
- [Bluebird](https://github.com/petkaantonov/bluebird)
- [Body Parser](https://github.com/expressjs/body-parser)
- [Concurrently](https://github.com/kimmobrunfeldt/concurrently)
- [Consign](https://github.com/jarradseers/consign)
- [CORS](https://github.com/expressjs/cors)
- [Express](http://expressjs.com/)
- [Moment](http://momentjs.com/)
- [Mongoose](https://mongoosejs.com/)
- [Morgan](https://github.com/expressjs/morgan)
- [Passport](http://www.passportjs.org/)
- [Passport Local](https://github.com/jaredhanson/passport-local)
- [Prettier](https://github.com/prettier/prettier)
