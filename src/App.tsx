import React, { useEffect, useState } from 'react';
import Header from '../components/header';
import Filter from '../components/filter';
import Section from '../components/section';
import { musicCard } from '../types/musictype';
import { deleteMusic, fetchMusic, searchMusic } from '../base-api/methods';
import AddSongModal from '../components/addSongModal';
import EditSongModal from '../components/editSongModal';

const App = () => {
  // datas that are handled by usestate
  const [musics, setMusics] = useState<musicCard[]>([]); //the fetched musics are setted to this array and will be displayed in search also
  const [deleteId, setDeleteid] = useState<string>(''); // when a delete is clicked the data will be setted here and DELETE method from api will be handled
  const [addmodalOpen, SetaddModalOpen] = useState<boolean>(false); //a flag to control the opening and closing of the "add song" form modal
  const [refetch, setrefetch] = useState<boolean>(false); // a flag that is used to control refetching of the data
  const [editableSong, setEditableSong] = useState<musicCard>({} as musicCard); //a data that will be setted when the edit button is clicked and it gives it to the form and will be sent to the backend to be eddited
  const [editmodalOpen, SeteditModalOpen] = useState<boolean>(false); //a flag to control the opening and closing of the "edit song" form modal
  const [serachQuery, setsearchQuery] = useState<string>(''); //a state to handle the searching of music based on any type of queries

  //handles the trigger fetch to change from false to true and viceversa on each click
  const triggerFetch = () => {
    setrefetch((prev) => !prev);
  };

  // GET the Music list from backend or if there is a search query it will trigger searchMusic Method else it will trigger the GetmMusic
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

  //handles the setting of the deletedId
  const setDeletion = (id: number) => {
    setDeleteid(id.toString());
    handleDelete(id.toString());
  };
  //handles the setting of the editablesong
  const setEditing = (data: musicCard) => {
    setEditableSong(data);
    openEditModal();
  };
  //handles deletion of a song by triggering the deletMusic that has a method of "DELETE" and removes from the db.json
  const handleDelete = async (deleteId: string) => {
    const res = await deleteMusic(deleteId);
    return res;
  };

  //handles the setting of the modals
  const openModal = () => {
    SetaddModalOpen(!addmodalOpen);
  };
  const openEditModal = () => {
    SeteditModalOpen((prev) => !prev);
  };

  // for now use prop drilling and you will change it later to Redux

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
