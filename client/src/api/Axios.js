import axios from "axios";
axios.defaults.withCredentials = true;

export default axios.create({
  baseURL: "http://localhost:3000/",
});

export const axiosAuth = axios.create({
  baseURL: "http://localhost:3000/",
  withCredentials: true,
});
