import React from 'react';
import MusicCard from './musicCard';
import '../src/section.css';
// import { musics } from '../data/musics';
import { musicCard } from '../types/musictype';

type userProps = {
  musics: musicCard[];
  setDeletion: (id: number) => void;
  setEditing: (data: musicCard) => void;
};

const Section: React.FC<userProps> = ({ musics, setDeletion, setEditing }) => {
  return (
    <>
      {musics.length > 0 ? (
        <div className="section">
          {musics.map((music: musicCard) => (
            <MusicCard
              music={music}
              setDeletion={setDeletion}
              setEditing={setEditing}
            />
          ))}
        </div>
      ) : (
        <div className="noresult"> No Results Found</div>
      )}{' '}
    </>
  );
};

export default Section;
