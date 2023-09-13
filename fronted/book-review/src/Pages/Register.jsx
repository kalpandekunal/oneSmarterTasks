import React from 'react'
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Image,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import { useNavigate } from 'react-router-dom'
import { signup } from '../Redux/Authentication/action'
import { useDispatch } from 'react-redux'

export const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
    
  const dispatch = useDispatch();

    const navigate = useNavigate()
    // const getStrength = (password) => {
    //     console.log(password);

    //     let strengthIndicator: Number = -1;

    //     let upper = false,
    //         lower = false,
    //         numbers = false;

    //     for (let index = 0; index < password.length; index++) {
    //         let char = password.charCodeAt(index);
    //         if (!upper && char >= 65 && char <= 90) {
    //             upper = true;
    //             strengthIndicator++;
    //         }

    //         if (!numbers && char >= 48 && char <= 57) {
    //             numbers = true;
    //             strengthIndicator++;
    //         }

    //         if (!lower && char >= 97 && char <= 122) {
    //             lower = true;
    //             strengthIndicator++;
    //         }
    //     }

    //     setStrength(strengthLabels[strengthIndicator] ?? "");
    // };

    const handleSignup = () => {
      const userData = {
        name,
        email,
        password,
    }

    dispatch(signup(userData))
    .then((res)=>{
        alert("Signup Successfull");
        navigate("/login");
        
    })
    setName("");
    setEmail("");
    setPassword("");
       
    }




  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
    <Flex
      p={8} flex={1} align={'center'} justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6} w={'full'}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <HStack>
              <Box>
                <FormControl id="firstName" isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" value={name} onChange={(e)=> setName(e.target.value)} required/>
                </FormControl>
              </Box>
              
            </HStack>
            <FormControl id="email" isRequired>
              <FormLabel>Email address</FormLabel>
              <Input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() => setShowPassword((showPassword) => !showPassword)}>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleSignup}
                >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user? <Link to='/login' color={'blue.400'}>Login</Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
    <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  )
}

