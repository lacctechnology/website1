import type { NextPage } from 'next'
import Image from 'next/image'

const HomePage: NextPage = () => {
  return (
    <div className='container'>
      <section className='main'>
        <div className='main-container'>
          <h1>
            <span>En</span> construcción
          </h1>
          <p>Revisa nuestras redes sociales</p>
          <ul className='main-redes'>
            <li>
              <a href='https://www.facebook.com/Lacc-Technology-335501074366818'>
                <Image
                  src='/images/facebook.png'
                  alt='facebook'
                  width={400}
                  height={400}
                />
              </a>
            </li>
            <li>
              <a href='https://www.instagram.com/lacc_technology/'>
                <Image
                  src='/images/instagram.png'
                  alt='instagram'
                  width={400}
                  height={400}
                />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}

export default HomePage
