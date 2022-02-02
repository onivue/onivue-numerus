import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'
import { Layout } from '@/components/Layout'
import useCounterStore from '@/stores/useCounterStore'
import { useEffect } from 'react'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  const loadCounters = useCounterStore((state) => state.loadCounters)
  useEffect(() => {
    loadCounters()
  }, [])
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no ,height=device-height"
        />
        <title>onivue-numerus</title>
      </Head>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
