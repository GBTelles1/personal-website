import '@/styles/globals.css';
import { ThemeProvider } from '@/theme/ThemeProvider';
import type { AppProps } from 'next/app';

import { Hanken_Grotesk } from 'next/font/google';
import Head from 'next/head';

const hanken = Hanken_Grotesk({
  weight: '400',
  subsets: ['latin']
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main className={hanken.className}>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </main>
    </>
  );
}
