'use client'
import React from 'react';
import { Flex, Heading, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import { useRouter } from 'next/navigation';

const Login = () => {
    const [show, setShow] = React.useState(false);
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const router = useRouter();

    const handleClick = () => setShow(!show);

    const handleLogin = async () => {
        try {
            const response = await fetch('/api/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });
            const data = await response.json();
            if (data.success) {
                console.log('Login successful');
                router.push('/');
            } else {
                console.log('Login failed:', data.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <Flex width={'100vw'} height={'100vh'} justifyContent={'center'} alignItems={'center'}>
            <Flex flexDirection={'column'} gap={16} alignItems={'center'}>
                <Heading>Welcome back!</Heading>
                <Flex flexDirection={'column'} gap={4}>
                    <FormControl>
                        <FormLabel>Username</FormLabel>
                        <Input type="username" placeholder='Enter username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <InputGroup size='md'>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>
                </Flex>
                <Button width={'100%'} colorScheme='blue' onClick={handleLogin}>Login</Button>
            </Flex>
        </Flex>
    )
}

export default Login;
