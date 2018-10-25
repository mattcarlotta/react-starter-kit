module.exports = {
  development: {
    database: 'mongodb://localhost/boilerplate-dev-db',
    port: 5000,
    portal: 'http://localhost:3000',
  },
  production: {
    database: 'mongodb://localhost/boilerplate-prod-db',
    port: 5000,
    portal: 'http://example.com',
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
