import React from 'react';
import Button from '../components/Button';
import Navbar from '../components/Navbar';
import Video from '../assets/hero-video.mp4';
import PracticeAreas from '../components/PracticeAreas';
import iphone433 from '../assets/iPhone.svg';
import JogoLogo from '../assets/Frame 568.svg';

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

      {/* Client Story 1 */}

      <section className='client-story-container'>
        <div className='client-story-details'>
          <div className='client-story-header'>
            <div className='top-mini-heading'>PracRevolutionizing the game:</div>
            <div className='client-heading'>
              Where tech innovation meets sports excellencetice Areas
            </div>
            <div className='client-text'>
              Cloud Primero helped 433 create web and mobile experiences that were
              required to tap the potential user base of such platforms
            </div>
          </div>
          <div className='client-story-footer'>
            <div className='client-footer-heading'>
              Revolutionary Player Development Platform
            </div>
            <div className='client-text'>
              JOGO is the future of football. This revolutionary player development
              platform provides productive insights of players to predict the future faces
              of football.
            </div>
            <div className='client-label-holder'>
              <p className='client-label-pill'>AI</p>
              <p className='client-label-pill'>Sports</p>
              <p className='client-label-pill'>Data Science</p>
            </div>
          </div>
        </div>
        <div className='client-story-demo'>
          <img src={iphone433} className='demo-mockup' />
          <img src={JogoLogo} className='company-icon' />
        </div>
      </section>

      {/* Client Story 2 */}

      <section className='client-story-container'>
        <div className='client-story-details'>
          <div className='client-story-header'>
            <div className='top-mini-heading'>PracRevolutionizing the game:</div>
            <div className='client-heading'>
              Where tech innovation meets sports excellencetice Areas
            </div>
            <div className='client-text'>
              Cloud Primero helped 433 create web and mobile experiences that were
              required to tap the potential user base of such platforms
            </div>
          </div>
          <div className='client-story-footer'>
            <div className='client-footer-heading'>
              Revolutionary Player Development Platform
            </div>
            <div className='client-text'>
              JOGO is the future of football. This revolutionary player development
              platform provides productive insights of players to predict the future faces
              of football.
            </div>
            <div className='client-label-holder'>
              <p className='client-label-pill'>AI</p>
              <p className='client-label-pill'>Sports</p>
              <p className='client-label-pill'>Data Science</p>
            </div>
          </div>
        </div>
        <div className='client-story-demo'>
          <img src={iphone433} className='demo-mockup' />
        </div>
      </section>
    </>
  );
}

export default Home;
