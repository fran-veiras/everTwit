import { ChakraProvider, ColorModeScript } from '@chakra-ui/react';
import '../styles/globals.css';
import { themeApp } from '../styles/Theme/theme';

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={themeApp}>
      <ColorModeScript initialColorMode={themeApp.config.initialColorMode} />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
