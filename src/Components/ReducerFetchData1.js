import React,{useState, useEffect} from 'react';
import axios from 'axios';


function ReducerFetchData1() {
    //Define state variables required for this dat fetching component:

    const[loading, setLoading] = useState(true);
    const[error, setError] = useState('');
    const[post, setPost] = useState({});

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')

        .then((response) => {
            setLoading(false);
            setPost(response.data);
            setError('');
        })
        .catch((error) => {
            setLoading(false);
            setPost({});
            setError('Something went wrong!')
        })

    }, []) 


  return (
    <div>
    <h2>ReducerFetchData1</h2>
    {loading? 'loading': post.title}
    {error? error : null}
    
    </div>
  )
}

export default ReducerFetchData1