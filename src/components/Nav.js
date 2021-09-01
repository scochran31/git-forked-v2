import React from 'react'
import { ColorModeSwitcher } from '../ColorModeSwitcher'
import { Box, Flex, Text } from '@chakra-ui/react'

function Nav() {
    return (
        <Flex
            h={150}
            fontWeight='bold'
            fontStyle='italic'
            fontSize='36px'
            justify='space-between'
            p={5}
        >
            <Box>
                <Text fontWeight='bold' fontStyle='italic'>Git Forked</Text>
            </Box>
            <Box justifySelf='flex-end'>
                <ColorModeSwitcher />
            </Box>
        </Flex>
    )
}

export default Nav
