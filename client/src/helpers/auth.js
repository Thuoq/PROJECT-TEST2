const TOKEN_KEY = 'login';

export const isLogin = () => {
  if (getToken()) {
    return true;
  }
  return false;
};

export const setToken = (token) =>
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token));

export const getToken = () => JSON.parse(localStorage.getItem(TOKEN_KEY));

export const removeToken = () => localStorage.removeItem(TOKEN_KEY);
