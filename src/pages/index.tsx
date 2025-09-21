import { NextSeo } from 'next-seo'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Advantage from '../components/Advantage'
import Prices from '../components/Prices'
import Category from '../components/Category'
import Footer from '../components/Footer'
import Schedules from '../components/Schedules'
import CalculatorIMC from '../components/Calculator'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Equilibrio Fitness - Gimnasio en Molina de Segura, Murcia"
        description="Descubre Equilibrio Fitness, tu gimnasio de confianza en Molina de Segura, Murcia. Ofrecemos entrenamientos personalizados, clases grupales, equipos modernos y precios competitivos. ¡Únete a nuestra comunidad fitness!"
        canonical="https://equilibriofitness.com/"
        openGraph={{
          type: 'website',
          locale: 'es_ES',
          url: 'https://equilibriofitness.com/',
          siteName: 'Equilibrio Fitness',
          title: 'Equilibrio Fitness - Gimnasio en Molina de Segura, Murcia',
          description: 'Descubre Equilibrio Fitness, tu gimnasio de confianza en Molina de Segura, Murcia. Ofrecemos entrenamientos personalizados, clases grupales, equipos modernos y precios competitivos.',
          images: [
            {
              url: 'https://equilibriofitness.com/img/hero/hero-image.jpg',
              width: 1200,
              height: 630,
              alt: 'Equilibrio Fitness - Gimnasio en Molina de Segura',
              type: 'image/jpeg',
            }
          ],
        }}
        twitter={{
          handle: '@equilibriofitness',
          site: '@equilibriofitness',
          cardType: 'summary_large_image',
        }}
        additionalMetaTags={[
          {
            name: 'keywords',
            content: 'gimnasio, fitness, Molina de Segura, Murcia, entrenamiento personal, clases grupales, musculación, cardio, crossfit, pilates, yoga'
          },
          {
            name: 'author',
            content: 'Equilibrio Fitness'
          },
          {
            name: 'geo.region',
            content: 'ES-MU'
          },
          {
            name: 'geo.placename',
            content: 'Molina de Segura'
          },
          {
            name: 'geo.position',
            content: '38.0531;-1.2133'
          },
          {
            name: 'ICBM',
            content: '38.0531, -1.2133'
          }
        ]}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
          {
            rel: 'apple-touch-icon',
            href: '/img/icon-192.png',
            sizes: '192x192'
          },
          {
            rel: 'manifest',
            href: '/manifest.json'
          }
        ]}
      />
      <Nav />
      <Hero />
      <Advantage />
        <Prices />
        <Category />
        <Schedules />
        <CalculatorIMC />
        <Footer />
    </>
  )
}
