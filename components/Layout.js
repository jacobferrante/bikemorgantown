import Nav from './Nav'
import styles from '../styles/Layout.module.css'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <>
    <Head>

    </Head>
    <Nav /> 
        {children}
    </>
  ) 
}

