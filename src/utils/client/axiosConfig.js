import axios from "axios";

const env = process.env.NODE_ENV;

export const app = axios.create({
  baseURL:
    env === "production"
      ? "http://example.com/api/"
      : "http://localhost:5000/api/"
});

export default app;
