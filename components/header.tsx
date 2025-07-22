import React, { useCallback } from 'react';
import { IoMdAdd } from 'react-icons/io';
import { IoSearch } from 'react-icons/io5';
import { debounce } from '../utils/debounce';

type Prop = {
  openModal: () => void;
  setsearchQuery: React.Dispatch<React.SetStateAction<string>>;
};

const Header = ({ openModal, setsearchQuery }: Prop) => {
  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setsearchQuery(value);
    }, 300), // 300ms delay
    []
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(e.target.value);
  };
  return (
    <div className="header">
      <div className="header-2">
        <h1>Aurem</h1>
        <div className="search">
          <input
            type="text"
            name="serach"
            title="search"
            placeholder="Search for your song"
            onChange={handleInputChange}
          />
          <IoSearch className="IoSearch" />
        </div>
        <button type="submit" onClick={() => openModal()}>
          <IoMdAdd />
          Add Song
        </button>
      </div>
      <div className="search2">
        <input
          type="text"
          name="serach"
          title="search"
          placeholder="Search for your song"
          onChange={handleInputChange}
        />
        <IoSearch className="IoSearch" />
      </div>
    </div>
  );
};

export default Header;
