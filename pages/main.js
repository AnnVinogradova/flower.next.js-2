import Categories from '../components/Categories/Categories'
import OfferDay from '../components/Day/OfferDay';
import Special from '../components/Special/Special';
import Rift from '../components/Rifts/Rift';
import Advantages from '../components/Advantages/Advantages';
import Rose from '../components/Rose/Rose';
import Comment from '../components/Comment/Comment';
import Instagram from '../components/Instagram/Instagram';
import HeaderFooter from '../components/Header/HeaderFooter';
import HowWork from '../components/HowWork';

export default function Main() {
	return <>
	    <HeaderFooter />
		<Categories />
		<Special />
		<OfferDay />
		<Rose />
		<Rift />
		<Advantages />
		<Comment />
		<HowWork/>
	</>;
}