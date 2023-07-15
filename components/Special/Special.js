import { Grid, GridItem, Box, Text, Link} from '@chakra-ui/react'
import Block from "./Block";
import { Image } from '@chakra-ui/react'
export default function Special() {
	return <>
		<Box>
      <Text fontSize="xl" fontWeight="bold" mb={2}>
	  С цветами покупают
      </Text>
      <Text>*На товары раздела скидка не распространяется</Text>
      <Link href="/catalog" color="blue.500" mt={2}>
	  Перейти в каталог
      </Link>
    </Box>
		<Grid templateColumns='repeat(4, 1fr)' gap={4}>
      <GridItem>
        <Image src="/img/main/Gift/2031-igrushka-1-250x333.jpeg" alt='Изображение'></Image>
        <Block title='Медвежёнок' price='1500 RUB' />
      </GridItem>
      <GridItem>
        <Image src="/img/main/Gift/1677741738_30253054.jpg" alt='Изображение'></Image>
        <Block title='Открытка котик' price='150 RUB' />
      </GridItem>
      <GridItem>
        <Image src="/img/main/Gift/1677741836_49798389.jpg" alt='Изображение'></Image>
        <Block title='Открытка с 8 марта' price='130 RUB' />
      </GridItem>
      <GridItem>
        <Image src="/img/main/Gift/konfety-fereyro-roshe-250x333.jpg" alt='Изображение'></Image>
        <Block title='Ferrero Rocher средняя упаковка' price='430 RUB' />
      </GridItem>
	  <GridItem>
	  <Image src="/img/main/Gift/lateks-30sm-den-rozhdenija_0003_4-250x333.jpg" alt='Изображение' ></Image>
		<Block title='Гелиевые шары "Королева"' price='200 RUB' />
		</GridItem>
		<GridItem>
		<Image src="/img/main/Gift/lateks-30sm-den-rozhdenija_0005_6-250x333.jpg" alt='Изображение' ></Image>
		<Block title='Гелиевые шары "С днём рождения"' price='200 RUB' />
		</GridItem>
		<GridItem>
		<Image src="/img/main/Gift/otkrytka-na-14-fevralya-8-250x333.jpg" alt='Изображение' ></Image>
		<Block title='Открытка' price='100 RUB' />
		</GridItem>
		<GridItem>
		<Image src="/img/main/Gift/raf-small-250x333.jpg" alt='Изображение' ></Image>
		<Block title='Raffaello маленькая' price='380 RUB' />
		</GridItem>
    </Grid>
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
        <Image src='/img/main/Special/1681382334_16030960.jpg' alt='Изображение'></Image>
        <Block title='Букет счастья' price='1250 RUB' />
      </GridItem>
      <GridItem>
        <Image src='/img/main/Special/1671114962_22201752.jpg' alt='Изображение'></Image>
        <Block title='Амаретти' price='1400 RUB' />
      </GridItem>
      <GridItem>
        <Image src='/img/main/Special/1673694378_95135224.jpg' alt='Изображение'></Image>
        <Block title='Вальс' price='2400 RUB' />
      </GridItem>
      <GridItem>
        <Image src='/img/main/Special/1673701807_98835435.jpg' alt='Изображение'></Image>
        <Block title='Левитация' price='1850 RUB' />
      </GridItem>
	  <GridItem>
	  <Image src="/img/main/Special/1673970582_20199143.jpg" alt='Изображение' ></Image>
		<Block title='Тироль' price='1650 RUB' />
		</GridItem>
		<GridItem>
		<Image src="/img/main/Special/1677613137_11189101.jpg" alt='Изображение' ></Image>
		<Block title='Нежное сердце' price='3000 RUB' />
		</GridItem>
		<GridItem>
		<Image src="/img/main/Special/1678747065_62899972.jpg" alt='Изображение' ></Image>
		<Block title='Джей Стрит' price='1400 RUB' />
		</GridItem>
		<GridItem>
		<Image src="/img/main/Special/1681394858_48426908.jpg" alt='Изображение' ></Image>
		<Block title='Восторг' price='2100 RUB' />
		</GridItem>
    </Grid>
	</>;
}