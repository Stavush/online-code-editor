import axios from "axios";
//require("dotenv").config();

export const backendClient = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_BASE_URL,
  //baseURL: "https://online-code-editor-y1hy.onrender.com/api",
});
