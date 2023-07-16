import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import Head from 'next/head';

import { Page } from '@/components/Page';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta content="website" property="og:type" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta content="/image.jpg" property="og:image" />
        <meta content="Booking app" property="og:image:alt" />
        <meta property="og:title" content="....." />
        <meta property="og:description" content="....." />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta content="Booking app" property="og:site_name"></meta>
        <meta content="...." name="description" />
        <meta content="#110c11" name="msapplication-TileColor" />
        <meta content="#110c11" name="theme-color" />
        <title>Booking</title>
      </Head>
      <Page>
        <Component {...pageProps} />
      </Page>
    </>
  );
}
