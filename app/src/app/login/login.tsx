'use client'
import React from 'react';
import { Flex, Heading, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';

const Login = () => {
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <Flex width={'100vw'} height={'100vh'} justifyContent={'center'} alignItems={'center'}>
            <Flex flexDirection={'column'} gap={16} alignItems={'center'}>
                <Heading>Welcome back!</Heading>
                <Flex flexDirection={'column'} gap={4}>
                    <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input type="username" placeholder='Enter username' />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
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
                    </FormControl>
                </Flex>
                <Button width={'100%'} colorScheme='blue'>Login</Button>
            </Flex>
        </Flex>
    )
}

export default Login;
