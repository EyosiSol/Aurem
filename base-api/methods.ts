/* 
  List of required methods to interact with the api
  - it uses the apiCall from api.ts and create a secific custom request functions 
  - each method has its own use Fetching, Adding(POST), Deleting(DELETE), updating(PATCH) and A query Function
  - they return the response they got from the api.ts to the required place so we can use these to handle the requests in our required place

*/

import apiCall from './api';
import type { musicCard } from '../types/musictype';

import { getAuth } from '../utils/authStore';

const { token: rawToken, user } = getAuth();
const token = rawToken ?? undefined;

export const fetchMusic = async () => {
  const fetchURL = `${user.id}/musics`;
  console.log('url:', fetchURL);
  const response = await apiCall({ url: fetchURL, token: token });
  return response;
};

export const addMusic = async (data: musicCard) => {
  const fetchURL = `${user.id}/musics`;
  const response = await apiCall({
    url: fetchURL,
    method: 'POST',
    data: data,
    token: token,
  });
  return response;
};

export const deleteMusic = async (_id: string) => {
  const fetchURL = `${user.id}/musics/${_id}`;
  const response = await apiCall({
    url: fetchURL,
    method: 'DELETE',
    token: token,
  });
  return response;
};

export const updateMusic = async (data: musicCard) => {
  console.log('data:', data);
  const fetchURL = `${user.id}/musics/${data._id}`;
  console.log('fetchURl:', fetchURL);
  const response = await apiCall({
    url: fetchURL,
    method: 'PATCH',
    data: data,
    token: token,
  });

  return response;
};

export const searchMusic = async (serach: string) => {
  const fetchURL = `${user.id}/musics?q=${serach}`;
  const response = await apiCall({
    url: fetchURL,
    method: 'GET',
    token: token,
  });

  return response;
};
