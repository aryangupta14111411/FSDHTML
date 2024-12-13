import React, { useState } from 'react'
import car from './assets/images.jpg'
import './image.css';
function ImageManipulation() {

const[height,setHeight]=useState(100);
const[angle,setAngle]=useState(90);
const[red,setRed]=useState()
const[green,setGreen]=useState()
const[blue,setBlue]=useState()

    
function enhanceHeight(){
    setHeight(height+20)
}
function doRotate(){
    setAngle(angle+30);

}

function changeColor(){
    setRed(Math.random()*255);
    setGreen(Math.random()*255);
    setBlue(Math.random()*255);
}

  return (
    <div className='container'>
<div className='imgdiv' style={{backgroundColor:`RGB(${red},${green},${blue})`,marginTop:'70px',marginLeft:'200px' ,height:'200px',width:'200px', border:'2px solid red'}}>
  <img src= {car} height={height} weidth={200} style={{transform:`rotate(${angle}deg)`}} alt='cat image'/>
</div>
<div style={{ border:'2px solid red', marginTop:'100px', paddingLeft:'60px'}}>
    <button onClick={enhanceHeight}>Enhance height </button>
    &nbsp; &nbsp; &nbsp;
    <button>Enhance wedith</button>
    &nbsp; &nbsp; &nbsp;
    <button onClick={changeColor}>color change</button>
    &nbsp; &nbsp; &nbsp;
    <button onClick={doRotate}>Rotate</button>
</div>

    </div>
  
  )
}

export default ImageManipulation