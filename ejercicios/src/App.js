import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Estuve editando <code>src/App.js</code> y algunas cosas mas :).
        </p>
        <a
          className="App-link"
          href="https://un-poco-de-mi.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Los ejercicios anteriores
        </a>
      </header>
    </div>
  );
}

export default App;
