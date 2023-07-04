import React from 'react';
import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';
import Instagram from '../components/Instagram/Instagram.js';
import { ChakraProvider } from '@chakra-ui/react'

export default function MyApp({ Component, pageProps }) {
	return <>
	<ChakraProvider>
		<Header />
		<Component {...pageProps} />
		<Instagram />
		<Footer />
	</ChakraProvider>
	</>

}