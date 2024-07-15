import logo from './logo.svg';
import './App.css';
import Welcome from "./components/Welcome.js"
import Semaforohooks from './components/Hook_UseEffect.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Welcome message="Hola props" name="Brian"/>
        <Semaforohooks/>
      </header>
    </div>
  );
}

export default App;