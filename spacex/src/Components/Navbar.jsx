import React from 'react'
import {Link} from 'react-router-dom'
import './banner.css'

const Navbar = () => {
  return (
    <div>
         <div className='navbarMain'>
        <Link className='linkMain' to='/'>SPACEX</Link>
      <Link className='linkMain' to='/'>Home</Link>
      <Link className='linkMain' to='/search'>Search Form</Link>
      <Link className='linkMain' to='/datagrid'>DataGrid</Link>
        </div>
    </div>
  )
}

export default Navbar