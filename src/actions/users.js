import API from "../utils/client/axiosConfig";

export const createUser = ({ formProps }) =>
  API.post("users/create", { ...formProps });

export const deleteUser = id => API.delete(`users/delete/${id}`);

export const fetchUsers = () => API.get("users");

export const updateUser = ({ formProps, id }) =>
  API.put(`users/update/${id}`, { ...formProps });

export const seedDB = () => API.post("users/seed");
