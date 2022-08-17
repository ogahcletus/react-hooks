import React from 'react'

import useCounter from '../customHooksFiles/useCounter'

function CustomHookCounter1() {
    
    const [count, incrementCount, decrementCount, resetCount] = useCounter(0, 1)


  return (
    <div>
    <h2>CustomHook Counter1</h2>
    <h3>Count = {count}</h3>
    <button onClick={incrementCount}>Increment Count</button>
    <button onClick={decrementCount}>Decrement Count</button>
    <button onClick={resetCount}>Reset Count</button>
    </div>
  )
}

export default CustomHookCounter1