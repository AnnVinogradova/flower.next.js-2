import { Grid, GridItem, Box, Text, Link} from '@chakra-ui/react'
import Block from "../Special/Block.js";
import { Image } from '@chakra-ui/react'
export default function Rose() {
	return <>
	<Box>
      <Text fontSize="xl" fontWeight="bold" mb={2}>
	  Рекомендуем розы
      </Text>
      <Text>*На товары раздела скидка не распространяется</Text>
      <Link href="/catalog" color="blue.500" mt={2}>
	  Перейти в каталог
      </Link>
    </Box>
		<Grid templateColumns='repeat(4, 1fr)' gap={4}>
      <GridItem>
        <Image src="/img/main/Rose/1667082329_79858744.jpg" alt='Изображение'></Image>
        <Block title='Большой букет розовых гортензий и роз' price='6100 RUB' />
      </GridItem>
      <GridItem>
        <Image src="/img/main/Rose/1671049666_94240855.jpg" alt='Изображение'></Image>
        <Block title='Белое сочувствие' price='4300 RUB' />
      </GridItem>
      <GridItem>
        <Image src="/img/main/Rose/1671059873_78137878.jpg" alt='Изображение'></Image>
        <Block title='Аранжировка' price='3200 RUB' />
      </GridItem>
      <GridItem>
        <Image src="/img/main/Rose/1673002612_51596618.jpg" alt='Изображение'></Image>
        <Block title='Анабель' price='3700 RUB' />
      </GridItem>
	  <GridItem>
	  <Image src="/img/main/Rose/1673003024_53540727.jpg" alt='Изображение' ></Image>
		<Block title='Яркий розовый букет' price='4500 RUB' />
		</GridItem>
		<GridItem>
		<Image src="/img/main/Rose/1675855271_60856222.jpg" alt='Изображение' ></Image>
		<Block title='Розы и гортензия' price='3800 RUB' />
		</GridItem>
		<GridItem>
		<Image src="/img/main/Rose/1682426752_18371446.jpg" alt='Изображение' ></Image>
		<Block title='Чистая элегантность' price='4100 RUB' />
		</GridItem>
		<GridItem>
		<Image src="/img/main/Rose/1683289491_14276900.jpg" alt='Изображение' ></Image>
		<Block title='Микс букет' price='5600 RUB' />
		</GridItem>
    </Grid>
	</>;
}