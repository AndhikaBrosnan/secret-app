import axios from "axios";

export default axios.create({
  baseURL: "https://dev-secret-be.herokuapp.com/",
  // baseURL: "https://localhost:3001/",
});