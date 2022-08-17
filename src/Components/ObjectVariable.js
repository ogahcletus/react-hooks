import React, { useState } from 'react';



function ObjectVariable() {

    const [name, setName] = useState({firstName:'', lastName:''})
  return (
    <div>
        <form>
            <input type='text' 
                value={name.firstName}
                onChange={(event) => setName({...name,firstName:event.target.value})}
            />
            <input type='text' 
                value={name.lastName}
                onChange={(event) => setName({...name,lastName:event.target.value})}
            />
            <h2>Your First Name is:{name.firstName}</h2>
            <h2>Your Last Name is:{name.lastName} </h2>
            <h2>{JSON.stringify(name)}</h2>

        </form>
    </div>
  )
}

export default ObjectVariable