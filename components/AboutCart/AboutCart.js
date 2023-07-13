import { useState, useEffect } from 'react';
import Gift from '../Gifts/Gift.js'
import { Link as ChakraLink, Button, Box, Text, Heading} from '@chakra-ui/react'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Table,
  Tbody,
  Tr,
  Td,
  Image,
  Input,
} from '@chakra-ui/react'

export default function AboutCart() {
  const [items, setItems] = useState([
    { id: 1, image: '/img/Catalog/VAL_8182_1200 1 (1).jpg', name: 'Большой букет розовых гортензий и роз', price: 6200, quantity: 0 },
    { id: 2, image: '/img/Catalog/VAL_8182_1200 1 (2).jpg', name: 'Белое сочувствие', price: 4300, quantity: 0 },
    { id: 3, image: '/img/Catalog/VAL_8182_1200 1 (3).jpg', name: 'Аранжировка', price: 3200, quantity: 0 },
    { id: 4, image: '/img/Catalog/VAL_8182_1200 1 (4).jpg', name: 'Анабель', price: 3700, quantity: 0 },
  ]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateTotal();
  }, [items]);

  const handleIncreaseQuantity = (item) => {
    const newItems = [...items];
    const index = newItems.findIndex((i) => i.id === item.id);
    newItems[index].quantity += 1;
    setItems(newItems);
  };

  const handleDecreaseQuantity = (item) => {
    const newItems = [...items];
    const index = newItems.findIndex((i) => i.id === item.id);
    if (newItems[index].quantity > 0) {
      newItems[index].quantity -= 1;
      setItems(newItems);
    }
  };

  const calculateTotal = () => {
    const newTotal = items.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotal(newTotal);
  };

  const handlePay = () => {
    setItems([]);
    setTotal(0);
  };

  return <>
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="main">Главная</BreadcrumbLink>
      </BreadcrumbItem>

      <BreadcrumbItem>
        <BreadcrumbLink href="cart">Корзина</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <Heading>Корзина</Heading>
    <Table>
      <Tbody>
        {items.map((item) => (
          <Tr key={item.id}>
            <Td>
              <Image
                src={item.image}
                alt={item.name}
                width={126}
                height={130}
              />
            </Td>
            <Td>{item.name}</Td>
            <Td>{item.price}RYB</Td>
            <Td>
              <Button onClick={() => handleDecreaseQuantity(item)}>-</Button>
              {item.quantity}
              <Button onClick={() => handleIncreaseQuantity(item)}>+</Button>
            </Td>
            <Td>{item.price * item.quantity}</Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
    <Input type='text' placeholder='Введите промокод'></Input>
    <Button>Применить</Button>
    <Box>
      <Text>К оплате {total}RYB</Text>
      <Button colorScheme="teal" size="lg" mt={4}>
        Перейти к оформлению
      </Button>
    </Box>
    <Gift />
  </>
};