import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
export default function MyApp({ Component, pageProps }) {
	return <>
		<Header />
		<Component {...pageProps} />
		<Footer />
	</>

}