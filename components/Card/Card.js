
import Gift from '../Gifts/Gift.js';
import { Box, Image, Text, VStack, HStack, Select, Button } from '@chakra-ui/react';

export default function Card() {
 return (
  <Box>
   <VStack spacing={4}>
    <Image src="img/ProductCard/Frame 1463.png" />
    <Text>123 отзыва</Text>
    <Text>Размер:</Text>
    <Text>30 см</Text>
   </VStack>
   <VStack spacing={4}>
    <Image src="img/ProductCard/VAL_8182_1200 2.jpg" />
    <Text>Букет «Вдохновение»</Text>
    <Text>Доставка в пределах Москвы — Бесплатно</Text>
   </VStack>
   <VStack spacing={4}>
    <Text>Каждая девушка ждет от кавалера на свидании традиционный знак внимания – цветы. Этот нежный букет подойдет для тонкой романтической утонченной натуры.</Text>
   </VStack>
   <VStack spacing={4}>
    <Text>Выберите размер букета:</Text>
    <HStack>
     <Text>Стандарт</Text>
     <Text>1250 RUB</Text>
    </HStack>
    <HStack>
     <Text>Стандарт +30%</Text>
     <Text>1780 RUB</Text>
    </HStack>
    <HStack>
     <Text>Стандарт +60%</Text>
     <Text>2420 RUB</Text>
    </HStack>
   </VStack>
   <VStack spacing={4}>
    <Text>Выберите количество цветов:</Text>
    <Select>
     <option value="11">11</option>
     <option value="15">15</option>
     <option value="21">21</option>
     <option value="25">25</option>
     <option value="35">35</option>
     <option value="45">45</option>
     <option value="51">51</option>
     <option value="101">101</option>
    </Select>
   </VStack>
   <VStack spacing={4}>
    <Text>Выберите ростовку роз:</Text>
    <HStack>
     <Text>40 см</Text>
     <Text>1250 RUB</Text>
    </HStack>
    <HStack>
     <Text>50 см</Text>
     <Text>1550 RUB</Text>
    </HStack>
    <HStack>
     <Text>70 см</Text>
     <Text>1780 RUB</Text>
    </HStack>
   </VStack>
   <VStack spacing={4}>
    <Button>Заказать</Button>
    <Button>Купить в 1 клик</Button>
   </VStack>
   <VStack spacing={4}>
    <Image src="img/ProductCard/Frame.svg" />
    <Text>Состав</Text>
    <Image src="img/ProductCard/chevron-down.png" />
   </VStack>
   <VStack spacing={4}>
    <ul>
     <li>Роза кремовая 50см<span>3 шт</span></li>
     <li>Роза розовая 50см<span>2 шт</span></li>
     <li>Гвоздики<span>3 шт</span></li>
     <li>Хризантема кустовая<span>2 шт</span></li>
     <li>Лизиантус<span>3 шт</span></li>
     <li>Маттиола<span>2 шт</span></li>
     <li>Добавления<span>Фисташка</span></li>
     <li>Упаковка<span>фетр, крафт или пленка матовая, лента</span></li>
    </ul>
   </VStack>
   <Gift />
  </Box>
 );
}



