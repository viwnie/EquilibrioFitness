import { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from '../styles/global'
import { Montserrat } from '@next/font/google'

import { DefaultSeo } from 'next-seo'
import defaultOpenGraph from '../../next-seo.config'

const montserrat = Montserrat({
  subsets: ['latin']
})

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Equilibrio Fitness</title>
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="theme-color"
          content="#C00909"
        />
        <meta name="description" content="Equilibro Fitness gimnasio en Molina De Segura Murcia"/>
      </Head>
      <DefaultSeo {...defaultOpenGraph} />
      <GlobalStyles />
      <main className={montserrat.className}>
        <Component {...pageProps} />
      </main>
    </>
  )
}

export default App
