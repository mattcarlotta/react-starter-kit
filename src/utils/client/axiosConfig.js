import axios from "axios";
import { inDevelopment } from "../../../envs";

export const app = axios.create({
  baseURL: inDevelopment
    ? "http://localhost:3000/api/"
    : "http://localhost:8080/api/"
});

app.interceptors.response.use(
  response => response,
  error => Promise.reject(error.response.data.err)
);

export default app;
