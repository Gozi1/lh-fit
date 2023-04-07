import Navbar from './navbar'
import Footer from './footer'
import Head from 'next/head'
import { Poppins,Lora } from 'next/font/google'
export default function Layout({ children }) {
  return (
    <>
    <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}