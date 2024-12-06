
import React from 'react'
import Student from  './student'
import StateHandeling from './StateHandeling'

function App() {
//   const studentdata= [{
//     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3QBUYGUy42_cmH3XJZbERf-uxgCam_BQf6w&s",
//     name:"Rahul Kumar",
//     roll:"23456",
//     college:"Abes Engineering College"
//   },
//   {
//     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrFkW-JiIyNe-bqvXvVnwh25RDr8ci_LjGMhp24piZ91DrogsrRYnfOrMRTcuydA9SDGQ&usqp=CAU",
//     name:"Rahul Kumar",
//     roll:"23456",
//     college:"Abes Engineering College"
//   },
//   {
//     image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrHWayKKTbqzDDhPtOy4BItQk0PGjVdgrWrw&s",
//     name:"Rahul Kumar",
//     roll:"23456",
//     college:"Abes Engineering College"
//   }
// ]
  return (
    <div>
      <div>
        <h2 style={{color:'red'}}>hello react js</h2>
        <div>
          <StateHandeling />
          {/* <Student data={studentdata[0].name} /> */}

          {/* {studentdata.map((ele)=>{
            return(
              <Student data={ele} />

            ) */}
          {/* })} */}
        </div>
        <div>
          {/* <Student image={<img src='https://commondatastorage.googleapis.com/codeskulptor-demos/riceracer_assets/img/srixner.png' height={100} width={100} />} name="Rahul Kumar" roll="2346" college="ABES Engineering college" /> */}
        </div>

      </div>
      
    </div>
  )
}

export default App