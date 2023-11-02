import { http } from '@/http';
import type { IRegisterResponse } from './model';

export const currentUserService = async () => {
  const { data: response } = await http.get<IRegisterResponse>('/user');
  return response;
};
