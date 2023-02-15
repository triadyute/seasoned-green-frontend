import menuItem1 from '../../assets/img/menu-item-1.png';
import { CurrencyDollar } from 'react-bootstrap-icons';

export default function MenuItem() {
  return (
    <div className='col-lg-6'>
      <div className='menu-item'>
        <div className='memu-item-img'>
          <div className='menu-item-price'>
            <div className='menu-item-price-box'>
              <span>
                <CurrencyDollar /> 0.00
              </span>
            </div>
          </div>
          <img src={menuItem1} alt='' height={150} />
        </div>
        <div className='menu-item-desc'>
          <h3>Vegan Wrap</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
            voluptatibus ea, vel corporis in voluptas sapiente labore dicta,
          </p>
          <div className='menu-item-buttons'>
            <div className='add-to-cart'>
              <button className='menu-add-to-cart'>Buy</button>
            </div>
            <div className='buy'>
              <button className='menu-add-to-cart'>Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
