import React from 'react'
import { useReducer } from 'react'
import reducer from './reducer';
function ReducerHook() {
    const initialvalue = 0;
const [count, dispacth] = useReducer(reducer, initialvalue );
  return (
    <div>
      <button onClick={()=>dispacth({type:"INC"}) }>
+
      </button>
      <h1> {count}</h1>
      <button onClick={()=>dispacth({type:"DEC"}) }>
-        
      </button>
      

    </div>
  )
}

export default ReducerHook
