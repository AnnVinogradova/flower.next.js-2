import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";

export default function Categories() {
  return (
    <Box>
      <Flex as="ul" flexWrap="wrap" listStyleType="none" spacing={4}>
        <CategoryItem
          src="/img/Main/Categories/8.png"
          label="Подарочные корзины и наборы"
        />
        <CategoryItem
          src="/img/Main/Categories/1.png"
          label="Пионы"
        />
        <CategoryItem
          src="/img/Main/Categories/2.png"
          label="Букеты"
          link="/ProductCard"
        />
        <CategoryItem
          src="/img/Main/Categories/11.png"
          label="Композиции"
        />
        <CategoryItem
          src="/img/Main/Categories/5.png"
          label="Цветы в коробке"
        />
        <CategoryItem
          src="/img/Main/Categories/10.png"
          label="Мягкие игрушки"
        />
        <CategoryItem
          src="/img/Main/Categories/3.png"
          label="Воздушные шары"
        />
        <CategoryItem
          src="/img/Main/Categories/4.png"
          label="Цветы в корзине"
        />
        <CategoryItem
          src="/img/Main/Categories/6.png"
          label="Сухие цветы"
        />
        <CategoryItem
          src="/img/Main/Categories/7.png"
          label="Монобукеты"
        />
      </Flex>
    </Box>
  );
}

function CategoryItem({ src, label, link }) {
  return (
    <Box as="li" textAlign="center" width="20%">
      <VStack spacing={2}>
        <Image src={src} width={50} height={50} />
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

