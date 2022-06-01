import React, { useEffect, useState } from 'react'
import GifCards from './GifCards';
import Search from './Search';

function GIFLibrary() {
  const [gifs, setGifs] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    fetch('http://localhost:3004/privatememes')
      .then(res => res.json())
      .then(data => setGifs(data))
  }, [])

  const searchMemes = gifs.filter((gif) => gif.name.toLowerCase().includes(search.toLowerCase()))

  function handleSearch (e) {
    setSearch(e.target.value)
  }
  
  return (
    <div>
      <Search handleSearch={handleSearch}/>
      <div className="cards">
        <br></br>
        {searchMemes.reverse().map((gif) => <GifCards key={gif.id} gif={gif}/>)}
      </div>
    </div>
  );
}

export default GIFLibrary