import React from 'react'
import Banner from '../Components/Banner'
import DataGrid from '../Components/DataGrid'
import SearchForm from '../Components/SearchForm'

const Home = () => {
  return (
    <div>
        <Banner/>
        <SearchForm/>
        <DataGrid/>
    </div>
  )
}

export default Home