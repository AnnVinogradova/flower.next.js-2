import { Grid, GridItem, Box, Text, Link} from '@chakra-ui/react'
import Block from "../Special/Block.js";
import { Image } from '@chakra-ui/react'
export default function OfferDay() {
	return <>
	  <Box>
      <Text fontSize="xl" fontWeight="bold" mb={2}>
	  Предложения дня
      </Text>
      <Text>*На товары раздела скидка не распространяется</Text>
      <Link href="/catalog" color="blue.500" mt={2}>
	  Перейти в каталог
      </Link>
    </Box>
		<Grid templateColumns='repeat(4, 1fr)' gap={4}>
      <GridItem>
        <Image src="/img/main/OfferDay/1668726304_31456983.jpg" alt='Изображение'></Image>
        <Block title='Сальма' price='3790 RUB' />
      </GridItem>
      <GridItem>
        <Image src="/img/main/OfferDay/1673779726_35502789.jpg" alt='Изображение'></Image>
        <Block title='С днём рождения' price='3400 RUB' />
      </GridItem>
      <GridItem>
        <Image src="/img/main/OfferDay/1675855271_60856222.jpg" alt='Изображение'></Image>
        <Block title='Дыхание весны' price='5100 RUB' />
      </GridItem>
      <GridItem>
        <Image src="/img/main/OfferDay/1680428318_91921739.jpg" alt='Изображение'></Image>
        <Block title='Улыбка лета' price='5090 RUB' />
      </GridItem>
	  <GridItem>
	  <Image src="/img/main/OfferDay/1681119251_95097466.jpg" alt='Изображение' ></Image>
		<Block title='Пенни Лейн' price='3000 RUB' />
		</GridItem>
		<GridItem>
		<Image src="/img/main/OfferDay/1681928781_63651777.jpg" alt='Изображение' ></Image>
		<Block title='Дэни Бой' price='1800 RUB' />
		</GridItem>
		<GridItem>
		<Image src="/img/main/OfferDay/1682421632_37651871.jpg" alt='Изображение' ></Image>
		<Block title='Божество' price='5500 RUB' />
		</GridItem>
		<GridItem>
		<Image src="/img/main/OfferDay/1681382334_16030960.jpg" alt='Изображение' ></Image>
		<Block title='Восторг' price='2100 RUB' />
		</GridItem>
    </Grid>
	</>;
}