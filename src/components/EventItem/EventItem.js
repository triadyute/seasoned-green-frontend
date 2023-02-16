export default function EventItem(props) {
  return (
    <div
      className='col-lg-3 col-md-6 d-flex align-items-stretch'
      data-aos='fade-up'
      data-aos-delay='100'
      data-aos-duration='1000'
    >
      <div className='member'>
        <div className='member-img'>
          <img src={props.eventImg} className='img-fluid' alt='' />
          <div className='social'>
            <a href='/'>
              <i className='bi bi-twitter'></i>
            </a>
            <a href='/'>
              <i className='bi bi-facebook'></i>
            </a>
            <a href='/'>
              <i className='bi bi-instagram'></i>
            </a>
            <a href='/'>
              <i className='bi bi-linkedin'></i>
            </a>
          </div>
        </div>
        <div className='member-info'>
          <h4>{props.eventTitle}</h4>
          <span>{props.eventDate}</span>
          {' | '}
          <p className='event-location'>{props.eventLocation}</p>
          <div className='attendimg-btn'>
            <button>I'M GOING</button>
          </div>
        </div>
      </div>
    </div>
  );
}
