import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';

type Prop = {
  openModal: () => void;
};

const Header = ({ openModal,  }: Prop) => {
  return (
    <div className="header">
      <h1>Aurem</h1>
      <div className="search">
        <input
          type="text"
          name="serach"
          id="search"
          title="search"
          placeholder="Search for your song"
        />
        <IoSearch className="IoSearch" />
      </div>
      <button type="submit" onClick={() => openModal()}>
        <IoMdAdd />
        Add Song
      </button>
    </div>
  );
};

export default Header;
