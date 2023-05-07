import Categories from '../components/Categories/Categories'
import OfferDay from '../components/Day/OfferDay';
import Special from '../components/Special/Special';
import Rift from '../components/Rifts/Rift';
import Advantages from '../components/Advantages/Advantages';
import Rose from '../components/Rose/Rose'

export default function Main() {
	return <>
		<Categories />
		<Special />
		<OfferDay />
		<Rose />
		<Rift />
		<Advantages />
	</>;
}