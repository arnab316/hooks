import { useState,useEffect } from 'react';
import Parent from './components/Parent';
import ReducerHook from './components/useReducer/ReducerHook';
// import ClearUp from './components/ClearnUp';


function App() {
  // const [count, setCount] = useState(0)
  // useEffect(()=>{
  //   alert(count);
  // },[]);
  // const userData ={
  //   name:'john',
  //   age:16,
  // };
  return (
  <>
  {/* <button onClick={()=>{setCount(count+1)}} >Click Me! {count}</button> */}
  {/* <ClearUp/> */}
   {/* <Parent /> */}
   <ReducerHook />

  </>
  )
}

export default App
