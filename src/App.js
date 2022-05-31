import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home';
import GIFLibrary from './GIFLibrary';
import CreateAMeme from './CreateAMeme';
import Navigate from './Navigate';


function App() {

  return (
    <Router>
      <div className="App">
        <Navigate />
        <header className="App-header">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/giflib">
                <GIFLibrary />
              </Route>
              <Route exact path="/create">
                <CreateAMeme />
              </Route>
            </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
