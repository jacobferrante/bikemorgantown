import Layout from '../components/Layout'
import Script from 'next/script'
import '../styles/globals.css'
import { Roboto_Flex } from '@next/font/google'

const robotoFlex = Roboto_Flex()

function MyApp({ Component, pageProps }) {
  return (
  
  <main className={robotoFlex.className}>
  <Layout>
    <Script src="https://kit.fontawesome.com/9897761609.js" crossorigin="anonymous" />
    <Component {...pageProps} />
  </Layout>
  </main>
  )
}

export default MyApp
