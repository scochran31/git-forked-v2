import React from 'react'
import { ColorModeSwitcher } from '../ColorModeSwitcher'
import { Box, Text } from '@chakra-ui/react'

function Nav() {
    return (
        <Box h={150} fontWeight='bold' fontStyle='italic' display='inline-flex' justify='space-between'>
            <Text fontWeight='bold' fontStyle='italic'>Git Forked</Text>
            <ColorModeSwitcher />
        </Box>
    )
}

export default Nav
