import env from "react-dotenv";
import axios from "axios";

export const elearningApiCall = axios.create({
  baseURL: env.BASE_URL,
});
