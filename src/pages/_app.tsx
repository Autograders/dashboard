import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import React from 'react';

function AutogradersApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default AutogradersApp;
