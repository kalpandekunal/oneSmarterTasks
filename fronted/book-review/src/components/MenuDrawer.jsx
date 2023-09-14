import { CloseIcon, HamburgerIcon } from '@chakra-ui/icons'
import { useColorMode,Button, Drawer, DrawerBody, DrawerContent,Text, DrawerHeader, DrawerOverlay, Radio, RadioGroup, Stack, useDisclosure, Box, Flex } from '@chakra-ui/react'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';

export const MenuDrawer = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')
    const { colorMode, toggleColorMode } = useColorMode()

    const navigate = useNavigate();
    
    let isToken = JSON.parse(localStorage.getItem("token")) || null;
    
    const handleLogout = ()=>{
        localStorage.removeItem("TOKEN");
        navigate('/login');
      }

  return (
    <>
      
        <HamburgerIcon onClick={onOpen} fontSize={38}/>
        
        <Drawer size={"xs"} placement={placement} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
          <Flex pr={8} justifyContent={"space-between"} alignItems={"center"}>
          {/* <Box ml={5} className='logo' fontFamily={"Fredoka"} fontWeight={"bold"} fontSize={"4xl"}>BJ</Box> */}
          <CloseIcon fontSize={20} onClick={onClose} />
          </Flex>
          <DrawerHeader fontSize={"2xl"} borderBottomWidth='1px'>Menu <Link to="/">
        </Link></DrawerHeader>
            
            
            <DrawerBody>
               
              <Link to='/'>
                <Text _hover={{"color":"orange"}} className='li' fontWeight={'bold'} onClick={onClose}>Home</Text>
              </Link>
              <Link to='/dashboard'>
                <Text _hover={{"color":"orange"}} className='li' fontWeight={'bold'} onClick={onClose}>Dashboard</Text>
              </Link>
              { isToken ? <Text _hover={{"color":"orange"}} className='li' onClick={handleLogout} fontWeight={'bold'} cursor={'pointer'}>Logout</Text>
                : 
                <Link to='/Login'><Text _hover={{"color":"orange"}} className='li' fontWeight={'bold'} onClick={onClose}>Login</Text></Link>
              }
              <Link to='/signup'>
                <Text _hover={{"color":"orange"}} className='li' fontWeight={'bold'}>Signup</Text>
              </Link>

            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
  )
}


