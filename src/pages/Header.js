import React from 'react';
import { Navbar } from 'react-bootstrap';
import logo from '../images/logo.png';

const Header = () => {
      return (
            <Navbar bg="info" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src={logo}
        width="50"
        height="40"
        className="d-inline-block align-top"
      />{' '}
      African Finex Gateway
    </Navbar.Brand>
  </Navbar>
      );
};

export default Header;