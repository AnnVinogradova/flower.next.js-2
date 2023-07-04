import React from 'react';
import { Box, Heading, Button, Input, InputGroup, InputRightElement} from '@chakra-ui/react'
export default function Enter() {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)
	return <>
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
            <Button colorScheme="green">Вход</Button>
            </Box>
      </Box>
	</>;
}