import React from 'react';
import { Flex, Card, CardBody, Image, Text, Stack } from '@chakra-ui/react';

export const VideoCard = ({image, profile, title, text} : {image: string, profile: string, title: string, text:string}) => {
  return (
    <Card>
        <CardBody>
            <Image width={400} minW={400} height={200} src={image}/>
            <Flex mt={6} flexDirection={'row'} gap={2}>
                <Image src={profile} width={10} height={10}/>
                <Stack spacing={1}>
                    <Text fontSize='xl' fontWeight={500}>{title}</Text>
                    <Text fontSize='md'>{text}</Text>
                </Stack>
            </Flex>
        </CardBody>
    </Card>
  )
}
