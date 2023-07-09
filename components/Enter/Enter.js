import React from 'react';
import { Box, Heading, Button } from '@chakra-ui/react';
import { useSession, signIn } from 'next-auth/react';
import { useRouter } from 'next/router';

export default function Enter() {
	const router = useRouter();
	const { data: session } = useSession();

	React.useEffect(() => {
		if (session) {
			router.replace('/personalArea');
		}
	}, [session]);

	return <>
		<Box>
			<Box>
				<Heading>Вход в личный кабинет</Heading>
			</Box>
			<Box>
				<Button colorScheme="blue">Регистрация</Button>
				<Button colorScheme="green" onClick={() => signIn()}>
					Вход
				</Button>
			</Box>
		</Box>
	</>
}



