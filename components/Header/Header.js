import NavbarTop from "../Navbar/NavbarTop";
import NavbarFooter from "../Navbar/NavbarFooter";

export default function Header() {
	return <>
		<div className="header-container">
			<NavbarTop />
			<NavbarFooter />
		</div>
		<div>
			<h1>Дарим красоту и хорошее настроение вашему дому</h1>
			<p>Специально для вас — быстрая доставка и отличные цены</p>
		</div>
	</>;
}