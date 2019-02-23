const { basename } = require("path");

//= =============================================================================//
// JEST MEDIA MOCKS                                                               /
//= =============================================================================//

module.exports = {
  process(src, filename) {
    return `module.exports = ${JSON.stringify(basename(filename))};`;
  }
};
