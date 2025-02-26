import axios from "axios";
const axiosInstance = axios.create({
  baseURL:""
});

axiosInstance.interceptors.request.use(
  (config) => {
    if (process.env.NODE_ENV === "development") {
      console.log(`Request sent to ${config.url}`);
    }

    if (typeof window !== "undefined") {
      const token = localStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error),
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      error?.response?.data?.statusCode === 401 &&
      error?.response?.data?.data?.message === "Access denied"
    ) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("token");
      }
    }
    return Promise.reject(error);
  },
);

export default axiosInstance;
