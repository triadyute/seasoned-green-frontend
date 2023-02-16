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
              <Link to='/' style={{ textDecoration: 'inherit' }}>
                <Nav.Link>Home</Nav.Link>
              </Link>
              <Link to='/about' style={{ textDecoration: 'inherit' }}>
                <Nav.Link>About Us</Nav.Link>
              </Link>
              <Link to='/menu' style={{ textDecoration: 'none' }}>
                <Nav.Link>Menu</Nav.Link>
              </Link>
              <Link to='/recipes' style={{ textDecoration: 'none' }}>
                <Nav.Link>RECIPES</Nav.Link>
              </Link>
              <Link to='/events' style={{ textDecoration: 'none' }}>
                <Nav.Link>EVENTS</Nav.Link>
              </Link>
              <Link to='/contact' style={{ textDecoration: 'none' }}>
                <Nav.Link>CONTACT</Nav.Link>{' '}
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
