import type { NextPage } from 'next'
import Header from '../components/Header'

const HomePage: NextPage = () => {
  return (
    <div className='container'>
      <Header />
      <section className='main'>
        <div className='main-container'></div>
      </section>
    </div>
  )
}

export default HomePage
