import React from 'react'
import { useState,useEffect, useRef } from 'react'
function RefHook() {

 const[userInput,setUserInput]= useState("");
const count = useRef(0);

useEffect (()=>{
    count.current = count.current + 1;
 });
  return (

    <div>
        <div>
            <input type="text"
            value={userInput}
            onChange={(e)=> setUserInput(e.target.value)} />
        </div>
        <p>the number of time comp render {count.current}</p>
    </div>
  );
};

export default RefHook;
