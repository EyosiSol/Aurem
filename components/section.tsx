import React from 'react';
import MusicCard from './musicCard';
import '../src/section.css';
const Section = () => {
  return (
    <div className="section">
      <MusicCard />
      <MusicCard />
      <MusicCard />
      <MusicCard />
      <MusicCard />
    </div>
  );
};

export default Section;
