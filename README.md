## Webpack SSR Boilerplate

![XhgJKxh.png](https://i.imgur.com/XhgJKxh.png)

Note: This a SSR (Server Side Rendering) boilerplate! A React only boilerplate can be found on the <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/tree/master">master</a> branch or a React Hot Loaded boilerplate can be found on the <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/tree/hotloaded">hotloaded</a> branch, or a fullstack M.E.R.N boilerplate can be found on the <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/tree/fullstack">fullstack</a> branch.

## Table of contents

[Project Structure](#project-structure)

[Installation](#installation)

[Commands](#commands)

[Example API](#example-api)

[Configuration](#configuration)

[Packages Incorporated](#packages-incorporated)

[Known Issues](#known-issues)

## Project Structure

```
├── envs
|   └── index.js
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
|   ├── pages
|   ├── reducers
|   ├── routes
|   ├── store
|   ├── styles
|   |   ├── assets
|   |   ├── extensions
|   |   ├── globals
|   |   ├── variables
|   |   └── styles.js
|   |
|   ├── types
|   ├── utils
|   |   ├── client
|   |   |   ├── axiosConfig.js
|   |   |   ├── renderApp.js
|   |   |   └── tests.js
|   |   |
|   |   └── server
|   |       ├── middlewares.js
|   |       ├── renderHtml.js
|   |       ├── serveProdAssets.js
|   |       ├── serveReact.js
|   |       ├── setupDevServer.js
|   |       └── startServer.js
|   |
|   ├── client.js
|   └── server.js
|
├── tools
|   ├── jest
|   |   ├── assetMock.js
|   |   └── setup.js
|   |
|   └── webpack
|       ├── entry.js
|       ├── hooks.js
|       ├── paths.js
|       ├── plugins.js
|       ├── rules.js
|       └── webpack.babel.js
|
├── index.js
└── postcss.config.js
```

## Installation

1 - Clone the boilerplate `ssr` repository.

```
 git clone -b ssr git@github.com:mattcarlotta/Webpack-React-Boilerplate.git
```

2 - Run `npm install` to install dependencies.

3 - While at the application's root directory, start the server by running `npm run dev`.

## Commands

To lint your .js/.scss files, run `npm run lint` while at the application's root directory.

To run your tests, while inside the client's root directory, run `npm run test` to run tests create a `coverage` folder. Or run `npm run test:watch` to watch all your changes in the `.test.js` files. To view the current coverage report, navigate to `coverage/Icov-report/src` and open `index.html` in a browser.

To build and bundle your client resources for production, while inside the client's root directory, use `npm run build` (source maps will be excluded). After you have built your React application for production, use `npm start` while at the application's root directory. You should now see your React application running on `http://localhost:3000`.

To see more script commands, please check out the <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/blob/b799752d789526a0eac8b5b8a477843f6382fa92/package.json#L18-L33">package.json</a>.

## Example API

Provided in this boilerplate is an example of how to integrate a RESTFUL API (utilizing MongoDB) with SSR. The main advantage of integrating an API with SSR is to avoid using <a href="https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS">CORS</a>. As such, this pre-configured setup can be utilized or removed.

If you wish to utilize the API:

- <a href="https://docs.mongodb.com/manual/installation/">Install MongoDB</a> and make sure the service is up and running.
- Navigate to `http://localhost:3000/users` to interact with the API from the client-side.

If you wish to remove the API:

- Delete the `api` folder.
- In `src/server.js` remove `import startAPI from "../api";` and `startAPI(app);`.
- Type `npm uninstall -S bluebird body-parser consign mongoose` to remove its dependencies.

## Configuration

- `envs/index.js` node and webpack environment variables.
- `public/assets` contains compiled, production build `.css`, `.map`, `.js`, and `.gz` files.
- `public/loadable-assets.json` contains development file chunks.
- `public/webpack-assets.json` contains production file chunks.
- `public/assets` contains compiled, production build `.css`, `.map`, `.js`, and `.gz` files.
- `src/client.js` client-side React setup.
- `src/server.js` express server.
- `src/styles/assets` media assets imports.
- `src/styles/extensions` partial shared extensions.
- `src/styles/globals` global asset imports (see notes in <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/blob/ssr/src/styles/globals/globals.scss#L1-L25">global.scss</a> for important information).
- `src/styles/variables` partial shared variables.
- `src/styles/styles.scss` indexed partial files for easier sharing (see notes in <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/blob/ssr/src/styles/styles.scss#L1-L39">styles.scss</a> for important information).
- `src/utils/client/axiosConfig.js` client-side axios setup (must point to the correct `HOST`/`PORT` for the running environment).
- `src/utils/client/renderApp.js` client-side React setup.
- `src/utils/client/tests.js` custom functions tests to leverage `mount`, `shallow`, and `checkPropsTypes` (see notes in <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/blob/ssr/src/utils/client/tests.js">tests.js</a> for utilization).
- `src/utils/client/middlewares.js` express middlewares.
- `src/utils/server/renderHtml.js` factory function to rewrite client-side DOM structure.
- `src/utils/server/serveProdAssets.js` serves compiled webpack production assets.
- `src/utils/server/serveReact.js` server side rendering setup to serve React to the client-side.
- `src/utils/server/setupDevServer.js` webpack setup for client-side compilation and hot module replacement.
- `src/utils/server/startServer.js` starts express server.
- `tools/jest/assetMock.js` jest mocks for media imports.
- `tools/jest/setup.js` jest test setup environment (see notes in <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/blob/ssr/tools/jest/setup.js#L17-L25">setup.js</a> for important information).
- `tools/webpack/entry.js` webpack entry variables.
- `tools/webpack/hooks.js` webpack hooks for handling SASS/CSS and media imports.
- `tools/webpack/paths.js` webpack config folder paths.
- `tools/webpack/plugins.js` webpack plugins required for development or production.
- `tools/webpack/rules.js` webpack rules testing.
- `tools/webpack/webpack.babel.js` webpack config for both development and production environments (must be `.babel.js` to accept ES6 `import/export`).

## Packages Incorporated

These packages are updated by an automated script that can be found <a href="https://github.com/mattcarlotta/UpdateBoilerplate">here</a>. To see the latest package versions, please check out the <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/blob/ssr/package.json#L283-L389">package.json</a>. If you run into any issues, please fill out an issue report <a href="https://github.com/mattcarlotta/Webpack-React-Boilerplate/issues">here</a>.

- [Webpack](https://github.com/webpack/webpack)
- [Babel](https://github.com/babel/babel)
- [Express](https://github.com/expressjs/express)
- [React](https://github.com/facebook/react)
- [React Loadable](https://github.com/jamiebuilds/react-loadable)
- [React Helmet](https://github.com/nfl/react-helmet)
- [React Router Dom](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom)
- [React Router Config](https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config)
- [React Hot Loader](https://github.com/gaearon/react-hot-loader)
- [Redux](https://github.com/reduxjs/redux)
- [Redux Thunk](https://github.com/reduxjs/redux-thunk)
- [Redux DevTools Extension](https://github.com/zalmoxisus/redux-devtools-extension)
- [Connected React Router](https://github.com/supasate/connected-react-router)
- [History](https://github.com/ReactTraining/history)
- [PropTypes](https://github.com/facebook/prop-types)
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
- [Morgan](https://github.com/expressjs/morgan)
- [Webpackbar](https://www.npmjs.com/package/webpackbar)
- [Webpack Dev Middleware](https://github.com/webpack/webpack-dev-middleware)
- [Webpack Hot Middleware](https://github.com/webpack-contrib/webpack-hot-middleware)

## Known Issues

- React Hot Loader throws a warning if you use `react-dom`: <a href="https://stackoverflow.com/a/54816859/7376526">react-🔥-dom patch is not detected. React 16.6+ features may not work.</a>
- ReactLoadablePlugin throws two deprecation warnings during compilation: <a href="https://github.com/jamiebuilds/react-loadable/pull/140">DeprecationWarning: Tapable.plugin is deprecated. Use new API on `.hooks` instead. DeprecationWarning: Chunk.forEachModule: Use for(const module of chunk.modulesIterable) instead.</a>
