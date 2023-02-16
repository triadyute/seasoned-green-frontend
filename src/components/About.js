import React from 'react';
import aboutImg from '../assets/img/about.png';

export default function About() {
  return (
    <div>
      <header className='about-header'></header>

      <section id='about' className='about'>
        <div className='container' data-aos='fade-up'>
          <div className='row gx-0'>
            <div
              className='col-lg-6 d-flex flex-column justify-content-center'
              data-aos='fade-up'
              data-aos-delay='200'
              data-aos-duration='1500'
            >
              <div className='content'>
                <h2>About Seasoned Green</h2>
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Nesciunt excepturi suscipit, placeat enim ad in hic eius
                  quisquam
                </h3>
                <p>
                  Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt
                  et. Inventore et et dolor consequatur itaque ut voluptate sed
                  et. Magnam nam ipsum tenetur suscipit voluptatum nam et est
                  corrupti.
                </p>
                <p>
                  Quisquam vel ut sint cum eos hic dolores aperiam. Sed deserunt
                  et. Inventore et et dolor consequatur itaque ut voluptate sed
                  et. Magnam nam ipsum tenetur suscipit voluptatum nam et est
                  corrupti.
                </p>
                <div className='text-center text-lg-start'>
                  <a
                    href='/'
                    className='btn-read-more d-inline-flex align-items-center justify-content-center align-self-center'
                  >
                    <span>Read More</span>
                    <i className='bi bi-arrow-right'></i>
                  </a>
                </div>
              </div>
            </div>

            <div
              className='col-lg-6 d-flex align-items-center'
              data-aos='zoom-out'
              data-aos-delay='200'
              data-aos-duration='1000'
            >
              <img src={aboutImg} className='img-fluid' alt='' />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
