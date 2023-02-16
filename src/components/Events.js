import React from 'react';
import event1 from '../assets/img/event-1.jpg';
import event2 from '../assets/img/event-2.jpg';
import event3 from '../assets/img/event-3.jpg';
import event4 from '../assets/img/event-4.jpg';

export default function Events() {
  return (
    <div>
      <div className='about-header'></div>
      <section id='team' className='events'>
        <div className='container' data-aos='fade-up'>
          <header className='events-section-header'>
            <h1>Upcoming Events</h1>
          </header>
          <div className='events-description'>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem explicabo, sint excepturi quasi, eligendi maiores
              repellendus ullam unde optio asperiores temporibus fugiat esse
              consequatur doloribus dolorum culpa perferendis libero soluta.
            </p>
          </div>
          <div className='row gy-4'>
            <div
              className='col-lg-3 col-md-6 d-flex align-items-stretch'
              data-aos='fade-up'
              data-aos-delay='100'
            >
              <div className='member'>
                <div className='member-img'>
                  <img src={event1} className='img-fluid' alt='' />
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
                  <h4>Tampa Vegan Festival 2023</h4>
                  <span>Feb 22, 2020 </span>
                  {' | '}
                  <p className='event-location'>TAMPA TOWN CENTER</p>
                  <div className='attendimg-btn'>
                    <button>I'M GOING</button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className='col-lg-3 col-md-6 d-flex align-items-stretch'
              data-aos='fade-up'
              data-aos-delay='200'
            >
              <div className='member'>
                <div className='member-img'>
                  <img src={event2} className='img-fluid' alt='' />
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
                  <h4>Fort Lauderdale Veg-Fest</h4>
                  <span>Feb 22, 2020 </span>
                  {' | '}
                  <p className='event-location'>TAMPA TOWN CENTER</p>
                  <div className='attendimg-btn'>
                    <button>I'M GOING</button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className='col-lg-3 col-md-6 d-flex align-items-stretch'
              data-aos='fade-up'
              data-aos-delay='300'
            >
              <div className='member'>
                <div className='member-img'>
                  <img src={event3} className='img-fluid' alt='' />
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
                  <h4>Organic Farmer's Market</h4>
                  <span>Feb 22, 2020 </span>
                  {' | '}
                  <p className='event-location'>TAMPA TOWN CENTER</p>
                  <div className='attendimg-btn'>
                    <button>I'M GOING</button>
                  </div>
                </div>
              </div>
            </div>

            <div
              className='col-lg-3 col-md-6 d-flex align-items-stretch'
              data-aos='fade-up'
              data-aos-delay='400'
            >
              <div className='member'>
                <div className='member-img'>
                  <img src={event4} className='img-fluid' alt='' />
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
                  <h4>Green Foods Expo</h4>
                  <span>Feb 22, 2020 </span>
                  {' | '}
                  <p className='event-location'>TAMPA TOWN CENTER</p>
                  <div className='attendimg-btn'>
                    <button>I'M GOING</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className='event-form container'>
        <form action=''>
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
                value='Name'
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
                value='Email'
                className='event-form-field'
              />
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-6'>
              <input
                type='text'
                name='location'
                value='Location'
                id=''
                className='event-form-field'
              />
            </div>
            <div className='col-lg-6'>
              <input
                type='text'
                name='attendees'
                value='# of people'
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
                value='# of people'
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
                rows='4'
                className='event-form-field'
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
