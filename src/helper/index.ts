import { TOKEN_STORAGE } from '@/constants';

export const getToken = () => {
  return localStorage.getItem(TOKEN_STORAGE);
};

export const setToken = (token: string) => {
  return localStorage.setItem(TOKEN_STORAGE, token);
};

export const deleteToken = () => {
  return localStorage.removeItem(TOKEN_STORAGE);
};

export const isAuthenticated = () => !!getToken();
