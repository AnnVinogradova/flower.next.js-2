
import { Flex, Box, Image, Link, Text, UnorderedList, ListItem } from '@chakra-ui/react'
import NextLink from 'next/link'

export default function Footer() {
	return <>
		<Flex>
			<Box>
				<Image src="/img/Footer/Vector.png" />
				<UnorderedList>
					<ListItem>
						<Image src="/img/Footer/phone.png" />
						<Link href="tel:7-0297-177-888">
							<Text>8-0297-177-888</Text>
						</Link>
					</ListItem>
					<ListItem>
						<Image src="/img/Footer/phone.png" />
						<Link href="tel:7-0257-177-888">
							<Text>7-0257-177-888</Text>
						</Link>
					</ListItem>
					<ListItem>
						<Image src="/img/Footer/phone.png" />
						<Link href="tel:7-0447-833-777">
							<Text>7-0447-833-777</Text>
						</Link>
					</ListItem>
				</UnorderedList>
			</Box>
			<Box>
				<UnorderedList>
					<ListItem><Image src="/img/Footer/Tilda_Icons_26sn_instagram.png" /></ListItem>
					<ListItem><Image src="/img/Footer/Vector1.png" /></ListItem>
					<ListItem><Image src="/img/Footer/Tilda_Icons_26sn_telegram.png" /></ListItem>
					<ListItem><Image src="/img/Footer/Tilda_Icons_26sn_whatsapp.png" /></ListItem>
				</UnorderedList>
			</Box>
			<Box>
				<UnorderedList>
					<ListItem>
						<Link as={NextLink} href='/about'>
							О магазине
						</Link>
					</ListItem>
					<ListItem>
						<Link as={NextLink} href='/delivery'>
							Доставка
						</Link>
					</ListItem>
					<ListItem>
						<Link as={NextLink} href='/payment'>
							Оплата
						</Link>
					</ListItem>
					<ListItem>
						<Link as={NextLink} href='/return'>
							Возврат
						</Link>
					</ListItem>
					<ListItem>
						<Link as={NextLink} href='/reviews'>
							Отзывы
						</Link>
					</ListItem>
					<ListItem>
						<Link as={NextLink} href='/contacts'>
							Контакты
						</Link>
					</ListItem>
				</UnorderedList>
			</Box>
			<Box>
				<UnorderedList>
					<ListItem>
						<Link as={NextLink} href='/about'>
							О магазине
						</Link>
					</ListItem>
					<ListItem>
						<Link as={NextLink} href='/delivery'>
							Доставка
						</Link>
					</ListItem>
					<ListItem>
						<Link as={NextLink} href='/payment'>
							Оплата
						</Link>
					</ListItem>
					<ListItem>
						<Link as={NextLink} href='/return'>
							Возврат
						</Link>
					</ListItem>
					<ListItem>
						<Link as={NextLink} href='/reviews'>
							Отзывы
						</Link>
					</ListItem>
					<ListItem>
						<Link as={NextLink} href='/contacts'>
							Контакты
						</Link>
					</ListItem>
				</UnorderedList>
				<Text>ООО "Трансстиль-Групп" УНП: 190929286, юридический адрес: 220030, г. Москва, ул. Ленина, д.46, пом.3</Text>
				<Text>Дата регистрации интернет-магазина в Торговом реестре: 07 апреля 2015г. №156730</Text>
				<Text>Свидетельство о гос. регистрации №190929286 от 18.12.2007</Text>
			</Box>
		</Flex>
	</>
}