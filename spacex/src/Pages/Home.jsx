import React from 'react'
import Banner from '../Components/Banner'
import DataGrid from '../Components/DataGrid'
import SearchForm from '../Components/SearchForm'
import './home.css'

const Home = () => {
  return (
    <div className='homeMain'>
        <Banner/>
        <SearchForm/>
        <DataGrid/>
    </div>
  )
}

export default Home