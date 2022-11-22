import React from 'react'
import {Link} from 'react-router-dom';

const Navbar = (props) => {
  return (
    <>
    <nav>
        <ul>
            <li><h1><Link to="/">My Blog</Link></h1></li>
            <div className='menu'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Login</Link></li>
            </div>
           
        </ul>
        <hr></hr>
    </nav>
    {props.children}
    </>
  )
}

export default Navbar