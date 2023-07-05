import React from 'react'
import Header from '../components/Header/Header.js'
import Footer from '../components/Footer/Footer.js'
import Instagram from '../components/Instagram/Instagram.js'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from 'next-auth/react'

import type { AppProps } from 'next/app'


export default function MyApp({ Component, pageProps: {session, ...pageProps} }: AppProps) {
	return <>
	<SessionProvider session={session}>
	<ChakraProvider>
		<Header />
		<Component {...pageProps} />
		<Instagram />
		<Footer />
	</ChakraProvider>
	</SessionProvider>
	</>

}