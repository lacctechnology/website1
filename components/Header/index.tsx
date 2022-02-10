import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import styles from './Header.module.css'

const Header: NextPage = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <Image src='/logo.png' alt='logo' width={50} height={50} />
      </div>
      <div className={styles.header__nav}>
        <ul>
          <li>
            <Link href='#'>Home</Link>
          </li>
          <li>
            <Link href='#'>Ofertas</Link>
          </li>
          <li>
            <Link href='#'>Tienda</Link>
          </li>
          <li>
            <Link href='#'>About</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header
