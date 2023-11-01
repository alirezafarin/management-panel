import axios, { AxiosError, type AxiosRequestConfig, type AxiosResponse } from 'axios';
import type { IResponse } from '../model';

const axiosInstance = axios.create({ baseURL: import.meta.env.VITE_BASE_URL, timeout: 10000 });

axiosInstance.interceptors.request.use(
  (config) => {
    // config.headers["token"] = getToken();
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response: AxiosResponse) {
    return response;
  },
  function (error: AxiosError) {
    // ToastErrorMessage(error?.message ?? dictionary.errors.general)
    return Promise.reject();
  }
);

export const http = {
  post: <T = any[]>(url: string, data?: any, config?: any) =>
    axiosInstance.post<IResponse<T>>(url, data, config),
  get: <T = any[], D = any>(url: string, config?: AxiosRequestConfig<D>) =>
    axiosInstance.get<IResponse<T>>(url, config)
};
