import Header from '../components/Header/Header'
export default function MyApp({ Component, pageProps }) {
	return <>
		<Header />
		<Component {...pageProps} />
	</>

}