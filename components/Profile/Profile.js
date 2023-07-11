import React from 'react';
import { Box, Flex, Text, VStack, Divider, Button } from '@chakra-ui/react';

export default function Profile() {
	const handleSignOut = () => {
		signOut();
	};
	return (
		<Flex>
			<Box w="300px" bg="gray.100" p={4}>
				<VStack spacing={4} align="start">
					<Button colorScheme="blue">Профиль</Button>
					<Button colorScheme="blue">Заказы</Button>
					<Button colorScheme="blue">Уведомления</Button>
					<Button colorScheme="blue">Избранное</Button>
				</VStack>
			</Box>
			<Box p={4}>
				<Text fontSize="xl" fontWeight="bold">Личный кабинет</Text>
				<Divider my={4} />
				<Box>
					<Text>Профиль</Text>
				</Box>
				<Box>
					<Text>Заказы</Text>
				</Box>
				<Box>
					<Text>Уведомления</Text>
				</Box>
				<Box>
					<Text>Избранное</Text>
				</Box>
				<Box>
					<Text>Бонусы на счете</Text>
				</Box>
				<Box>
					<Text>Количество бонусов</Text>
				</Box>
			</Box>
			<Box>
				<Button colorScheme="green" onClick={handleSignOut}>
					Выход
				</Button>
			</Box>
		</Flex>
	);
}