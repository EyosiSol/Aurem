import React from 'react';
import { IoFilterSharp } from 'react-icons/io5';
import { FaChevronDown } from 'react-icons/fa6';
const Filter = () => {
  return (
    <div className="filter">
      <div className="dropdownfilter">
        <IoFilterSharp className="filterIcon" />
        <div className="dropdown">
          <button>
            Menu
            <FaChevronDown />
          </button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
      <div className="amount">200 songs added</div>
    </div>
  );
};

export default Filter;
