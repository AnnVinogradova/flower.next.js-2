import { Grid, GridItem, Box, Text, Link, Heading} from '@chakra-ui/react'
import Block from "../Special/Block.js";
import { Image } from '@chakra-ui/react'
export default function Chosen() {
	return <>
	<Box>
      <Heading fontSize="xl" fontWeight="bold" mb={2}>
	  Избранное
      </Heading>
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
	</>;
}