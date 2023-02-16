import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/seasoned_green_logo.png';
import { useState } from 'react';

export default function PageHeader() {
  const [navBackground, setNavBackground] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 90) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <header
      id='header'
      className={
        navBackground ? 'header fixed-top header-scrolled' : 'header fixed-top'
      }
    >
      <Navbar expand='lg' className='navbar'>
        <Container>
          <Navbar.Brand className='logo d-flex align-items-center'>
            <Link to='/'>
              <img src={logo} alt='' height='200' />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' fixed='top'>
            <Nav className='ml-auto'>
              <Nav.Link>
                <Link to='/'>Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/about' style={{ textDecoration: 'inherit' }}>
                  About Us
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/menu' style={{ textDecoration: 'none' }}>
                  Menu
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/recipes' style={{ textDecoration: 'none' }}>
                  RECIPES
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/events' style={{ textDecoration: 'none' }}>
                  EVENTS
                </Link>
              </Nav.Link>
              <Nav.Link>
                <Link to='/contact' style={{ textDecoration: 'none' }}>
                  CONTACT
                </Link>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
