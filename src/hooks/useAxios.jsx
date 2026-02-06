import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://pawmart-server-side-red.vercel.app",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
