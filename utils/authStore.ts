import { userType } from '../types/userType';
import Cookies from 'js-cookie';

// utils/auth.js
export const saveAuth = (token: string, user: userType) => {
  Cookies.set('token', token, { expires: 7, path: '/' }); // expires in 7 days
  Cookies.set('user', JSON.stringify(user), { expires: 7, path: '/' });
};

export const getAuth = () => {
  const token = Cookies.get('token') || null;
  const user = Cookies.get('user') ? JSON.parse(Cookies.get('user')!) : null;
  return { token, user };
};

export const clearAuth = () => {
  Cookies.remove('token');
  Cookies.remove('user');
};
