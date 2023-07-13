import Link from "next/link";
import { HStack, Icon } from '@chakra-ui/react'
import { FaInstagram, FaVk, FaTelegram, FaWhatsapp } from 'react-icons/fa'

export default function NavbarTop () {
  return <>
  <Link href='/about'>
    О магазине
</Link>
          <Link href="/delivery">
		  Доставка
          </Link>
          <Link href="/payment">
          Оплата
          </Link>
          <Link href="/return">
          Возврат
          </Link>
   <div>
    <ul>
     <li>
      <span>Доставка</span>
     </li>
     <li>
      <span>Пн-Пт 8.00 - 22.00 <br />Сб- Вс 10.00 - 22.00</span>
     </li>
	 <HStack spacing={4}>
      <Link href="https://www.instagram.com" isExternal>
        <Icon as={FaInstagram} boxSize={6} />
      </Link>
      <Link href="https://www.vkontakte.com" isExternal>
        <Icon as={FaVk} boxSize={6} />
      </Link>
      <Link href="https://www.telegram.org" isExternal>
        <Icon as={FaTelegram} boxSize={6} />
      </Link>
      <Link href="https://www.whatsapp.com" isExternal>
        <Icon as={FaWhatsapp} boxSize={6} />
      </Link>
    </HStack>
					<li>
						<span>RU</span>
						<span><svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M1 0.5L4 3.5L7 0.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" />
						</svg>
						</span>
					</li>
				</ul>
			</div>
  </>
	
}
