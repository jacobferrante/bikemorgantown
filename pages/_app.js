import Layout from '../components/Layout'
import Script from 'next/script'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Script src="https://kit.fontawesome.com/9897761609.js" crossorigin="anonymous" />
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
