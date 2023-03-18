import React from 'react'
import './datacard.css'
 

const DataCard = ({data}) => {

  let checkDetails=(ele)=>{
    console.log(ele)
    if(ele.details){
        
        return ele.details
    }
    else{
        return "N/A"  }
}
   

  return (
    <div className='datacardMain'>
        
         
        {data.map((ele,index)=>{
            return <div className='datacardDiv' key={index}>
                <h3>Serial Number: {ele.capsule_serial}</h3>
                <p>Details: {checkDetails(ele)}</p>
                <p>Status: {ele.status}</p>
            </div>
        })}
        
    </div>
  )
}

export default DataCard