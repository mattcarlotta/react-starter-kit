## Webpack FullStack Boilerplate

A fork from <a href="https://github.com/HashemKhalifa/webpack-react-boilerplate">Webpack React Boilerplate</a>. This is a highly opinionated boilerplate and may not be suitable for everyone.

Note: This a M.E.R.N. (Mongo, Express, React, NodeJS) fullstack boilerplate!

![Inv096o.gif](https://i.imgur.com/Inv096o.gif)

## Table of contents

[Project structure](#project-structure)

[Installation](#installation)

[Client Configuration](#client-configuration)

[Packages Incorporated](#packages-incorporated)

## Project structure

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
|   |   ├── paths.js
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
|   |   ├── test
|   |   ├── types
|   |   ├── index.js
|   |   └── setupTests.js
|   |
|   └── webpack.config.js
|
├── controllers
├── database
├── env
├── libs
├── models
├── routes
├── services
├── shared
└── app.js
```

## Installation

1 - Clone the boilerplate repo

```
 git clone -b fullstack git@github.com:mattcarlotta/Webpack-React-Boilerplate.git/
```

2 - `npm i && cd client && npm i` to install npm packages

3 - While at the app's `root` folder, start both servers using `npm run dev`.

To build and bundle your client resources for production, use `npm run build` while inside the client's `root` folder. After you have built your React application, simply use `npm start` while at the application's `root` folder. You should now see your React application running on `http://localhost:5000`.

Unit testing will watch all your changes in the test files as well as create coverage folder for you via `npm run test`, while inside the client's `root` folder.

## Client Configuration

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

### Client

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
