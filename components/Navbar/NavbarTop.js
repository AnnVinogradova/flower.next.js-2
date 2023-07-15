import Link from "next/link";
import { Button, HStack, Icon, Box, Flex, Text, Stack } from '@chakra-ui/react'
import { FaInstagram, FaVk, FaTelegram, FaWhatsapp } from 'react-icons/fa'

export default function NavbarTop() {
	return <>
		<Box>
			<Flex direction="row" alignItems="flex-start" spacing={2}>
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
				<Text>Доставка</Text>
				<Stack spacing={2}>
					<Text>Пн-Пт 8.00 - 22.00</Text>
					<Text>Сб- Вс 10.00 - 22.00</Text>
				</Stack>
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
				<Button>Оптовым клиентам</Button>
			</Flex>
		</Box>
	</>
}
