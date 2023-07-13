import { Box, Button, Text } from "@chakra-ui/react";

export default function FlowerBlock(props) {
  return (
    <Box>
      <Text>{props.title}</Text>
      <Text>{props.price}</Text>
      <Button>Заказать</Button>
      <Text>Купить в 1 клик</Text>
    </Box>
  );
}