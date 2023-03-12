import React from 'react';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Video from '../assets/hero-video.mp4';
import PracticeAreas from '../components/PracticeAreas';

function Home() {
  return (
    <>
      {/* Landing Section */}
      <section className='full-page'>
        <video className='video-background' autoPlay muted loop id='myVideo'>
          <source src={Video} type='video/mp4' />
        </video>
        <Navbar />
        <div className='landing-container'>
          <div className='landing-content container'>
            <h1 className='landing-heading'>
              What's Your '<span>Next</span>'
            </h1>
            <p className='landing-subtext'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry
            </p>
            <Button text='Explore Now' style='filled' />
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className='about-home-container'>
        <div className='about-home-content container'>
          <p className='top-mini-heading'>About Us</p>
          <h2 className='para-heading'>
            ‘Cloud Primero’ enables <span>innovation</span> and helps organizations
            discover their <span>’True North’</span>. We do this by assisting them to{' '}
            <span>ask</span>
            the <span>right questions</span> with a deep understanding of{' '}
            <span>interconnections </span>
            between industries and <span>operating models</span>.
          </h2>
          <h2 className='para-heading'>
            Fuelled with <span>humility</span> and <span>empathy</span> as the driving
            force, our objective inference is driven by{' '}
            <span>enterpreneurial brilliance</span>, which allows us to deliver solutions
            that are not only <span>desired</span> but also <span>needed</span>.
          </h2>
          <Button text='Explore Now' style='filled' />
        </div>
      </section>

      {/* Practice Areas */}
      <section className='practice-areas-container'>
        <div className='practice-content container'>
          <div className='practice-content-heading'>
            <p className='top-mini-heading2'>About Us</p>
            <h2 className='practice-heading'>Practice Areas</h2>
          </div>
          <div className='tab-container'>
            <PracticeAreas />
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
