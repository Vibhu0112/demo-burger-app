import logo from './logo.svg';
import './App.css';
import Burger from './components/burger';
import {browserRouter as Router,
 Route, Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Burger/>
        
    </div>
  );
}

export default App;
{/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}