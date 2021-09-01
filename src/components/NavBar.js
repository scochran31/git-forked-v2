import React from 'react'
import { ColorModeSwitcher } from '../ColorModeSwitcher'
import { Box, Flex, Text } from '@chakra-ui/react'
import NavMenu from './NavMenu'

function Nav() {
    return (
        <Flex
            h={150}
            fontWeight='bold'
            fontStyle='italic'
            fontSize='36px'
            justify='space-between'
            p={5}
            backgroundColor='gray.500'
            align='center'
        >
            <Box>
                <NavMenu />
            </Box>
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
