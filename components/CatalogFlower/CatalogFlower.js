import Block from "../Special/Block"
import { Box, Text, Image, Flex, Icon,Button } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"

export default function CatalogFlower() {
	return <>
		  <Flex alignItems="center" justifyContent="space-between">
      <Text fontWeight="bold" fontSize="xl">Сортировка:</Text>
      <Flex alignItems="center">
        <Box marginRight={2}>
          <Text>по популярности</Text>
        </Box>
        <Box marginRight={2}>
          <Text>по цене</Text>
        </Box>
        <Icon as={ChevronDownIcon} boxSize={4} />
      </Flex>
    </Flex>
		<Image src="/img/Catalog/VAL_8182_1200 1 (1).jpg"></Image>
		<Block title='Большой букет розовых гортензий и роз' price='6100 RUB' />
		<Image src="/img/Catalog/VAL_8182_1200 1 (2).jpg"></Image>
		<Block title='Белое сочувствие' price='4300 RUB' />
		<Image src="/img/Catalog/VAL_8182_1200 1 (3).jpg"></Image>
		<Block title='Аранжировка' price='3200 RUB' />
		<Image src="/img/Catalog/VAL_8182_1200 1 (4).jpg"></Image>
		<Block title='Анабель' price='3700 RUB' />
		<Image src="/img/Catalog/VAL_8182_1200 1 (5).jpg"></Image>
		<Block title='Яркий розовый букет' price='4500 RUB' />
		<Image src="/img/Catalog/VAL_8182_1200 1 (6).jpg"></Image>
		<Block title='Розы и гортензия' price='3800 RUB' />
		<Image src="/img/Catalog/VAL_8182_1200 1 (7).jpg"></Image>
		<Block title='Чистая элегантность' price='4100 RUB' />
		<Image src="/img/Catalog/VAL_8182_1200 1 (8).jpg"></Image>
		<Block title='Микс букет' price='5600 RUB' />
		<Image src="/img/Catalog/VAL_8182_1200 1 (9).jpg"></Image>
		<Block title='Микс букет' price='5600 RUB' />
		<Image src="/img/Catalog/VAL_8182_1200 1 (10).jpg"></Image>
		<Block title='Микс букет' price='5600 RUB' />
		<Image src="/img/Catalog/VAL_8182_1200 1 (11).jpg"></Image>
		<Block title='Микс букет' price='5600 RUB' />
		<Image src="/img/Catalog/VAL_8182_1200 1 (12).jpg"></Image>
		<Block title='Микс букет' price='5600 RUB' />
		<Image src="/img/Catalog/VAL_8182_1200 1 (13).jpg"></Image>
		<Block title='Микс букет' price='5600 RUB' />
		<Image src="/img/Catalog/VAL_8182_1200 1 (14).jpg"></Image>
		<Block title='Микс букет' price='5600 RUB' />
		<Image src="/img/Catalog/VAL_8182_1200 1 (15).jpg"></Image>
		<Block title='Микс букет' price='5600 RUB' />
		<Image src="/img/Catalog/VAL_8182_1200 1 (16).jpg"></Image>
		<Block title='Микс букет' price='5600 RUB' />
		<Image src="/img/Catalog/VAL_8182_1200 1 (17).jpg"></Image>
		<Block title='Микс букет' price='5600 RUB' />
		<Image src="/img/Catalog/VAL_8182_1200 1 (18).jpg"></Image>
		<Block title='Микс букет' price='5600 RUB' />
		<Image src="/img/Catalog/VAL_8182_1200 1 (19).jpg"></Image>
		<Block title='Микс букет' price='5600 RUB' />
		<Image src="/img/Catalog/VAL_8182_1200 1 (20).jpg"></Image>
		<Block title='Микс букет' price='5600 RUB' />
		<Image src="/img/Catalog/VAL_8182_1200 1 (21).jpg"></Image>
		<Block title='Микс букет' price='5600 RUB' />
		<Image src="/img/Catalog/VAL_8182_1200 1 (22).jpg"></Image>
		<Block title='Микс букет' price='5600 RUB' />
		<Image src="/img/Catalog/VAL_8182_1200 1.jpg"></Image>
		<Block title='Микс букет' price='5600 RUB' />
		<Box>
			<Button>Смотреть ещё</Button>
		</Box>
	</>;
}