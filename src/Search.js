import React from "react";

function Search({handleSearch}) {

  return (
    <div className="titletext">
      <label htmlFor="search">Search Memes:  </label>
      <input
        type="text"
        id="search"
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
