import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

function App() {
  const title="Movie List";
  const likes= 50;
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Home />
      </div>
    </div>
  );
}

export default App;
