import React from "react";
import Button from 'react-bootstrap/Button'

function Search({handleSearch}) {

  return (
    <div className="titletext left" variant="light">
      {/* <div>
        <input type="search" id="form1" class="form-control"/>
        <label class='form-label'>Search</label>
      </div>
      <Button type="button" className="btn btn-primary">
        <i class="fas fa-search"></i>
      </Button> */}
      <label variant="light" className="titletext left" htmlFor="search">Search Memes:  </label>
      <input
        variant="light"
        className="titletext" 
        type="text"
        id="search"
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
