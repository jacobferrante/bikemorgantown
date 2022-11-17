import Nav from './Nav'
import Footer from './Footer'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
    <Head>

    </Head>
    <Nav /> 
        {children}
    <Footer />
    </>
  ) 
}

