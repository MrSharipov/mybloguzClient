import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, NavItem, Card } from 'reactstrap';

const SideBar = (props) => {
  return (
    <div className='inMiddle'>
        <Card style={{
            width: '18rem',
        }}>
            <Nav vertical className='flexMarginBottom'>
                <NavItem>
                <Link to="/myposts">
                    My posts
                </Link>
                </NavItem>
                <NavItem>
                <Link to="/createpost">
                    Create post
                </Link>
                </NavItem>
                <NavItem>
                <Link to="/editprofile">
                    Edit profile
                </Link>
                </NavItem>
            </Nav>
        </Card>
        {props.children}
    </div>
  )
}

export default SideBar