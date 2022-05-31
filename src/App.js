import { useEffect, useState } from 'react';
import './App.css';
import Home from './Home';
import MemeLibrary from './MemeLibrary';
import CreateAMeme from './CreateAMeme';

function App() {
  const [gifs, setGifs] = useState([])
  
  useEffect(() => {
    fetch('https://api.giphy.com/v1/gifs/search?api_key=lptQ8k82eLDdRffSMyrt89vU8HTQCSrR&q=meme&limit=25&offset=0&rating=r&lang=en')
      .then(res => res.json())
      .then(GIFdata => setGifs(GIFdata.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
          <CreateAMeme />
          <Home />
          <ul className="cards">
            {gifs.map((gif) => {
            return <MemeLibrary key={gif.id} gif={gif}/>
            })}
          </ul>
      </header>
    </div>
  );
}

export default App;
