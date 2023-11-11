import { deleteToken } from '@/helper';

export const logout = () => {
  deleteToken();
  window.location.replace('/login');
};
