/* 
  List of required methods to interact with the api
  - it uses the apiCall from api.ts and create a secific custom request functions 
  - each method has its own use Fetching, Adding(POST), Deleting(DELETE), updating(PATCH) and A query Function
  - they return the response they got from the api.ts to the required place so we can use these to handle the requests in our required place

*/

import apiCall from './api';
import type { musicCard } from '../types/musictype';

export const fetchMusic = async () => {
  const fetchURL = 'musics';
  console.log('url:', fetchURL);
  const response = await apiCall({ url: fetchURL });
  return response;
};

export const addMusic = async (data: musicCard) => {
  const fetchURL = `musics`;
  const response = await apiCall({
    url: fetchURL,
    method: 'POST',
    data: data,
  });
  return response;
};

export const deleteMusic = async (id: string) => {
  const fetchURL = `musics/${id}`;
  const response = await apiCall({
    url: fetchURL,
    method: 'DELETE',
  });
  return response;
};

export const updateMusic = async (data: musicCard) => {
  const fetchURL = `musics/${data.id}`;
  const response = await apiCall({
    url: fetchURL,
    method: 'PATCH',
    data: data,
  });

  return response;
};

export const searchMusic = async (serach: string) => {
  const fetchURL = `musics?q=${serach}`;
  const response = await apiCall({
    url: fetchURL,
    method: 'GET',
  });

  return response;
};
