import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import CreateAMeme from './CreateAMeme';
import Home from './Home';
import MemeLibrary from './MemeLibrary';


function App() {
  const [gifs, setGifs] = useState([])
  
  useEffect(() => {
    fetch('https://api.giphy.com/v1/gifs/search?api_key=lptQ8k82eLDdRffSMyrt89vU8HTQCSrR&q=meme&limit=25&offset=0&rating=r&lang=en')
      .then(res => res.json())
      .then(GIFdata => setGifs(GIFdata.data))
  }, [])

  // const displayGIF = (data) => data.map((data) => console.log(data.url))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <CreateAMeme />
          <Home />
          <ul className="cards">
            {gifs.map((gif) => {
            return <MemeLibrary key={gif.id} gif={gif}/>
            })}
          </ul>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
