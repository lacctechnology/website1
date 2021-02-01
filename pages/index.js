import React from 'react';

const HomePage = () => {
  return (
    <section className='main'>
      <div className='container'>
        <div className='main-container'>
          <h1>
            <span>En</span> construcción
          </h1>
          <ul className='main-redes'>
            <li>
              <a href='https://www.facebook.com/Lacc-Technology-335501074366818'>
                <img
                  className='facebook'
                  src='/images/facebook.png'
                  alt='facebook'
                />
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/lacc_technology/'>
                <img
                  className='instagram'
                  src='/images/instagram.png'
                  alt='instagram'
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
