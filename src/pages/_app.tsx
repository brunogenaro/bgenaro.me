/* eslint-disable react/jsx-props-no-spreading */
import type { AppProps } from 'next/app'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import GlobalStyle from '../styles/global'
import '../styles/globals.css'

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Header />
    <div className="px-10 sm:px-16 md:px-24 lg:px-32 xl:px-40 2xl:px-52">
      <Component {...pageProps} />
    </div>
    <Footer />
    <GlobalStyle />
  </>
)

export default MyApp
