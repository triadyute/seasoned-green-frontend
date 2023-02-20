import event1 from '../assets/img/event-1.jpg';
import event2 from '../assets/img/event-2.jpg';
import event3 from '../assets/img/event-3.jpg';
import event4 from '../assets/img/event-4.jpg';

const events = [
  {
    eventTitle: 'Tampa Vegan Festival 2023',
    eventImg: event1,
    eventDate: 'Dec 3, 2023',
    eventLocation: 'Tampa Town Center',
  },
  {
    eventTitle: 'Fort Lauderdale Veg-Fest',
    eventImg: event2,
    eventDate: 'Feb 13, 2023',
    eventLocation: 'Springfield, Ft. Lauderdale',
  },
  {
    eventTitle: "Organic Farmer's Market",
    eventImg: event3,
    eventDate: 'Apr 19, 2023',
    eventLocation: 'Miami High School',
  },
  {
    eventTitle: 'Green Foods Expo',
    eventImg: event4,
    eventDate: 'Dec 25, 2023',
    eventLocation: 'Tampa Bay Mall',
  },
];

export default function Events() {
  return (
    <div>
      <div className='about-header'></div>
      <section id='team' className='events'>
        <div className='container' data-aos='fade-up' data-aos-duration='1000'>
          <header className='events-section-header'>
            <h1>Upcoming Events</h1>
          </header>
          <div
            className='events-description'
            data-aos='fade-up'
            data-aos-delay='100'
            data-aos-duration='1000'
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem explicabo, sint excepturi quasi, eligendi maiores
              repellendus ullam unde optio asperiores temporibus fugiat esse
              consequatur doloribus dolorum culpa perferendis libero soluta.
            </p>
          </div>
          <div className='row gy-4'>
            {events.map((event) => (
              <div
                className='col-lg-3 col-md-6 d-flex align-items-stretch'
                data-aos='fade-up'
                data-aos-delay='100'
                data-aos-duration='1000'
              >
                <div className='member'>
                  <div className='member-img'>
                    <img src={event.eventImg} className='img-fluid' alt='' />
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
                    <h4>{event.eventTitle}</h4>
                    <span>{event.eventDate}</span>
                    {' | '}
                    <p className='event-location'>{event.eventLocation}</p>
                    <div className='attendimg-btn'>
                      <button>I'M GOING</button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className='event-form container'>
        <form action='' data-aos='fade-up' data-aos-duration='1000'>
          <div className='row'>
            <div className='col-lg-12'>
              <header className='events-booking-header'>
                <h1>Book Your Event</h1>
              </header>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <input
                type='text'
                name='name'
                id=''
                placeholder='Name'
                className='event-form-field'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <input
                type='email'
                name='email'
                id=''
                placeholder='Email'
                className='event-form-field'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <input
                type='tel'
                name='phone'
                placeholder='Phone #'
                id=''
                className='event-form-field'
              />
            </div>
            <div className='col-lg-6'>
              <input
                type='text'
                name='location'
                placeholder='Location'
                id=''
                className='event-form-field'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-4'>
              <input
                type='date'
                name='date'
                id=''
                className='event-form-field'
              />
            </div>
            <div className='col-lg-4'>
              <input
                type='time'
                name='time'
                id=''
                className='event-form-field'
              />
            </div>
            <div className='col-lg-4'>
              <input
                type='text'
                name='attendees'
                placeholder='# of people'
                id=''
                className='event-form-field'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <textarea
                name=''
                id=''
                cols='30'
                rows='5'
                className='event-form-field'
                placeholder='Type here'
              ></textarea>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12 event-form-button'>
              <input type='submit' value='Send' />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
