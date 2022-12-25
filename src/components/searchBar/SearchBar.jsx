import React from "react";

const SearchBar = ({ searchChange, searchField }) => {
  console.log();
  return (
    <div className="pv4 mv3">
      <input
        className="ma1 h3 w-30 shadow-3 f3 measure-wide bodoni"
        type="text"
        placeholder="Search"
        value={searchField}
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBar;
