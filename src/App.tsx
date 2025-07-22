import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Filter from '../components/filter';
import Section from '../components/section';
import { musicCard } from '../types/musictype';
import { deleteMusic, fetchMusic, searchMusic } from '../base-api/methods';
import AddSongModal from '../components/addSongModal';
import EditSongModal from '../components/editSongModal';

const App = () => {
  const [musics, setMusics] = useState<musicCard[]>([]);
  const [deleteId, setDeleteid] = useState<string>('');
  const [addmodalOpen, SetaddModalOpen] = useState<boolean>(false);
  const [refetch, setrefetch] = useState<boolean>(false);
  const triggerFetch = () => {
    setrefetch((prev) => !prev);
  };
  const [editableSong, setEditableSong] = useState<musicCard>({} as musicCard);
  const [editmodalOpen, SeteditModalOpen] = useState<boolean>(false);
  const [serachQuery, setsearchQuery] = useState<string>('');

  // fetch from backend or search
  useEffect(() => {
    const getMusic = async () => {
      if (serachQuery.trim() !== '') {
        const data = await searchMusic(serachQuery);
        setMusics(data);
      } else {
        const data = await fetchMusic();
        setMusics(data);
      }
    };
    getMusic();
  }, [serachQuery, deleteId, refetch]);

  console.log(`musics:`, musics);

  const setDeletion = (id: number) => {
    setDeleteid(id.toString());
    handleDelete(id.toString());
  };
  const setEditing = (data: musicCard) => {
    setEditableSong(data);
    openEditModal();
  };
  const handleDelete = async (deleteId: string) => {
    const res = await deleteMusic(deleteId);
    return res;
  };
  const openModal = () => {
    SetaddModalOpen(!addmodalOpen);
  };
  const openEditModal = () => {
    SeteditModalOpen((prev) => !prev);
  };

  // console.log('editablesong:', editableSong);
  // for now use prop drilling and you will change it later to Redux

  console.log('searchQUery;', serachQuery);
  return (
    <>
      <Header openModal={openModal} setsearchQuery={setsearchQuery} />
      <Filter length={musics.length} />
      <Section
        musics={musics}
        setDeletion={setDeletion}
        setEditing={setEditing}
      />
      {addmodalOpen && (
        <AddSongModal openModal={openModal} triggerFetch={triggerFetch} />
      )}
      {editmodalOpen && (
        <EditSongModal
          openEditModal={openEditModal}
          triggerFetch={triggerFetch}
          data={editableSong}
        />
      )}
    </>
  );
};

export default App;
