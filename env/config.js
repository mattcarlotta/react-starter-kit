module.exports = {
  development: {
    database: 'mongodb://localhost/boilerplate-dev-db',
    host: 'localhost',
    port: 5000,
    portal: 'http://localhost:3000',
  },
  production: {
    database: 'mongodb://localhost/boilerplate-prod-db',
    host: 'localhost',
    port: 5000,
    portal: 'http://localhost:3000',
  },
  staging: {
    database: 'mongodb://localhost/boilerplate-staging-db',
    port: 5000,
    portal: 'http://localhost:3000',
  },
  test: {
    database: 'mongodb://localhost/boilerplate-test-db',
    port: 4000,
    portal: 'http://localhost:3000',
  },
};
