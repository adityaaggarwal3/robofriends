import React from "react";

const SearchBar = ({ searchChange, searchField }) => {
  console.log();
  return (
    <div className="pv1 mv1">
      <input
        className="ma1 h3 w-30 shadow-5 pa2 br4 ba bw2 f3 measure-wide bodoni"
        type="text"
        placeholder="Search"
        value={searchField}
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBar;
