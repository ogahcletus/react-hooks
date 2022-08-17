import React, { useState } from 'react'
import HookOptimization2 from './HookOptimization2'

function MouseContainer() {
    const [display, setDisplay] = useState(true)

  return (
    <div>
    <button onClick={() => setDisplay(!display)}>
    ToggleDisplay </button>
    {display && <HookOptimization2 />}
    </div>
  )
}

export default MouseContainer