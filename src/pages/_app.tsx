import '@/styles/globals.scss';
import type { AppProps } from 'next/app';

import CssBaseline from '@mui/material/CssBaseline';

import '@fontsource/roboto/700.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
