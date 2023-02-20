// import { CartFill } from 'react-bootstrap-icons';
import menuImg from '../../assets/img/menu-item-1.png';
export default function MenuItem(props) {
  return (
    <div className='col-sm-12 col-lg-12 col-xl-6'>
      <div className='menu-item'>
        <div className='menu-item-img'>
          <img src={menuImg} alt='' />
        </div>
        <div className='menu-item-text'>
          <div className='menu-item-header'>
            <span className='menu-item-title'>Suoer Long Menu Item Name</span>
            <div className='price-box'>$3.99</div>
          </div>
          <p className='menu-item-description'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            commodi esse harum quidem ab, debitis, doloribus
          </p>
          <div className='menu-buttons'>
            <span className='button'>
              <button>button 1</button>
            </span>
            <span className='cart-button'>
              <button>button 1</button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
