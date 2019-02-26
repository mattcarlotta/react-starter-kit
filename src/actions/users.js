/* eslint-disable */
import API from "../utils/client/axiosConfig";

export const fetchUsers = () =>
  API.get("users")
    .then(res => res.data)
    .catch(error => error);
/* eslint-enable */
