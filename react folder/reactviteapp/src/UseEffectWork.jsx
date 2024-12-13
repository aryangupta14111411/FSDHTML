import React, { useEffect, useState } from 'react'

function UseEffectWork() {
    const[count,setCount]=useState(10);
    const [pointer, setPointer]= useState(100);
    function doIncrement(){
        setCount(count+20);
    }
    function doPointer(){
        setPointer(pointer-10);
    }
useEffect(()=>{
    console.log("Comonent is renderd"+count);
    console.log("Comonent is renderd using pointer"+pointer);
},[count,pointer])

  return (
    <div>
        count value:{count}
        <br></br>
        point value:{pointer}

        <div>
            <button onClick={doIncrement}>increment</button>
            <button onClick={doPointer}>pointer</button>
        </div>
        </div>
  )
}

export default UseEffectWork