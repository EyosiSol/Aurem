import apiCall from './api';

import type { signUp, login } from '../types/userType';

export const Sign = async (data: signUp) => {
  const url = 'signup';
  console.log('url:', url);

  const response = await apiCall({
    url: url,
    method: 'POST',
    data: data,
  });
  return response;
};

export const log = async (data: login) => {
  const url = 'login';
  console.log('url:', url);

  const response = await apiCall({
    url: url,
    method: 'POST',
    data: data,
  });

  return response;
};
