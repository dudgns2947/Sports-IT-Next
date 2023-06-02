import axios, { AxiosRequestConfig } from "axios";

require("dotenv").config();

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
};

export const baseApi = axios.create(axiosConfig);
