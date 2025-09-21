import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) =>
            function enhance(props) {
              return sheet.collectStyles(<App {...props} />)
            }
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      }
    } finally {
      sheet.seal()
    }
  }

render() {
  return (
    <Html lang="es">
      <Head>
        {/* Essential Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="theme-color" content="#FF6B35" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-Q3DVG5E7W8"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-Q3DVG5E7W8');
            `,
          }}
        />
        
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Montserrat:wght@400;700&display=swap"
          rel="stylesheet"
        />
        
        {/* Structured Data - Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Gym",
              "name": "Equilibrio Fitness",
              "description": "Gimnasio moderno en Molina de Segura, Murcia. Ofrecemos entrenamientos personalizados, clases grupales y equipos de última generación.",
              "url": "https://equilibriofitness.com",
              "telephone": "+34-XXX-XXX-XXX",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Calle Ejemplo, 123",
                "addressLocality": "Molina de Segura",
                "addressRegion": "Murcia",
                "postalCode": "30500",
                "addressCountry": "ES"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 38.0531,
                "longitude": -1.2133
              },
              "openingHours": [
                "Mo-Fr 06:00-23:00",
                "Sa-Su 08:00-21:00"
              ],
              "priceRange": "€€",
              "image": "https://equilibriofitness.com/img/hero/hero-image.jpg",
              "sameAs": [
                "https://www.facebook.com/equilibriofitness",
                "https://www.instagram.com/equilibriofitness"
              ]
            })
          }}
        />
        
        {/* Structured Data - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Equilibrio Fitness",
              "url": "https://equilibriofitness.com",
              "logo": "https://equilibriofitness.com/img/icon-512.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+34-XXX-XXX-XXX",
                "contactType": "customer service",
                "availableLanguage": "Spanish"
              }
            })
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
}
