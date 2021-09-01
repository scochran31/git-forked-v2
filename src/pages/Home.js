import { Box, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

function Home() {
    const color = useColorModeValue('whiteAlpha.700', 'blackAlpha.700')

    return (
        <Box
            p={5}
            m={3}
            borderRadius='50px'
            shadow='md'
            borderWidth='2px'
            bgColor={color}
            textAlign='center'
        >
            <Box p={5} align='center' justify='center'>
                <Text fontSize={24} borderBottom='1px'>
                Welcome to Git Forked v2!
                </Text>
            </Box>
            <Box p={5} borderBottom='1px'>
                <Text>
                    Search for nearby eateries and get your grub on! "Dish" your favorites with your friends, share pictures, and talk of new finds on the dishboard.
                </Text>
            </Box>
            <Box p={5}>
                <Text>
                    Looking for new foodie friends?
                    Look no further than the community dining room to find others with similar eating interests. Share food takes, get to know one another, and enjoy the happiness that food brings!
                </Text>
            </Box>
        </Box>
    )
}

export default Home
