import Sidebar from '../components/Sidebar/Sidebar';
import Comment from '../components/Comment/Comment';
import CatalogFlower from '../components/CatalogFlower/CatalogFlower';
import HowWork from '../components/HowWork';
export default function Catalog() {
	return <>
		<Sidebar />
		<CatalogFlower />
		<Comment />
		<HowWork/>
	</>;
}