import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/Layout'
import { ChakraProvider } from '@chakra-ui/react'
import theme from '../theme';

export default function App({ Component, pageProps }: AppProps) {
  const page = (<Component />).type.name;

  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Layout data={pageProps} page={page}>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}