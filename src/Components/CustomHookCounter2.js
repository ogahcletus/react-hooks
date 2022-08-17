import React from 'react'
import useCounter from '../customHooksFiles/useCounter'


function CustomHookCounter2() {
    const [count, incrementCount, decrementCount, resetCount] = useCounter(10, 10)
    
  return (
    <div>
    <h2>CustomHook Counter2</h2>
    <h3>Count = {count}</h3>
    <button onClick={incrementCount}>Increment Count</button>
    <button onClick={decrementCount}>Decrement Count</button>
    <button onClick={resetCount}>Reset Count</button>
    </div>
  )
}

export default CustomHookCounter2