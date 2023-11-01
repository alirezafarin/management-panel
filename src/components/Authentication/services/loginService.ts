import { http } from '@/http';
import type { ILoginBody, IRegisterResponse } from './model';

export const loginService = async (body: ILoginBody) => {
  const { data: response } = await http.post<IRegisterResponse>('/users/login', body);
  return response;
};
