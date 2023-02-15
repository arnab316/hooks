import React from 'react'
import { useState, useLayoutEffect } from 'react'
function LayoutEffect() {
  const [num , Setnum] = useState(0);
  useLayoutEffect(() => {
  if(num === 0){
    Setnum(num + Math.random() * 100);
  }
},[num])

  return (
    <div>
      <p>my new random number is {num}</p>
      <button onClick={()=>{Setnum(0)}}>random num</button>
    </div>
  )
}

export default LayoutEffect
