import React from 'react';
import { GeoAlt, Telephone, Envelope, Clock } from 'react-bootstrap-icons';

export default function Contact() {
  return (
    <div>
      <div className='about-header'></div>
      <section id='contact' className='contact'>
        <div className='container' data-aos='fade-up' data-aos-duration='1000'>
          <header className='contact-section-header'>
            <h1>Contact Us</h1>
          </header>

          <div
            className='row gy-4'
            data-aos='fade-up'
            data-aos-delay='100'
            data-aos-duration='1000'
          >
            <div className='col-lg-6'>
              <div className='row gy-4'>
                <div className='col-md-6'>
                  <div className='info-box'>
                    <GeoAlt className='icon' />
                    <h3>Address</h3>
                    <p>
                      A108 Adam Street,
                      <br />
                      New York, NY 535022
                    </p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='info-box'>
                    <Telephone className='icon' />
                    <h3>Call Us</h3>
                    <p>
                      +1 5589 55488 55
                      <br />
                      +1 6678 254445 41
                    </p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='info-box'>
                    <Envelope className='icon' />
                    <h3>Email Us</h3>
                    <p>
                      info@example.com
                      <br />
                      contact@example.com
                    </p>
                  </div>
                </div>
                <div className='col-md-6'>
                  <div className='info-box'>
                    <Clock className='icon' />
                    <h3>Opening Hours</h3>
                    <p>
                      Monday - Friday
                      <br />
                      9:00AM - 05:00PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className='col-lg-6'
              data-aos='fade-up'
              data-aos-delay='200'
              data-aos-duration='1000'
            >
              <form
                action='forms/contact.php'
                method='post'
                className='email-form'
              >
                <div className='row gy-4'>
                  <div className='col-md-6'>
                    <input
                      type='text'
                      name='name'
                      className='form-control'
                      placeholder='Your Name'
                      required
                    />
                  </div>

                  <div className='col-md-6'>
                    <input
                      type='email'
                      className='form-control'
                      name='email'
                      placeholder='Your Email'
                      required
                    />
                  </div>

                  <div className='col-md-12'>
                    <input
                      type='text'
                      className='form-control'
                      name='subject'
                      placeholder='Subject'
                      required
                    />
                  </div>

                  <div className='col-md-12'>
                    <textarea
                      className='form-control'
                      name='message'
                      rows='6'
                      placeholder='Message'
                      required
                    ></textarea>
                  </div>

                  <div className='col-md-12 text-center'>
                    <div className='loading'>Loading</div>
                    <div className='error-message'></div>
                    <div className='sent-message'>
                      Your message has been sent. Thank you!
                    </div>

                    <button type='submit'>Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
