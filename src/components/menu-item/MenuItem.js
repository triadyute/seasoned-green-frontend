export default function MenuItem(props) {
  return (
    <div className='col-lg-6'>
      <div className='menu-item'>
        <div className='memu-item-img'>
          <div className='menu-item-price'>
            <div className='menu-item-info-box'>
              <span>{props.otherInfo}</span>
            </div>
          </div>
          <img src={props.menuItemPhoto} alt='' height={150} />
        </div>
        <div className='menu-item-desc'>
          <div className='menu-item-header'>
            <div>
              <h3>{props.menuItemTitle}</h3>
            </div>
            <div className='menu-item-price-box'>${props.menuItemPrice}</div>
          </div>
          <p>{props.menuItemDescription}</p>
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
