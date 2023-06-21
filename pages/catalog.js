import Sidebar from '../components/Sidebar/Sidebar.js';
import Comment from '../components/Comment/Comment.js';
import CatalogFlower from '../components/CatalogFlower/CatalogFlower.js';
import HowWork from '../components/HowWork.js';
export default function Catalog() {
	return <>
		<Sidebar />
		<CatalogFlower />
		<Comment />
		<HowWork/>
	</>;
}