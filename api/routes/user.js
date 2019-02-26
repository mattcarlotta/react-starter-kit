module.exports = app => {
  const { createUser, getUsers } = app.controllers.user;

  app.get("/api/users", getUsers);
  // app.get('/api/user/:id', getUser);
  app.post("/api/create-user", createUser);
  // app.put('/api/update-user', updateUser);
  // app.delete('/api/delete/:id', deleteUser)
};
