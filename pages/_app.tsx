import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {ChakraProvider} from "@chakra-ui/provider";

function MyApp({ Component, pageProps }: AppProps) {
  return(
      <ChakraProvider>
      <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp
