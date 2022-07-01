import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h5>USESTATE COUNTER</h5>
     <h1> {counter}  </h1>
     <button onClick={ () => setCounter( counter+ 1)}> Increase</button>
     <button onClick={ () => setCounter( n => n - 1)}> Decrease</button>
    </div>
  );
}

export default App;
