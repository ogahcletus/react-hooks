import React, {useState, useEffect } from 'react'

function HookOptimization2() {

    const[x, setX] = useState(0);
    const[y, setY] = useState(0);

    useEffect(() => {
        console.log('useEffect Called' )
        window.addEventListener('mousemove', logMousePosition)
        
      // implement the component cleanup code below:
        return () => {
          console.log('component unmounting code');
          window.removeEventListener('mousemove', logMousePosition)
        }


    }, [])

    const logMousePosition = (event) => {
        console.log('mouse event');
        setX(event.clientX);
        setY(event.clientY)
    }
  return (
    <div>Hooks 
    
    X- {x} Y- {y}
        
        </div>
  )
}

export default HookOptimization2