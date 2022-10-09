import "./App.css";
import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const [onoffDisabled, setOnoffDisabled] = useState(false);
  return (
    <div className="App">
      <h3 data-testid="counter">{counter}</h3>
      <br />
      <button
        data-testid="plus"
        disabled={onoffDisabled}
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        +
      </button>
      <button
        data-testid="minus"
        disabled={onoffDisabled}
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        -
      </button>
      <br />
      <button
        style={{ backgroundColor: "blue" }}
        data-testid="onoff"
        onClick={() => {
          setOnoffDisabled(!onoffDisabled);
        }}
      >
        on/off
      </button>
    </div>
  );
}

export default App;
