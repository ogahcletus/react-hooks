import React, {useState} from 'react'

function HookCounterTwo() {

  const initialCount = 0
  const[count, setCount] = useState(initialCount)

  const incrementFive = ()=> {
    for(let i=0; i<5; i++){
     // setCount(count + 1) not the best method

     //Anytime you need to update state value based on the previous state value, always go with the safer option of passing in a function that will sset the new state value.

      setCount(prevCount => prevCount +1)

    }
  }
  return (
    <div>
      COUNT: {count}
     {/* <button onClick={() => setCount(initialCount)}>RESET</button>
      <button onClick={() => setCount(count +1)}>INCREMENT</button>
      <button onClick={() => setCount(count-1)}>DECREMENT</button>
      <button onClick={incrementFive}>INCREMENTFIVE</button> */}
    
      <button onClick={() => setCount(initialCount)}>RESET</button>
      <button onClick={() => setCount(prevCount => prevCount +1)}>INCREMENT</button>
      <button onClick={() => setCount(prevCount => prevCount -1)}>DECREMENT</button>
      <button onClick={incrementFive}>INCREMENTFIVE</button>
    
    
    
    
    
    </div>
  )
}

export default HookCounterTwo