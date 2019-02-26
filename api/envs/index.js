module.exports = {
  development: {
    database: "mongodb://localhost/boilerplate-srr-dev-db",
    port: 5000,
    portal: "http://localhost:3000"
  },
  production: {
    database: "mongodb://localhost/boilerplate-srr-prod-db",
    port: 5000,
    portal: "http://localhost:8080"
  },
  staging: {
    database: "mongodb://localhost/boilerplate-ssr-staging-db",
    port: 5000,
    portal: "http://localhost:3000"
  },
  test: {
    database: "mongodb://localhost/boilerplate-ssr-test-db",
    port: 4000,
    portal: "http://localhost:3000"
  }
};
