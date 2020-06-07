import '../styles.css'
import React from 'react'
import 'tailwindcss/dist/base.min.css'

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}
