import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
const Header = () => {
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
      <button type="submit">
        <IoMdAdd />
        Add Song
      </button>
    </div>
  );
};

export default Header;
