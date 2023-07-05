import { useSession, signIn, signOut } from 'next-auth/react';
import React from 'react';
import { Box, Heading, Button, Input, InputGroup, InputRightElement} from '@chakra-ui/react'

export default function Enter() {
  const { data: session } = useSession();
  if (session && session.user) {
		console.log('user=', session.user);
		console.log('session=', session);
    
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
	return <>
  {session.user?.email} 
  {session.user?.phone} 
    <Box>
    <Heading>
          Вход в личный кабинет
        </Heading>
        <Box>
        <Input type="text" placeholder='Введите телефон или электронную почту' />
            </Box>
            <Box>
            <InputGroup size='md'>
      <Input
        pr='4.5rem'
        type={show ? 'text' : 'password'}
        placeholder='Enter password'
      />
      <InputRightElement width='4.5rem'>
        <Button h='1.75rem' size='sm' onClick={handleClick}>
          {show ? 'Hide' : 'Show'}
        </Button>
      </InputRightElement>
    </InputGroup>
            </Box>
            <Box>
            <Button colorScheme="blue">Регистрация</Button>
            <Button colorScheme="green" onClick={() => signIn()}>Вход</Button>
            </Box>
      </Box>
	</>;
}
}