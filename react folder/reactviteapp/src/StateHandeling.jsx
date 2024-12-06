import React, { useState } from 'react'

function StateHandeling() {
    const[count,setcount]=useState(20);

    function doincrement(){
        // alert("hello");
        setcount(count+20);
    }

  return (
    <div>
    <div>StateHandeling
        <h2>counter value:{count}</h2>
    </div>
    <div>
        <button onClick={doincrement}> increment</button>
        </div>
        </div>

  )
}

export default StateHandeling