import type { AppProps } from 'next/app'
import Head from 'next/head'

import '../styles/normalize.css'
import '../styles/style.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Lacc Technology</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
