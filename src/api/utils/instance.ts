import axios, { AxiosRequestConfig } from "axios";
import Swal from "sweetalert2";

require("dotenv").config();

const axiosConfig: AxiosRequestConfig = {
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
};

const baseApi = axios.create(axiosConfig);

// 응답 인터셉터 추가 : 응답 데이터가 있는 작업 수행, 응답 오류가 있는 작업 수행을 할 수 있는 2개의 콜백 함수를 받는다.
baseApi.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return new Promise((resolve, reject) => {
      // Swal.fire({
      //   text: "오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
      //   showConfirmButton: true,
      // }).then(() => {
      //   console.log(error);
      // });
      console.log(error);
    });
    // Swal.fire({
    //   text: "오류가 발생했습니다. 잠시 후 다시 시도해주세요.",
    //   showConfirmButton: false,
    //   timer: 1500,
    // });
    // console.log(error);
    // return Promise.reject(error);
  }
);

export default baseApi;
