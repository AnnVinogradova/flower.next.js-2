import React from 'react';
import { Box, Heading, Button, Input, InputGroup, InputRightElement} from '@chakra-ui/react'
import { useSession, signIn, signOut } from 'next-auth/react';

export default function Enter() {
	const { data: session } = useSession();
	if (session && session.user) {
		console.log('user=', session.user);
		console.log('session=', session);
		return <>
		{session.user?.email} <br />
			{session?.user?.image && <img src={session?.user?.image} alt='avatar' width={50} height={50}></img>}
			{session?.user?.name}
			<hr></hr>
			<button colorScheme="green" onClick={() => signOut()}>Выход</button>
		</>;
	}
	return <>
  <Box>
    <Box>
    <Heading>
      Вход в личный кабинет
     </Heading>
            </Box>
           <Box>
           <Button colorScheme="blue">Регистрация</Button>
           <Button colorScheme="green" onClick={() => signIn()}>Вход</Button>
            </Box>
   </Box>
	</>
}


