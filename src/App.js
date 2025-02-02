import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

function App() {
  const title="Movie List";
  return (
    <Router>
      <div className="App">
        <Navbar />
          <div className="container">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
          
          </div>
      </div>
    </Router>
  );
}

export default App;
