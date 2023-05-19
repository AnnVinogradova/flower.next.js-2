import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Comment from '../components/Comment/Comment';
export default function MyApp({ Component, pageProps }) {
	return <>
		<Header />
		<Component {...pageProps} />
		<Comment />
		<Footer />
	</>

}