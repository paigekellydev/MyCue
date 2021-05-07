import './App.css';
import ColorWaves from './components/ColorWaves'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <header>
        <h2 id="pre-h1">THIS IS</h2>
        <h1>MyCue</h1>
        <NavBar />
      </header>
      <main>
        <ColorWaves />
      </main>
    </div>
  );
}

export default App;
