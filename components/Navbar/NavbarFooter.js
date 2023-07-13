import Link from "next/link";
import { Image } from '@chakra-ui/react'
export default function NavbarFooter() {
	return <>
		<div>
		<Link href="/">
        <Image src="/img/Header/logo-cveti.png"></Image>
    </Link>
			<ul>
				<li>
				<Image src="/img/Header/phone.png"></Image>
					<a href="tel:7-0297-177-888">
						<span>8-0297-177-888</span>
					</a>
				</li>
				<li>
				<Image src="/img/Header/phone.png"></Image>
					<a href="tel:7-0257-177-888">
						<span>7-0257-177-888</span>
					</a>
				</li>
				<li>
				<Image src="/img/Header/phone.png"></Image>
					<a href="tel:7-0447-833-777">
						<span>7-0447-833-777</span>
					</a>
				</li>
			</ul>
		</div>
		<div>
			<input type="text" placeholder="Найти букет..."></input>
		</div>
		<div>
		<ul>
			<li>
			    <Link href="/signIn" legacyBehavior>
            <div>
               <img src="/img/Header/Frame 1407.png"></img>
            </div>
            </Link>
			</li>
			<li>
			<Link href="/favorites" legacyBehavior>
            <div>
               <img src="/img/Header/Frame 1410.png"></img>
            </div>
            </Link>
			</li>
			<li>
			<Link href="/cart" legacyBehavior>
            <div>
            <img src="/img/Header/shopping-bag.png"></img>
            </div>
            </Link>
			</li>
		</ul>
		</div>
	</>;
}