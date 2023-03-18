import React,{useEffect,useState} from 'react'

import './datacard.css'
import { useSelector } from 'react-redux';

const DataCard = ({data}) => {


   

  return (
    <div className='datagridMain'>
        
        <div className='rightDatagrid'>
        {data.map((ele,index)=>{
            return <div className='datagridDiv' key={index}>
                <div>{ele.status}</div>
            </div>
        })}
        </div>
    </div>
  )
}

export default DataCard