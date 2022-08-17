import React from 'react';
import Count from './Count';
import Button from './Button';
import { useState, useCallback } from 'react';
import Title from './Title';


function ParentComponent() {
    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(50000);

    const incrementAge = useCallback(() => {
        setAge(age + 1)
    }, [age])
    
    const IncrementSalary = useCallback(() => {
        setSalary(salary + 1000);
    }, [salary])
  return (
    <div>
    <h1>ParentComponent</h1>
    <Title />
    <Count text='Age' count={age} />
    <Button handleClick={incrementAge}>Increment Age</Button>
    <Count text='Salary' count={salary}/>
    <Button  handleClick={IncrementSalary}>Increment Salary</Button>
    
    </div>
  )
}

export default ParentComponent