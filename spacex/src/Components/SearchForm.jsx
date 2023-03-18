import React, { useState,useEffect } from 'react'
import axios from 'axios';
import {useDispatch,useSelector} from 'react-redux'
import { dataAction } from '../Redux/action';
import DataCard from './DataCard';
import './searchform.css'


const SearchForm = () => {
    const[query,setQuery]=useState('');
    const[qdata,setQdata]=useState([]);

    let dispatch=useDispatch();
    let data1=useSelector((e)=>e.searchData)
    let filterQuery=(e)=>{
        e.preventDefault();
        setQdata([]);
         setQuery(e.target.value);
        //  setQdata([]);
         console.log(query);
     }
    
    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log(qdata);
        setQdata(data1.filter((e)=>{
            
            if(e.type.toLowerCase().includes(query.toLowerCase())){
                return true;
            }
            else if(e.status.toLowerCase().includes(query.toLowerCase())){
                return true;
            }
            else if(new String(e.original_launch).includes(query)){
                return true
            }
            
            return false
           }))
    }

       useEffect(()=>{
        axios.get(`https://api.spacexdata.com/v3/capsules`)
        .then((res)=>{
           dataAction(res.data,dispatch);
        //    setQdata(res.data);
        })
       },[]) 
  return (
    <div className='searchformMain'>
        <div className='leftSearchform'>
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Search' onChange={filterQuery} />
        <input type="submit" />
    </form>
</div>
    <div className='rightSearchform'>
        <DataCard data={qdata}/>
        </div>
     </div>
  )
}

export default SearchForm