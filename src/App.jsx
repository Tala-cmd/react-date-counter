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

  return (
    <div>
        <div className="step-and-counter">
          <button onClick={()=> setStep(s=> s-1)}>-</button>
          <h1>Step: {step}</h1>
          <button onClick={()=> setStep(s=> s+1)}>+</button>
        </div>

        <div className="step-and-counter">
          <button onClick={()=> setCount(c => c- step)}>-</button>
          <h1>Count: {count}</h1>
          <button onClick={()=> setCount(c => c+ step)}>+</button>
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
    </div>
  );
}
