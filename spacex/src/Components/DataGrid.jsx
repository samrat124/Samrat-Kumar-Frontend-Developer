import React, { useEffect , useState} from 'react'
import axios from 'axios'
import {useDispatch,useSelector} from 'react-redux'
import { gridAction } from '../Redux/action';
import './datagrid.css'
 

const DataGrid = () => {
    const[page,setPage]=useState(1);
    let dispatch=useDispatch();
    let data=useSelector((e)=> e.gridData
    )
    useEffect(()=>{
        axios.get('https://api.spacexdata.com/v3/capsules').then(res=>{
            gridAction(res.data,dispatch);
           
            console.log(res.data);
        });
    },[])
    let checkDetails=(ele)=>{
        console.log(ele)
        if(ele.details){
            
            return ele.details
        }
        else{
            return "N/A"  }
    }
  return (
    <div className='datagrid'>
         <h1 >CAPSULES DATA</h1>
    <div className='datagridMain'>
       
       {
        data.map((ele,index)=>{
            if(index<=page*10&&index>=page*10-10){
            return <div className='datagridDiv'>
                <h3>Serial Number: {ele.capsule_serial}</h3>
                <p>Details: {checkDetails(ele)}</p>
                <p>Status: {ele.status}</p>
                
            </div>
            }
        })
       }   
    </div>
    <div className='paginationMain'><button disabled={page<=1?true:false} onClick={()=>setPage(page-1)}>Previous</button> <button>{page}</button> <button disabled={data.length<=page*10?true:false} onClick={()=>setPage(page+1)}>Next</button></div>    

    </div>
  )
}

export default DataGrid