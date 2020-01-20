import axios from "axios";
require("dotenv/config");

console.log("API");
console.log(process.env);

const api = axios.create({
  baseURL: "http://localhost:3333"
});

export default api;
