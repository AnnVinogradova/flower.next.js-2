import { Box, Flex, Image, Text, VStack, url } from "@chakra-ui/react";

export default function Categories() {
  return (
    <Box>
      <Flex as="ul" flexWrap="wrap" listStyleType="none" spacing={4}>
        <CategoryItem
          imageSrc="/img/Main/Categories/1.png.png"
          label="Пионы"
        />
        <CategoryItem
          imageSrc="/img/Main/Categories/2.png.png"
          label="Букеты"
          link="/ProductCard"
        />
        <CategoryItem
          imageSrc="/img/Main/Categories/3.png.png"
          label="Воздушные шары"
        />
        <CategoryItem
          imageSrc="/img/Main/Categories/4.png.png"
          label="Цветы в корзине"
        />
        <CategoryItem
          imageSrc="/img/Main/Categories/5.png.png"
          label="Цветы в коробке"
        />
        <CategoryItem
          imageSrc="/img/Main/Categories/6.png.png"
          label="Сухие цветы"
        />
        <CategoryItem
          imageSrc="/img/Main/Categories/7.png.png"
          label="Монобукеты"
        />
        <CategoryItem
          imageSrc="/img/Main/Categories/8.png.png"
          label="Фруктовые букеты"
        />
        <CategoryItem
          imageSrc="/img/Main/Categories/9.png.png"
          label="Подарочные корзины и наборы"
        />
        <CategoryItem
          imageSrc="/img/Main/Categories/10.png.png"
          label="Мягкие игрушки"
        />
       <CategoryItem
  		imageSrc="/img/Main/Categories/11.png.png"
  		label="Композиции"/>
      </Flex>
    </Box>
  );
}

function CategoryItem({ imageSrc, label, link }) {
  return (
    <Box as="li" textAlign="center" width={["50%", "33.33%", "25%"]}>
      <VStack spacing={2}>
        <Image src={imageSrc} width={50} height={50} />
        {link ? (
          <Text as="a" href={link}>
            {label}
          </Text>
        ) : (
          <Text>{label}</Text>
        )}
      </VStack>
    </Box>
  );
}