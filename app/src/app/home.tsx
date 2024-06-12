import React from 'react';
import { Navbar } from '@/components/Navbar';
import { VideoCard } from '@/components/VideoCard';
import { Box, Flex, Heading, Text, Wrap, WrapItem } from '@chakra-ui/react';

const Home = () => {
    return (
        <Flex width={'100%'} flexDirection='column' gap={8} alignItems='center'>
            <Navbar username='Cathleen'/>
            <Flex>
                <Box>
                    <Heading size="2xl" textAlign={'center'}>
                        Welcome to Newflix!
                    </Heading>
                    <Text textAlign={'center'}>
                        This is a new streaming service that will be available soon.
                    </Text>
                </Box>
            </Flex>
            <Wrap justify={'center'}>
                <WrapItem>
                    <VideoCard profile='favicon.ico' image='vercel.svg' title='Genshin Full Story Before Natlan' text='Video Description Lorem ipsum'/>
                </WrapItem>
                <WrapItem>
                    <VideoCard profile='favicon.ico' image='vercel.svg' title='Genshin Full Story Before Natlan' text='Video Description Lorem ipsum'/>
                </WrapItem>
                <WrapItem>
                    <VideoCard profile='favicon.ico' image='vercel.svg' title='Genshin Full Story Before Natlan' text='Video Description Lorem ipsum'/>
                </WrapItem>
            </Wrap>
        </Flex>
    );
}

export default Home;