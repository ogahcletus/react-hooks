import React, {useReducer, useEffect} from 'react';
import axios from 'axios';

const initialState =  {
    loading: true,
    error: '',
    post: {}
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'FECTCH_SUCCESS':
            return {
                loading: false,
                post: action.payload,
                error: ''
            }

        case 'FETCH_ERROR':
            return {
                loading: false,
                post: {},
                error: 'Something went wrong!'
            }

        default :
            return state

        
    }
}

function ReducerFetchData2() {
   const [state, dispatch] = useReducer(reducer, initialState)

   useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/1')

    .then((response) => {
        dispatch({type:'FETCH_SUCCESS', payload:response.data})
    })
    .catch((error) => {
       dispatch({type:'FECTCH_ERROR'})
    })

}, []) 


  return (
    <div>

    <h2>ReducerFetchData2</h2>
    <div>
    {state.loading? 'loading': state.post.title}
    {state.error? state.error : null}
    </div>


    </div>
  )
}

export default ReducerFetchData2