import React, { useState } from 'react'
import useTitle from '../customHooksFiles/useTitle'

function CustomHookTitle1() {
    const [count, setCount] = useState(0)

    useTitle(count);

  return (
    <div>
    <h3>CustomHook_Title1</h3>
    <button  onClick={() => setCount(count + 1)}>Count {count}</button>
    
    </div>
  )
}

export default CustomHookTitle1