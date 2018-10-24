module.exports = {
  development: {
    database: 'mongodb://localhost/boilerplate-dev-db',
    dbport: 5432,
    host: 'localhost',
    port: 5000,
    portal: 'http://localhost:3000',
  },
  production: {
    database: 'mongodb://localhost/boilerplate-prod-db',
    dbport: 5432,
    host: 'localhost',
    port: 5000,
    portal: 'http://localhost:3000',
  },
  staging: {
    database: 'mongodb://localhost/boilerplate-staging-db',
    dbport: 5432,
    host: 'localhost',
    port: 5000,
    portal: 'http://localhost:3000',
  },
  test: {
    database: 'mongodb://localhost/boilerplate-test-db',
    dbport: 5432,
    host: 'localhost',
    port: 4000,
    portal: 'http://localhost:3000',
  },
};
