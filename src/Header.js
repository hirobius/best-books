import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";
import LogoutButton from './LogoutButton'
import { withAuth0 } from '@auth0/auth0-react';

import './Header.css';

class Header extends React.Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return(
      // <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">

      //     <Navbar.Brand>My Favorite Books</Navbar.Brand>
      //     <Link to="/" >Home</Link>
      //     <Link to="/profile">Profile</Link>
      //     {isAuthenticated ? <LogoutButton className="ml-auto"/> : ''}
      //     {/* TODO: if the user is logged in, render the `LogoutButton` - if the user is logged out, render the `LoginButton` */}
      // </Navbar>
      <Navbar bg="dark" variant="dark">
        <Nav className="container-fluid">
          <Nav.Item>
            <Navbar.Brand as={Link} to="/">My Favorite Books</Navbar.Brand>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link as={Link} to="/profile">Profile</Nav.Link>
          </Nav.Item>
          <Nav.Item className="ml-auto">
            <Nav.Link>{isAuthenticated ? <LogoutButton className="ml-auto"/> : ''}</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    );
  }
}

export default withAuth0(Header);
