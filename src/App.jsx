import { useState } from "react";
import "./App.css";

export default function App() {
  return <Counter />;
}

function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleRangeChange(e){
    setStep(Number(e.target.value))
  }

  function handleInput(e){
    setCount(Number(e.target.value))
  }

  function handleResetButton(){
    setCount(0)
    setStep(1)
  }

  return (
    <div>
      <div className="step-and-counter">
        <input type="range" min='1' max='10' value={step} onChange={handleRangeChange}></input>
        <span>Step: {step}</span>
      </div>

      <div className="step-and-counter">
        <button onClick={()=> setCount(c => c - step)}>-</button>
        <input type="text" value={count} onChange={handleInput}></input>
        <button onClick={()=> setCount(c => c + step)}>+</button>
      </div>
      <p>
        <span>
            {count === 0
              ? "Today is "
              : count > 0
              ? `${count} days from today is `
              : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
      {step !== 1 || count !==0 && 
      (<button onClick={handleResetButton}>Reset</button>)}
    </div>
  );
}
