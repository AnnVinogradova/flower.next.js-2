import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';
import Instagram from '../components/Instagram/Instagram.js';
export default function MyApp({ Component, pageProps }) {
	return <>
		<Header />
		<Component {...pageProps} />
		<Instagram />
		<Footer />
	</>

}