import { useState } from 'react'
import './App.css'

function App() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [count, setCount] = useState(0);
  
  function handleRemovingDay(){
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() -1 )
    setCurrentDate(newDate)
    setCount((e) => e - 1)
  }

  function handleAddingDay(){
    const newDate = new Date(currentDate);
    newDate.setDate(newDate.getDate() +1 )
    setCurrentDate(newDate)
    setCount((e) => e + 1)
  }

  return (
  <div>
    <div className='hello'>
      <button>-</button>
      <h1>Step: </h1>
      <button>+</button>
    </div>

    <div className='hello'>
      <button onClick={handleRemovingDay}>-</button>
      <h1>Count: {count}</h1>
      <button onClick={handleAddingDay}>+</button>
      <p></p>
      
    </div>
    
    {count > 0 
      ? [count, ' ','days from today is', ' ', currentDate.toDateString()] 
      : count === 0 
      ? ['Today is', ' ', currentDate.toDateString()] 
      : [Math.abs(count), ' ','days ago was', ' ', currentDate.toDateString()]
    }
  </div>
  )
}

export default App
