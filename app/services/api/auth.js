import axiosInstance from "@/app/axios";
import axios from "axios";
const AuthAPI = {
    login: async (email, password) => {
      return await axiosInstance.post("/auth/signin", {
        email,
        password,
      });
    },
    signup: async(payload) => {
      return await axiosInstance.post("/auth/signup/", payload)
    }
}

export default AuthAPI