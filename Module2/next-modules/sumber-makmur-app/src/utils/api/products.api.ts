import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: 'https://nubiledegree-us.backendless.app/api/data'
})