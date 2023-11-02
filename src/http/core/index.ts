import { getToken } from '@/helper';
import axios, { AxiosError, type AxiosRequestConfig, type AxiosResponse } from 'axios';
import type { IErrors, ResponseType } from '../model';

const axiosInstance = axios.create({ baseURL: import.meta.env.VITE_BASE_URL, timeout: 10000 });

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) config.headers.Authorization = `Token ${getToken()}`;
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
  function (error: AxiosError<IErrors>) {
    // const toast = useToast();
    // toast.error('error from axios file');
    return Promise.reject(error.response?.data.errors);
  }
);

export const http = {
  post: <T = any[]>(url: string, data?: any, config?: any) =>
    axiosInstance.post<ResponseType<T>>(url, data, config),
  get: <T = any[], D = any>(url: string, config?: AxiosRequestConfig<D>) =>
    axiosInstance.get<ResponseType<T>>(url, config),
  put: <T = any[]>(url: string, data?: any, config?: any) =>
    axiosInstance.put<ResponseType<T>>(url, data, config)
};
