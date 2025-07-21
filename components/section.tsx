import React from 'react';
import MusicCard from './musicCard';
import '../src/section.css';
// import { musics } from '../data/musics';
import { musicCard } from '../types/musictype';

type userProps = {
  musics: musicCard[];
  setDeletion: (id: number) => void;
};

const Section: React.FC<userProps> = ({ musics, setDeletion }) => {
  return (
    <div className="section">
      {musics.map((music: musicCard) => (
        <MusicCard music={music} setDeletion={setDeletion} />
      ))}
    </div>
  );
};

export default Section;
