import React from 'react';
import {Link} from 'react-router-dom';
import jwt_decode from 'jwt-decode';
import { Container } from 'reactstrap';

const Navbar = (props) => {
    let decodedJwt; 
    const currentTime = new Date().getTime();
    let isLogged = false;
    if(!!localStorage.getItem("access_token")){
      decodedJwt = jwt_decode(localStorage.getItem("access_token"));
      const jwtExpTime = decodedJwt.exp * 1000;
      isLogged = (!!localStorage.getItem("access_token") && jwtExpTime - currentTime > 0);
    }

    const logOut = () => {
      localStorage.clear();
      window.location.replace('/');
    }
    

  return (
    <Container>
      <nav>
        <ul>
            <li><h1><Link to="/">My Blog</Link></h1></li>
            {isLogged ? <li>{decodedJwt.name}, welcome to MyBlog.UZ</li> : ""}
            <div className='menu'>
                <li><Link to="/">Home</Link></li>
                {isLogged ? <>
                <li><Link to="/dashboard">Dashboard</Link></li>
                <li onClick={logOut} className='text-primary' role="button">Logout</li></> : 
                <li><Link to="/login">Login</Link></li>}
            </div>
           
        </ul>
        <hr></hr>
      </nav>
      {props.children}
    </Container>
    
  )
}

export default Navbar