import React from 'react'
import { useEffect, useState } from 'react';
import GifCards from './GifCards';


function GIFLibrary() {
  const [gifs, setGifs] = useState([])
  
  useEffect(() => {
    fetch('  https://api.giphy.com/v1/gifs/search?api_key=lptQ8k82eLDdRffSMyrt89vU8HTQCSrR&q=meme&limit=100&offset=0&rating=g&lang=en')
      .then(res => res.json())
      .then(GIFdata => setGifs(GIFdata.data))
      .catch(err => console.log(err))
  }, [])

  
  return (
    <div className="cards">
      {gifs.map((gif) => <GifCards key={gif.id} gif={gif}/>)}
    </div>
  );
}

export default GIFLibrary