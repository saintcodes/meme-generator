import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Home';
import MemeLibrary from './MemeLibrary';
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
              <Route exact path="/memelib">
                <MemeLibrary />
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
