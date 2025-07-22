
/*
  the first idea of this component was to have a filtering method so that we can filter our list of data based on Genres with Dropdown 
  but due to lack of time couldn't complete it hence i have changed it to show the data amount and a motto 
*/



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
