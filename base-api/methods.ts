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
