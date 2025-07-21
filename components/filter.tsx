import React from 'react';

type prop = {
  length: number;
};

const Filter = ({ length }: prop) => {
  return (
    <div className="filter">
      <div className="dropdownfilter">Your Personal Music Jacket</div>
      <div className="amount">{length} songs added</div>
    </div>
  );
};

export default Filter;
