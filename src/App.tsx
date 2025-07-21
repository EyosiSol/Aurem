import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Filter from '../components/filter';
import Section from '../components/section';
import { musicCard } from '../types/musictype';
import { deleteMusic, fetchMusic } from '../base-api/methods';
// import AddSongModal from '../components/addSongModal';

const App = () => {
  const [musics, setMusics] = useState<musicCard[]>([]);
  const [deleteId, setDeleteid] = useState<string>('');
  useEffect(() => {
    const getMusic = async () => {
      const data = await fetchMusic();
      setMusics(data);
    };
    getMusic();
  }, [deleteId]);

  console.log(`musics:`, musics);

  const setDeletion = (id: number) => {
    setDeleteid(id.toString());
    handleDelete(id.toString());
  };
  const handleDelete = async (deleteId: string) => {
    const res = await deleteMusic(deleteId);
    return res;
  };

  // for now use prop drilling and you will change it later to Redux

  return (
    <div>
      <Header />
      <Filter />
      <Section musics={musics} setDeletion={setDeletion} />
      {/* <AddSongModal /> */}
    </div>
  );
};

export default App;
