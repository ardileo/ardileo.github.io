import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import '../styles/globals.css'
import '../styles/swiper.css'

import type { AppProps as BaseAppProps, } from 'next/app'
import Layout from '../components/Layout'
import { Box, ChakraProvider } from '@chakra-ui/react'
import theme from '../theme';
import { MainContext } from "../utils/context/main-context";
import React, { useState } from "react";

interface AppProps extends BaseAppProps {
  initProps: any
}

export function MyApp({ Component, pageProps, initProps, router }: AppProps) {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <MainContext.Parent value={initProps}>
        <Layout {...pageProps} >
          <Component {...pageProps} />
        </Layout>
      </MainContext.Parent>
    </ChakraProvider>
  )
}

// MyApp.getInitialProps = async (appCtx: AppContext) => {
//   const prevProps = App.getInitialProps(appCtx)
//   const newProps: AppProps = { ...prevProps as any };
//   const url = 'https://script.google.com/macros/s/AKfycbzwXOyXO4v0L2Eb_py1xjQLTveV9u2s3HiY5pQAvswUNv0dM_b7tyy_SQRlX3Ym_dwOfQ/exec';
//   const url = 'https://415b919f-5a49-4729-ae47-742c665a18bc.mock.pstmn.io/profile';
//   try {
//     await axios.post(url,
//       {
//         action: 'profile',
//         "email": "eve.holt@reqres.in",
//         "password": "pistol"
//       },
//     ).then(res => {
//       newProps.initProps = {
//         meta: res.data.data.meta
//       }
//     })
//   } catch (error) {

//   }
//   newProps.initProps = { meta: metaData.data }
//   return newProps;
// }

export default MyApp;