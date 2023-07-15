import { Grid, GridItem, Box, Text, Link } from '@chakra-ui/react'
import Block from "./Block";
import { Image } from '@chakra-ui/react'
export default function Special() {
	return <>
		<Box>
			<Text fontSize="xl" fontWeight="bold" mb={2}>
				Специальное предложение
			</Text>
			<Text>*На товары раздела скидка не распространяется</Text>
			<Link href="/catalog" color="blue.500" mt={2}>
				Перейти в каталог
			</Link>
		</Box>
		<Grid templateColumns='repeat(4, 1fr)' gap={4}>
			<GridItem>
				<Image src='/img/Main/Special/1.jpg' alt='Изображение'></Image>
				<Block title='Букет счастья' price='1250 RUB' />
			</GridItem>
			<GridItem>
				<Image src='/img/Main/Special/2.jpg' alt='Изображение'></Image>
				<Block title='Амаретти' price='1400 RUB' />
			</GridItem>
			<GridItem>
				<Image src='/img/Main/Special/3.jpg' alt='Изображение'></Image>
				<Block title='Вальс' price='2400 RUB' />
			</GridItem>
			<GridItem>
				<Image src='/img/Main/Special/4.jpg' alt='Изображение'></Image>
				<Block title='Левитация' price='1850 RUB' />
			</GridItem>
			<GridItem>
				<Image src="/img/Main/Special/5.jpg" alt='Изображение' ></Image>
				<Block title='Тироль' price='1650 RUB' />
			</GridItem>
			<GridItem>
				<Image src="/img/Main/Special/6.jpg" alt='Изображение' ></Image>
				<Block title='Нежное сердце' price='3000 RUB' />
			</GridItem>
			<GridItem>
				<Image src="/img/Main/Special/7.jpg" alt='Изображение' ></Image>
				<Block title='Джей Стрит' price='1400 RUB' />
			</GridItem>
			<GridItem>
				<Image src="/img/Main/Special/8.jpg" alt='Изображение' ></Image>
				<Block title='Восторг' price='2100 RUB' />
			</GridItem>
		</Grid>
	</>;
}