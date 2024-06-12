'use client'
import React, { useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { VideoCard } from '@/components/VideoCard';
import { Box, Flex, Heading, Text, Wrap, WrapItem } from '@chakra-ui/react';
import Cookies from 'js-cookie';

const Home = () => {
    const [tokenIds, setTokenIds] = useState([]);
    const user_address = Cookies.get('sessionToken');
    console.log('User Address:', user_address);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`/api/nft/${user_address}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setTokenIds(data.data);
                console.log('TokenIds:', data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        if (user_address) {
            fetchData();
        }
    }, [user_address]);

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
                {tokenIds.map((tokenId, index) => {
                    const videoIndex = index % 3;
                    return (
                        <WrapItem key={index}>
                            {videoIndex === 0 && (
                                <VideoCard profile='favicon.ico' image='vercel.svg' title={`Genshin Full Story Before Natlan MOD 0`} text='Video Description Lorem ipsum'/>
                            )}
                            {videoIndex === 1 && (
                                <VideoCard profile='favicon.ico' image='vercel.svg' title={`Genshin Full Story Before Natlan MOD 1`} text='Video Description Lorem ipsum'/>
                            )}
                            {videoIndex === 2 && (
                                <VideoCard profile='favicon.ico' image='vercel.svg' title={`Genshin Full Story Before Natlan MOD 2`} text='Video Description Lorem ipsum'/>
                            )}
                        </WrapItem>
                    );
                })}
            </Wrap>
        </Flex>
    );
}

export default Home;