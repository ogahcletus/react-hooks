import React, {useState, useRef} from 'react'
import { useEffect } from 'react';

function HookTimer() {

    const[timer, setTimer] = useState(0);
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevTimer => prevTimer + 1)
        }, 1000)
        return () => {
            clearInterval(intervalRef.current)
        }

    }, [])
  return (
    <div>
   <h3> Hook_Timer</h3>
    <h3>{timer}</h3>
    <button onClick={() => clearInterval(intervalRef.current)}>Clear Interval</button>
    </div>
  )
}

export default HookTimer