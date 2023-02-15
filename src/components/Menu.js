import React from 'react';
import MenuItem from './menu-item/MenuItem';

export default function Menu() {
  return (
    <div className='menu'>
      <div className='about-header'></div>
      <div className='container'>
        <div className='menu-section-header'>
          <h1>Seasoned Green Menus</h1>
        </div>
        <div className='menu-description'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            explicabo, sint excepturi quasi, eligendi maiores repellendus ullam
            unde optio asperiores temporibus fugiat esse consequatur doloribus
            dolorum culpa perferendis libero soluta.
          </p>
        </div>
        <div className='row'>
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </div>
      </div>
    </div>
  );
}
