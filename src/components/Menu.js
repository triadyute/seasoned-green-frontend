import React from 'react';
import MenuItem from './menu-item/MenuItem';
import MenuItemPhoto1 from '../assets/img/menu-item-1.png';
import MenuItemPhoto2 from '../assets/img/menu-item-2.png';
import MenuItemPhoto3 from '../assets/img/menu-item-3.png';
import MenuItemPhoto4 from '../assets/img/menu-item-4.png';
import MenuItemPhoto5 from '../assets/img/menu-item-5.png';
import MenuItemPhoto6 from '../assets/img/menu-item-6.png';

export default function Menu() {
  const menuItems = [
    {
      otherInfo: 'Other Info',
      menuItemPhoto: MenuItemPhoto1,
      menuItemTitle: 'Vegan Wrap',
      menuItemPrice: '20.00',
      menuItemDescription:
        'Lorem ipsum dolor sit amet consectetur unde optio asperiores temporibus fugiat esse consequatur doloribus dolorum culpa perferendis libero soluta.',
    },
    {
      otherInfo: 'Other Info',
      menuItemPhoto: MenuItemPhoto2,
      menuItemTitle: 'Vegan Jamaican Patties',
      menuItemPrice: '15.00',
      menuItemDescription:
        'Lorem ipsum dolor sit amet consectetur unde optio asperiores temporibus fugiat esse consequatur doloribus dolorum culpa perferendis libero soluta.',
    },
    {
      otherInfo: 'Other Info',
      menuItemPhoto: MenuItemPhoto3,
      menuItemTitle: 'Green Veggie Smoothie',
      menuItemPrice: '10.00',
      menuItemDescription:
        'Lorem ipsum dolor sit amet consectetur unde optio asperiores temporibus fugiat esse consequatur doloribus dolorum culpa perferendis libero soluta.',
    },
    {
      otherInfo: 'Other Info',
      menuItemPhoto: MenuItemPhoto4,
      menuItemTitle: 'Vegan Pasta',
      menuItemPrice: '30.00',
      menuItemDescription:
        'Lorem ipsum dolor sit amet consectetur unde optio asperiores temporibus fugiat esse consequatur doloribus dolorum culpa perferendis libero soluta.',
    },
    {
      otherInfo: 'Other Info',
      menuItemPhoto: MenuItemPhoto5,
      menuItemTitle: 'Vegan Tika Masala',
      menuItemPrice: '38.00',
      menuItemDescription:
        'Lorem ipsum dolor sit amet consectetur unde optio asperiores temporibus fugiat esse consequatur doloribus dolorum culpa perferendis libero soluta.',
    },
    {
      otherInfo: 'Other Info',
      menuItemPhoto: MenuItemPhoto6,
      menuItemTitle: 'Vegan Chickpea Burger',
      menuItemPrice: '17.99',
      menuItemDescription:
        'Lorem ipsum dolor sit amet consectetur unde optio asperiores temporibus fugiat esse consequatur doloribus dolorum culpa perferendis libero soluta.',
    },
  ];

  return (
    <div className='menu'>
      <div className='about-header'></div>
      <div className='container'>
        <div
          className='menu-section-header'
          data-aos='fade-up'
          data-aos-duration='1000'
        >
          <h1>Seasoned Green Delivery Menu</h1>
        </div>
        <div
          className='menu-description'
          data-aos='fade-up'
          data-aos-delay='100'
          data-aos-duration='1000'
        >
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
            explicabo, sint excepturi quasi, eligendi maiores repellendus ullam
            unde optio asperiores temporibus fugiat esse consequatur doloribus
            dolorum culpa perferendis libero soluta.
          </p>
        </div>
        <div
          className='row'
          data-aos='fade-up'
          data-aos-delay='200'
          data-aos-duration='1000'
        >
          {menuItems.map((menuItem) => (
            <MenuItem
              otherInfo={menuItem.otherInfo}
              menuItemPhoto={menuItem.menuItemPhoto}
              menuItemTitle={menuItem.menuItemTitle}
              menuItemPrice={menuItem.menuItemPrice}
              menuItemDescription={menuItem.menuItemDescription}
            ></MenuItem>
          ))}
        </div>
      </div>
    </div>
  );
}
