import 'tailwindcss/tailwind.css'
import { ThemeProvider } from 'next-themes'
import { Layout } from '@/components/Layout'
import useCounterStore from '@/stores/useCounterStore'
import { useEffect } from 'react'

function MyApp({ Component, pageProps }) {
    const loadCounters = useCounterStore((state) => state.loadCounters)
    useEffect(() => {
        loadCounters()
    }, [])
    return (
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </ThemeProvider>
    )
}

export default MyApp
