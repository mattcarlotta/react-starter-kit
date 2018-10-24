const express = require('express');

const app = express();
const consign = require('consign');

consign({ locale: 'en-us', verbose: false })
  .include('libs/middlewares.js')
  .then('database')
  .then('shared')
  // .then('models')
  // .then("services")
  .then('controllers')
  .then('routes')
  .then('libs/server.js')
  .into(app);
