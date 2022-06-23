import env from "react-dotenv";
import axios from "axios";

export const elearningApiCall = axios.create({
  baseURL: "http://localhost:3000/",
});
