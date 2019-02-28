module.exports = {
  development: {
    database: "mongodb://localhost/boilerplate-srr-dev-db",
    portal: "http://localhost:3000"
  },
  production: {
    database: "mongodb://localhost/boilerplate-srr-prod-db",
    portal: "http://localhost:8080"
  },
  staging: {
    database: "mongodb://localhost/boilerplate-ssr-staging-db",
    portal: "http://localhost:3000"
  },
  test: {
    database: "mongodb://localhost/boilerplate-ssr-test-db",
    portal: "http://localhost:3000"
  }
};
