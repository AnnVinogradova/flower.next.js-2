import NavbarTop from "../Navbar/NavbarTop";
import NavbarFooter from "../Navbar/NavbarFooter";

export default function Header() {
	return <>
		<div className="header-container">
			<NavbarTop />
			<NavbarFooter />
		</div>
	</>;
}