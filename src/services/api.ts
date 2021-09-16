import axios from "axios";

const api = axios.create({
  baseURL: "https://capstonefakeapi.herokuapp.com",
});

export default api;
