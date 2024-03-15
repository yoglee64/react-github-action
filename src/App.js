import './App.css';
import { useState } from 'react';

function App() {
  const [count, setcount] = useState(0);
  const [disabled, setdisabled] = useState(false)
  return (
    <div className='App'>
      <header className='App-header'>
        <h3 data-testid="counter">{count}</h3>
        <div>
          <button
            data-testid="minus-button"
            disabled={disabled}
            onClick={() => setcount((prev) => prev - 1)}
          >
            -
          </button>
          <button
            data-testid="plus-button"
            disabled={disabled}
            onClick={() => setcount((prev) => prev + 1)}
          >
            +
          </button>
        </div>
        <div>
          <button
            style={{ backgroundColor: "blue" }}
            data-testid= "on/off-button"
            onClick={() => setdisabled((prev) => !prev)}
          >
            on/off
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
