import API from "../utils/client/axiosConfig";

export const fetchUsers = () => API.get("users");

export const createUser = () => API.post("user/create");
