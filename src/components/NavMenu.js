import React from 'react'
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import { NavLink } from 'react-router-dom'

function NavMenu() {
    return (
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<HamburgerIcon />}
                variant='ghost'
            />
            <MenuList fontSize='md'>
                <MenuItem>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink to='/contact'>
                        Contact
                    </NavLink>
                </MenuItem>
            </MenuList>

        </Menu>
    )
}

export default NavMenu
