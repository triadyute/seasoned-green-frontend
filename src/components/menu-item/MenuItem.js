import { CartFill } from 'react-bootstrap-icons';
export default function MenuItem(props) {
  return (
    <div className='col-sm-12 col-lg-12 col-xl-6'>
      <div className='menu-item'>
        <div className='menu-item-img'>
          <img src={props.menuItemImg} alt='menu item' />
        </div>
        <div className='menu-item-text'>
          <div className='menu-item-header'>
            <span className='menu-item-title'>{props.menuItemTitle}</span>
            <div className='price-box'>{`$${props.menuItemPrice}`}</div>
          </div>
          <p className='menu-item-description'>{props.menuItemDescription}</p>
          <div className='menu-buttons'>
            <span className='button'>
              <button>button 1</button>
            </span>
            <span className='cart-button'>
              <button>
                Add to <CartFill />
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
