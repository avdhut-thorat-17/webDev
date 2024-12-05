import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://webdev-uoaz.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;