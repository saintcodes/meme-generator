import { useEffect, useState } from 'react';
import './App.css';
import Home from './Home';
import MemeLibrary from './MemeLibrary';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './Navbar';

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
    <Router>
      <div className="App">
        <Navbar />
        <header className="App-header">
          
          <p>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route  exact path="/memelib">
                <MemeLibrary />
              </Route>
              <Route exact path="/create">
                <CreateAMeme />
              </Route>
            </Switch>
            <ul className="cards">
              <li>
              {gifs.map((gif) => {
              return <MemeLibrary key={gif.id} gif={gif}/>
              })}
              </li>
            </ul>
          </p>
        
        </header>
      </div>
    </Router>
  );
}

export default App;
