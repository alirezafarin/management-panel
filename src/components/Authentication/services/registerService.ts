import { http } from '@/http';
import type { IRegisterBody } from './model';

export const registerService = async (body: IRegisterBody) => {
  const { data: response } = await http.post<number>('/users', body);
  return response;
};
