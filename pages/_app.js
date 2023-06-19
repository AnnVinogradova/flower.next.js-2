import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Instagram from '../components/Instagram/Instagram';
export default function MyApp({ Component, pageProps }) {
	return <>
		<Header />
		<Component {...pageProps} />
		<Instagram />
		<Footer />
	</>

}