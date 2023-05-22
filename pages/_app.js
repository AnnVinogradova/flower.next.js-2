import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Comment from '../components/Comment/Comment';
import Instagram from '../components/Instagram/Instagram';
export default function MyApp({ Component, pageProps }) {
	return <>
		<Header />
		<Component {...pageProps} />
		<Comment />
		<Instagram />
		<Footer />
	</>

}