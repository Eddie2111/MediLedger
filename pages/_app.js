import { ChakraProvider } from '@chakra-ui/react'
import '../styles/globals.css'

function MyApp({Component, pageProps:{...pageProps}}) {
  return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
  )
}

export default MyApp
