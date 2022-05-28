import logo from './logo.svg';
import './App.css';
import CreateAMeme from './CreateAMeme';
import Home from './Home';
import MemeLibrary from './MemeLibrary';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <CreateAMeme />
          <Home />
          <MemeLibrary />
    
          Edit <code>src/App.js</code> and save to reload.
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
