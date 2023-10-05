import '@/styles/globals.css'
import { ThemeProvider } from '@/theme/ThemeProvider'
import type { AppProps } from 'next/app'

import { Hanken_Grotesk } from 'next/font/google'

const hanken = Hanken_Grotesk({
  weight: '400',
  subsets: ['latin']
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={hanken.className}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </main>
  )
}
