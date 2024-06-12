import React from 'react';
import { Button, Flex, Image, Text } from '@chakra-ui/react';

export const Navbar = ({username} : {username: string}) => {
  return (
    <Flex width={'100%'} px={20} py={4} flexDirection={'row'} justifyContent={'space-between'}>
        <Image src='newflix_logo.png' width={10}/>
        <Flex alignItems={'center'} gap={8}>
            <Text>Hi, {username}!</Text>
            <Button colorScheme={'red'} variant={'outline'}>Log Out</Button>
        </Flex>
    </Flex>
  )
}
