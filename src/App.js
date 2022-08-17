import './App.css';
import CustomInputForm1 from './Components/CustomInputForm1';



/*
import CustomHookCounter1 from './Components/CustomHookCounter1';
import CustomHookCounter2 from './Components/CustomHookCounter2';
import CustomHookTitle1 from './Components/CustomHookTitle1';
import CustomHookTitle2 from './Components/CustomHookTitle2';

import ClassTimer from './Components/ClassTimer';
import FocusInput from './Components/FocusInput';
import HookTimer from './Components/HookTimer';
import UseMemoCount from './Components/UseMemoCount';
import ParentComponent from './Components/ParentComponent';
import ReducerFetchData2 from './Components/ReducerFetchData2';
import ReducerFetchData1 from './Components/ReducerFetchData1';
import React, {useReducer} from 'react';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import Component3 from './Components/Component3';
import ReducerCounter3 from './Components/ReducerCounter3';
import ReducerCounter2 from './Components/ReducerCounter2';
import ReducerCounter1 from './Components/ReducerCounter1';
import ComponentC from './Components/ComponentC';
import DataFetch from './Components/DataFetch';
import IntervalClassCounter from './Components/IntervalClassCounter';
import IntervalHookCounter from './Components/IntervalHookCounter';
import ArrayVariable from './Components/ArrayVariable';
import ClassCounter from './Components/ClassCounter';
import ClassEffect from './Components/ClassEffect';
import FunctionalEffect from './Components/FunctionalEffect';
import HookCounter from './Components/HookCounter';
import HookCounterTwo from './Components/HookCounterTwo';
import ObjectVariable from './Components/ObjectVariable';
import ClassOptimazimation2 from './Components/ClassOptimazimation2';
import HookOptimization2 from './Components/HookOptimization2';
import MouseContainer from './Components/MouseContainer';
export const UserContext = React.createContext();
export const ChannelContext = React.createContext();

export const CountContext = React.createContext();
export const ChannelContext = React.createContext();
const initialState = 0;

const reducer = (state, action) => {
        
        switch (action) {
            case 'increment':
                return state + 1;
                
            case 'decrement':
                return state - 1;    
        
            case 'reset':
                return initialState;

            default:
                return state;
        }
}

*/


function App() {
  //const [count, dispatch] = useReducer(reducer, initialState)


  return (
    <div className="App">
   {/* <ClassCounter />
    <HookCounter />
    <HookCounterTwo />
    <ObjectVariable />
    <ArrayVariable />
    <ClassEffect />
    <FunctionalEffect /> 
    <ClassOptimazimation2 />
     <HookOptimization2 /> 
     <MouseContainer />  
     <IntervalClassCounter /> 
     <IntervalHookCounter /> 
     <DataFetch /> 

     <UserContext.Provider value={'Cletus'} >
        <ChannelContext.Provider value={'Codevolution'}>

          <ComponentC />

        </ChannelContext.Provider>
     </UserContext.Provider>

    

      <ReducerCounter1 /> 
      <ReducerCounter2 /> 
      <ReducerCounter3 /> 

      <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
         Count- {count}
        <Component1 />
        <Component2 />
        <Component3 />
      </CountContext.Provider> 


      <ReducerFetchData1 /> 
      <ReducerFetchData2 /> 

      <ParentComponent />
      <UseMemoCount /> 

      <FocusInput />
      <ClassTimer />
      <HookTimer />     

      <CustomHookTitle1 />
      <CustomHookTitle2 /> 

      <CustomHookCounter1 />
      <CustomHookCounter2 /> */}

      <CustomInputForm1 />

    </div>
  );
}

export default App;
