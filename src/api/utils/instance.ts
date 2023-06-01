import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://52.78.94.244:8082/api/";

const axiosConfig: AxiosRequestConfig = {
  baseURL: BASE_URL,
};

export const baseApi = axios.create(axiosConfig);
