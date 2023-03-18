import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import DataGrid from './DataGrid'
import SearchForm from './SearchForm'

const Allroutes = () => {
  return (
    <div>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/search' element={<SearchForm/>}/>
        <Route path='/datagrid' element={<DataGrid/>}/>
        </Routes>
    </div>
  )
}

export default Allroutes