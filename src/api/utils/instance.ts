import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://3.39.25.156:8080/api/";

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
};

export const baseApi = axios.create(axiosConfig);
