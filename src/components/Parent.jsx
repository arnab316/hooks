import React from 'react'
import Child from './Child';
// import Component from './Child';
function Parent({user}) {
    // const {name, age} = user;
    
  return (
    <div>
      {/* <Child {...user}/> */}
      <Child/>
    </div>
  )
}

export default Parent;
