import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../../assets/img/seasoned_green_logo.png';
import { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap';

export default function PageHeader() {
  const [navBackground, setNavBackground] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
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
          <LinkContainer to={'/'}>
            <Navbar.Brand className='logo d-flex align-items-center'>
              <img src={logo} alt='' height='200' />
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav' fixed='top'>
            <Nav className='ml-auto'>
              <LinkContainer to={'/'}>
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/about'}>
                <Nav.Link active={false}>About</Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/events'}>
                <Nav.Link active={false}>Events</Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/menu'}>
                <Nav.Link active={false}>Menus</Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/recipes'}>
                <Nav.Link active={false}>Recipes</Nav.Link>
              </LinkContainer>
              <LinkContainer to={'/contact'}>
                <Nav.Link active={false}>Contact</Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
