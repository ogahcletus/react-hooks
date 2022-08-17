import React from 'react'
import useInput from '../customHooksFiles/useInput';

function CustomInputForm1() {
    /*const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState(''); */

  const [firstName, bindFirstName, resetFirstName] = useInput('');
  const [lastName, bindLastName, resetLastName] = useInput('')

    const submitHandler = (e) => {
        e.preventDefault();
        alert(`Hello ${firstName} ${lastName}`);
        resetFirstName();
        resetLastName();
    }


  return (
    <div>
        <h3>Custom InputForm1</h3>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input 
                    {...bindFirstName}
                     type='text' 
                     />
                </div>
                <div>
                    <label>Last Name</label>
                    <input
                     {...bindLastName} 
                     type='text' 
                     />
                </div>
              <button>Submit</button> 
            </form>
               
    </div>
  )
}

export default CustomInputForm1