import React from 'react';
import {Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth'
import'./Header.css'


const Header = () => {
  
  const {user,logOut}=useAuth()
    return (

        <>
            <Navbar bg="dark" variant="dark"   collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand className=' text-white fs-2 header' href="#home">TRAVEL WAY</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end ">
    <Nav.Link className='menu'as={Link} to={"/home"}>Home</Nav.Link>
      <Nav.Link className='menu' as={Link} to={"/myorders"}>MyBooking</Nav.Link>
      <Nav.Link className='menu' as={Link} to={"/manageallservice"}>Manage All Booking</Nav.Link>
      <Nav.Link className='menu' as={Link} to={"/addservice"}>AddBooking</Nav.Link>
      {user?.email ? <Button variant="light" onClick={logOut}>Logout</Button>
              :
      <Nav.Link className='text-white ' as={Link} to={"/login"}>Login</Nav.Link>}
      <Navbar.Text className='text-white user-name ps-1'>
      User: <a href="#login">{user?.displayName}</a>
      </Navbar.Text>
    </Navbar.Collapse>
    
    
    </Container>
  </Navbar>
        </>
    );
};

export default Header;