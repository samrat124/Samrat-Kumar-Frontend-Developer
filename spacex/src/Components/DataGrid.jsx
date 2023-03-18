import React, { useEffect , useState} from 'react'
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import { gridAction } from '../Redux/action';
 

const DataGrid = () => {
    let dispatch=useDispatch();
    let data=useSelector((e)=> e.gridData
    )
    useEffect(()=>{
        axios.get('https://api.spacexdata.com/v3/capsules').then(res=>{
            gridAction(res.data,dispatch);
           
            console.log(res.data);
        });
    },[])
  return (
    <div>
       {
        data.map((ele,index)=>{
            return <div>
                <h1>{ele.status}</h1>
            </div>
        })
       }       
    </div>
  )
}

export default DataGrid