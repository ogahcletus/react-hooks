import React, {useReducer} from 'react';

const initialState = {
    firstCounter: 0,
    secondCounter: 10
}

const reducer = (state, action) => {
        //return newState;
    //The condition to execute code based on action is to use switch statement, so replace newState with switch

        switch (action.type) {
            case 'increment':
                return {...state, firstCounter:state.firstCounter + action.value};
                
            case 'decrement':
                return {...state, firstCounter:state.firstCounter - action.value};    

                case 'increment 2':
                return {...state, secondCounter:state.secondCounter + action.value};
                
            case 'decrement 2':
                return {...state, secondCounter:state.secondCounter - action.value};    
        
            case 'reset':
                return initialState;

            default:
                return state;
        }
}


function ReducerCounter2() {

    const [count, dispatch] = useReducer(reducer, initialState) 

  return (
    <div>
    ReducerCounter2
    
      <div> FirstCounter - {count.firstCounter}</div>
      <div>SecondCounter - {count.secondCounter}</div>

    <button onClick={() => dispatch({type:'increment', value: 1})}>Increment by 1</button>
    <button onClick={() => dispatch({type:'decrement', value: 1})}>Decrement by 1</button>

    <button onClick={() => dispatch({type:'increment', value: 5})}>Increment by 5</button>
    <button onClick={() => dispatch({type:'decrement', value: 5})}>Decrement by 5</button>
    
    
    <div><button onClick={() => dispatch({type:'increment 2', value: 1})}>Increment Counter 2</button>
    <button onClick={() => dispatch({type:'decrement 2', value: 1})}>Decrement Counter 2</button></div>

    <button onClick={() => dispatch({type:'reset'})}>Reset</button>
    
    </div>
  )
}

export default ReducerCounter2