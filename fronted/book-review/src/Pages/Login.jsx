import React, { useState } from 'react';
import { login } from '../Redux/Authentication/action';
import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
} from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch();

    const auth = useSelector(store => store.authReducer.isAuth);
    const err = useSelector(store => store.authReducer.isError)

    const location = useLocation();
    const navigate = useNavigate();


    const handleSubmit = ()=>{
      const userData = {
          email,
          password,
      }

      dispatch(login(userData))
      .then((res)=>{
          alert("Login Successfull");
          if(location.state === null){
            navigate("/")
          }
          else{
            navigate(location.state, {replace : true});
          }
          
          
      })
      setEmail("");
      setPassword("");
  }

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }} >
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>{ auth ? "Sign in Successful !!" : "Sign in to your account"}</Heading>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Text color={'blue.500'}>Forgot password?</Text>
            </Stack>
            <Button colorScheme={'blue'} variant={'solid'} onClick={handleSubmit}>
              Sign in
            </Button>
          </Stack>
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




