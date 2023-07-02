import { useEffect, useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";

export default function OrderSummary() {
	const orderAmount = 100;
	const [items, setItems] = useState([]);

	useEffect(() => {
		// Не знаю можно так или нет, но можно ли все данные запрашивать с бэка? Данные о товарах, фото, скидках и т.д. 
		const fetchItems = async () => {
			try {
				const response = await fetch("URL_TO_BACKEND_API");
				const data = await response.json();
				setItems(data.items);
			} catch (error) {
				console.error(error);
			}
		};

		fetchItems();
	}, []);

	const totalAmount = items.reduce(
		(acc, item) => acc + item.quantity * (item.price - item.discount),
		0
	);

	return <>
		<Box>
			<Text>К оплате {orderAmount}RUB</Text>

			<Text>Товары:</Text>
			{items.map((item, index) => (
				<Text key={index}>
					- {item.name} x {item.quantity} = {item.quantity * (item.price - item.discount)}
					(Скидка: {item.discount}, Сумма со скидкой: {item.quantity * (item.price - item.discount)})
				</Text>
			))}

			<Text>Общая сумма: {totalAmount}</Text>

			<Button colorScheme="teal" size="lg" mt={4}>
				Перейти к оплате
			</Button>
		</Box>
	</>;
};