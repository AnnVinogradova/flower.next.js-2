import { Box, Flex, Image, Input, Link, Text, Stack } from '@chakra-ui/react';

export default function NavbarFooter() {
	return (
		<Box>
			<Flex direction="row" alignItems="flex-start" spacing={2}>
				<Link href="/">
					<Image src="/img/Header/logo-cveti.png" />
				</Link>
				<Stack spacing={4} direction="row" alignItems="center">
					<Flex direction="row" alignItems="center">
						<Image src="/img/Header/phone.png" />
						<a href="tel:7-0297-177-888">
							<Text>8-0297-177-888</Text>
						</a>
					</Flex>
					<Flex direction="row" alignItems="center">
						<Image src="/img/Header/phone.png" />
						<a href="tel:7-0257-177-888">
							<Text>7-0257-177-888</Text>
						</a>
					</Flex>
					<Flex direction="row" alignItems="center">
						<Image src="/img/Header/phone.png" />
						<a href="tel:7-0447-833-777">
							<Text>7-0447-833-777</Text>
						</a>
					</Flex>
					<Input type="text" placeholder="Найти букет..." />
					<Flex direction="row" alignItems="center">
						<Link href="/signIn" legacyBehavior>
							<Image src="/img/Header/Frame 1407.png" />
						</Link>
						<Link href="/favorites" legacyBehavior>
							<Image src="/img/Header/Frame 1410.png" />
						</Link>
						<Link href="/cart" legacyBehavior>
							<Image src="/img/Header/shopping-bag.png" />
						</Link>
					</Flex>
				</Stack>
			</Flex>
		</Box>
	);
}


