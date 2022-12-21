import axios from "axios";

export const backendClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
});
