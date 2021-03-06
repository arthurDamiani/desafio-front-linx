import Head from 'next/head'
import { useState, createContext } from 'react'
import '../styles/globals.scss'

export const FilterContext = createContext(['', () => {}])

function MyApp({ Component, pageProps }) {
  const [state, setState] = useState('')
  return (
    <>
      <Head>
        <title>Desafio Linx</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FilterContext.Provider value={[state, setState]}>
        <Component {...pageProps} />
      </FilterContext.Provider>
    </>
  )
}

export default MyApp
