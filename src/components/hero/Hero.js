import React from 'react';
import '../../App.css';
import heroImage from '../../assets/img/seasoned-bowl.png';
import { ArrowRight } from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
export default function Hero() {
  return (
    <section id='hero' className='hero d-flex align-items-center'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-6 d-flex flex-column justify-content-center'>
            <h1 data-aos='fade-up'>Seasoned Green</h1>
            <h2 data-aos='fade-up' data-aos-delay='400'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
              dignissimos harum sit aut dolorem quam libero ipsam dolorum!
              Placeat, quibusdam. Fugiat nam dignissimos vel cum eaque alias
              cupiditate quibusdam
            </h2>
            <div data-aos='fade-up' data-aos-delay='600'>
              <div className='text-center text-lg-start'>
                <Link to='/about'>
                  <Button className='btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center'>
                    <span>Get Started</span>
                    <ArrowRight className='bi bi-arrow-right' />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div
            className='col-lg-6 hero-img'
            data-aos='zoom-out'
            data-aos-delay='200'
          >
            <img
              src={heroImage}
              className='img-fluid'
              alt='bowl of vegetables'
            />
          </div>
        </div>
      </div>
    </section>
  );
}
