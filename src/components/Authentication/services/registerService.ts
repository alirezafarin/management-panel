import { http } from '@/http';
import type { IRegisterBody, IRegisterResponse } from './model';

export const registerService = async (body: IRegisterBody) => {
  const { data: response } = await http.post<IRegisterResponse>('/users', body);
  return response;
};
