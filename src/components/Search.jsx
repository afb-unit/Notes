import React from "react";

const Search = ({ handlesearchnote }) => {
  return (
    <div className="search">
      <i className="fa-solid fa-magnifying-glass" id="search-icon"></i>
      <input
        onChange={(event) => handlesearchnote(event.target.value)}
        type="text"
        placeholder="  type to search . . ."
      />
    </div>
  );
};

export default Search;
