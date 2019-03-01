module.exports = app => {
  const {
    createUser,
    deleteUser,
    getUsers,
    seedDatabase,
    updateUser
  } = app.controllers.user;

  app.get("/api/users", getUsers);
  app.post("/api/users/create", createUser);
  app.put("/api/users/update/:id", updateUser);
  app.delete("/api/users/delete/:id", deleteUser);
  app.post("/api/users/seed", seedDatabase);
};
