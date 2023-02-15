import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../../assets/img/seasoned_green_logo.png';
import { List, ChevronDown } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Header() {
  const [navBackground, setNavBackground] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 99) {
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
      <div className='container-fluid container-xl d-flex align-items-center justify-content-between'>
        <Link to='/' className='logo d-flex align-items-center'>
          <img src={logo} alt='Seasoned green logo' />
        </Link>

        <nav id='navbar' className='navbar'>
          <ul>
            <li>
              <Link className='nav-link scrollto active' to='/'>
                HOME
              </Link>
            </li>
            <li>
              <Link className='nav-link scrollto' to='/about'>
                ABOUT
              </Link>
            </li>
            <li>
              <Link className='nav-link scrollto' to='/recipes'>
                RECIPES
              </Link>
            </li>
            <li>
              <Link className='nav-link scrollto' to='/menu'>
                MENU
              </Link>
            </li>
            <li className='dropdown'>
              <Link to='#'>
                EVENTS
                <span className='dropdown-icon-span'>
                  {' '}
                  <ChevronDown className='bi bi-chevron-down dropdown-icon' />
                </span>
              </Link>
              <ul>
                <li>
                  <Link to='/events'>UPCOMING EVENTS</Link>
                </li>
                <li>
                  <a href='/'>BOOK AN EVENT</a>
                </li>
              </ul>
            </li>
            <li>
              <Link className='nav-link scrollto' to='/contact'>
                CONTACT US
              </Link>
            </li>
          </ul>
          <List className='bi bi-list mobile-nav-toggle' />
        </nav>
      </div>
    </header>
  );
}
