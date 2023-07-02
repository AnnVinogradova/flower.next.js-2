import { useState } from "react";
import OrderSummary from '../OrderSummary/OrderSummary.js'
import { Stack, Button, FormControl, FormLabel, Input, Box, Heading, Text, Checkbox, Textarea } from '@chakra-ui/react'
export default function Ordering() {
	const [deliveryMethod, setDeliveryMethod] = useState("");
	const [deliveryTimeFrom, setDeliveryTimeFrom] = useState("");
	const [deliveryTimeTo, setDeliveryTimeTo] = useState("");
	const [deliveryDate, setDeliveryDate] = useState("");
	const [deliveryAddress, setDeliveryAddress] = useState("");
	const [entrance, setEntrance] = useState("");
	const [apartment, setApartment] = useState("");
	const [floor, setFloor] = useState("");
	const [street, setStreet] = useState("");
	const [house, setHouse] = useState("");
	const [building, setBuilding] = useState("");
	const [paymentMethod, setPaymentMethod] = useState("");
	const [firstName, setFirstName] = useState("");
	const [middleName, setMiddleName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [recipientName, setRecipientName] = useState("");
	const [recipientPhone, setRecipientPhone] = useState("");
	const [discountCardNumber, setDiscountCardNumber] = useState("");
	const [additionalInfo, setAdditionalInfo] = useState("");
	const [lastName, setLastName] = useState("");


	const handleDeliveryChange = (event) => {
		setDeliveryMethod(event.target.value);
	};

	const handlePay = () => {
		if (deliveryMethod === "courier") {
			// обработка выбранного способа доставки курьером
		} else if (deliveryMethod === "pickup") {
			// обработка выбранного способа самовывоза
		}
		else if (paymentMethod === "cash") {
			// обработка оплаты наличными
		} else if (paymentMethod === "card") {
			// обработка оплаты картой
		} else if (paymentMethod === "online") {
			// обработка онлайн-оплаты
		}
	};

	const handlePayChange = (event) => {
		setPaymentMethod(event.target.value);
	};

	return <>
		<Box m={12} width={400}>
			<Heading>Оформление заказа</Heading>
			<FormControl>
				<FormLabel>Ваш город</FormLabel>
				<Input placeholder="Введите ваш город" value={deliveryAddress} onChange={(e) => setDeliveryAddress(e.target.value)} />
			</FormControl>
			<Text>Способ доставки</Text>
			<Checkbox value="courier" onChange={handleDeliveryChange}>
				Доставка курьером
			</Checkbox>
			<Checkbox value="pickup" onChange={handleDeliveryChange}>
				Самовывоз
			</Checkbox>
			<FormControl>
				<Text>Адрес</Text>
				<FormLabel>Время доставки</FormLabel>
				<Stack direction="row">
					<Text>С</Text>
					<Input
						placeholder="12"
						value={deliveryTimeFrom}
						onChange={(e) => setDeliveryTimeFrom(e.target.value)}
					/>
					<Text>До</Text>
					<Input
						placeholder="15"
						value={deliveryTimeTo}
						onChange={(e) => setDeliveryTimeTo(e.target.value)}
					/>
				</Stack>
			</FormControl>
			<FormControl>
				<FormLabel></FormLabel>
				<Input type="text" placeholder="Дата доставки" value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)} />
			</FormControl>
			<FormControl>
				<FormLabel></FormLabel>
				<Input value={street} placeholder="Улица" onChange={(e) => setStreet(e.target.value)} />
			</FormControl>
			<FormControl>
				<FormLabel></FormLabel>
				<Input value={house} placeholder="Дом" onChange={(e) => setHouse(e.target.value)} />
			</FormControl>
			<FormControl>
				<FormLabel></FormLabel>
				<Input value={building} placeholder="Корпус" onChange={(e) => setBuilding(e.target.value)} />
			</FormControl>
			<FormControl className="form-control">
				<FormLabel></FormLabel>
				<Input value={entrance} placeholder="Подъезд" Change={(e) => setEntrance(e.target.value)} />
			</FormControl>
			<FormControl className="form-control">
				<FormLabel></FormLabel>
				<Input value={apartment} placeholder="Квартира" onChange={(e) => setApartment(e.target.value)} />
			</FormControl>

			<FormControl className="form-control">
				<FormLabel></FormLabel>
				<Input value={floor} placeholder="Этаж" onChange={(e) => setFloor(e.target.value)} />
			</FormControl>
			<Text>Способ оплаты</Text>
			<Checkbox value="courier" onChange={handlePayChange}>
				Наличными
			</Checkbox>
			<Checkbox value="pickup" onChange={handlePayChange}>
				Картой
			</Checkbox>
			<Checkbox value="pickup" onChange={handlePayChange}>
				Онлайн
			</Checkbox>
			<Heading>Контактные данные</Heading>
			<FormControl>
				<FormLabel></FormLabel>
				<Input value={lastName} placeholder="Фамилия" onChange={(e) => setLastName(e.target.value)} />
			</FormControl>
			<FormControl>
				<FormLabel></FormLabel>
				<Input value={firstName} placeholder="Имя" onChange={(e) => setFirstName(e.target.value)} />
			</FormControl>
			<FormControl>
				<FormLabel></FormLabel>
				<Input value={middleName} placeholder="Отчество" onChange={(e) => setMiddleName(e.target.value)} />
			</FormControl>
			<FormControl>
				<FormLabel></FormLabel>
				<Input value={email} placeholder="Электронная почта" onChange={(e) => setEmail(e.target.value)} />
			</FormControl>
			<FormControl>
				<FormLabel></FormLabel>
				<Input value={phone} placeholder="Телефон" onChange={(e) => setPhone(e.target.value)} />
			</FormControl>
			<FormControl>
				<FormLabel></FormLabel>
				<Input value={recipientName} placeholder="Имя получателя" onChange={(e) => setRecipientName(e.target.value)} />
			</FormControl>
			<FormControl>
				<FormLabel></FormLabel>
				<Input value={recipientPhone} placeholder="Телефон получателя" onChange={(e) => setRecipientPhone(e.target.value)} />
			</FormControl>
			<FormControl>
				<FormLabel></FormLabel>
				<Input value={discountCardNumber} placeholder="Номер скидочной карты" onChange={(e) => setDiscountCardNumber(e.target.value)} />
			</FormControl>
			<FormControl>
				<FormLabel></FormLabel>
				<Textarea value={additionalInfo} placeholder="Дополнительная информация" width={400} onChange={(e) => setAdditionalInfo(e.target.value)} />
			</FormControl>
			<Button onClick={handlePay} m={5}>Перейти к оплате</Button>
		</Box>
		<Box>
			<OrderSummary/>
		</Box>
	</>
};