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
    <Component {...pageProps} />
    <Footer />
    <GlobalStyle />
  </>
)

export default MyApp
