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
            <Navbar username={user_address}/>
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
                                <VideoCard profile='favicon.ico' image='mondstadt.jpg' title={`Genshin Mondstadt Region`} text='Land of Anemo - God of Freedom'/>
                            )}
                            {videoIndex === 1 && (
                                <VideoCard profile='favicon.ico' image='liyue.jpg' title={`Genshin Liyue Region`} text='Land of Geo - God of Contract'/>
                            )}
                            {videoIndex === 2 && (
                                <VideoCard profile='favicon.ico' image='fontaine.jpg' title={`Genshin Fontaine Region`} text='Land of Hydro - God of Justice'/>
                            )}
                        </WrapItem>
                    );
                })}
            </Wrap>
        </Flex>
    );
}

export default Home;