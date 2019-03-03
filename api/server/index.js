//= ===========================================================//
/* CREATE EXPRESS SERVER */
//= ===========================================================//
module.exports = app => {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT);
};
