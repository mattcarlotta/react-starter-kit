import { createUser } from "../controllers/user";

export default app => {
  // app.get('/api/user/:id', getUser);
  app.post("create-user", createUser);
  // app.put('/api/update-user', updateUser);
  // app.delete('/api/delete/:id', deleteUser)
};
