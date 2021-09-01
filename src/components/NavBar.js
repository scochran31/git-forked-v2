import React from 'react'
import { ColorModeSwitcher } from '../ColorModeSwitcher'
import { Box, Flex, Text, useColorModeValue } from '@chakra-ui/react'
import NavMenu from './NavMenu'

function Nav() {
    const color = useColorModeValue('whiteAlpha.700', 'blackAlpha.700')

    return (
        <Flex
            h={150}
            fontWeight='bold'
            fontStyle='italic'
            fontSize='36px'
            justify='space-between'
            p={5}
            backgroundColor={color}
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
