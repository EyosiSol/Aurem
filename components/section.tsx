import React from 'react';
import MusicCard from './musicCard';
import '../src/section.css';
import { musics } from '../data/musics';
import { musicCard } from '../types/musictype';
const Section = () => {
  return (
    <div className="section">
      {musics.map((music: musicCard) => (
        <MusicCard
          id={music.id}
          title={music.title}
          artist={music.artist}
          album={music.album}
          releaseDate={music.releaseDate}
          genre={music.genre}
        />
      ))}
    </div>
  );
};

export default Section;
