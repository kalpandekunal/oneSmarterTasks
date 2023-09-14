'use client'

import {
  Box,
  Flex,
  Text,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Show,
  Hide,
  InputRightAddon,
  InputGroup,
  Input,
  useDisclosure,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import "./Navbar.css";
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import { Link, useNavigate } from 'react-router-dom';
import { MenuDrawer } from './MenuDrawer';
import { Connect, connect, useSelector } from 'react-redux';
import { searchProduct } from '../Redux/Product/action';
import { SearchBook } from './searchbook';

interface Props {
  children: React.ReactNode
}

const NavLink = (props: Props) => {
  const { children } = props

  return (
    <Box
      as="a"
      px={2}
      py={1}
      rounded={'md'}
      _hover={{
        textDecoration: 'none',
        bg: useColorModeValue('gray.200', 'gray.700'),
      }}
      href={'#'}>
      {children}
    </Box>
  )
}

 export const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [search,setSearch] = useState('');
  const [searchInput,setSearchInput] = useState('');
  const { colorMode, toggleColorMode } = useColorMode()

  
  const handleSearch = ()=>{
      searchProduct(search);
  }

  // useEffect(()=>{
  //   handleSearch();
  // },[search])

  const isToken = useSelector(store => store.authReducer.token);

  const navigate = useNavigate();

  const handleLogout = ()=>{
    localStorage.removeItem("token");
    navigate('/login');
  }


  return (
    
      <Box bg={useColorModeValue('gray.100', 'gray.900')} px={4} position='fixed' zIndex='1' width='100%' top='0px'>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Link to='/'><Box className='logo'>The Right Book</Box></Link>

          <Hide breakpoint='(max-width:901px)'>
          <div className="search-bar">
            
          <input
             type="search"
             placeholder="Search..."
             value={search}
             onChange={(e) => setSearch(e.target.value)}
           />
           <button type="submit" onClick={handleSearch}></button>
           <SearchBook searchInput={search}/>
        </div>
        
        <label className='menu-button-container' id="menu-toggle"></label>
        <div className='menu-button'></div>
        
        {/* <InputGroup>
        <InputRightAddon
        p={0}
        border={"none"}>
          
        </InputRightAddon>
        </InputGroup> */}
        
          <Flex alignItems={'center'} width='30%' justifyContent='space-between' fontSize='16px' className='menu'>
              <Link to='/'>
                <Text _hover={{"color":"orange"}} className='li' fontWeight={'bold'}>Home</Text>
              </Link>
              <Link to='/dashboard'>
                <Text _hover={{"color":"orange"}} className='li' fontWeight={'bold'}>Dashboard</Text>
              </Link>
              { 
                  isToken ? <Text _hover={{"color":"orange"}} className='li' onClick={handleLogout} fontWeight={'bold'} cursor={'pointer'}>Logout</Text> : 
                  <Link to='/Login'>
                    <Text _hover={{"color":"orange"}} className='li' fontWeight={'bold'} >Login</Text>
                  </Link>
              }
              <Link to='/signup'>
                <Text _hover={{"color":"orange"}} className='li' fontWeight={'bold'}>Signup</Text>
              </Link>
            <Stack direction={'row'} spacing={7}>
                <Button onClick={toggleColorMode} _hover={{"backgroundColor":"cyan"}}>
                    {colorMode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
              </Button>
            </Stack>
          </Flex>
          </Hide>
          
          <Show breakpoint='(max-width : 900px)'>
          < MenuDrawer />
          </Show>
        </Flex>
      </Box>
   
   
  )
}

