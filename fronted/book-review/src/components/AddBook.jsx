import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  VStack,
  Heading,
  Text
} from '@chakra-ui/react';
import { fetchProduct } from '../Redux/Product/action';
import { useDispatch, useSelector } from 'react-redux';

export const AddBook = ({length}) => {
    const dispatch = useDispatch();
    const products = useSelector(store => store.authReducer.products)
  

    const initialState = {
        img: '',
        title: '',
        author: '',
        desc: '',
      }

  const [product, setProduct] = useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchProduct(product));
    setProduct(initialState);
    alert("New book added successfully")
    console.log('Product data submitted:', product);
  };

  const handleInputChange = (e) => {
     const { name, value } = e.target;
     setProduct({ ...product, [name]: value });
    
  };


  return (<>
 
    <Heading>Add Book</Heading>
    <br />
    <Box p={4} width={'60%'} margin={'auto'} border={'2px solid grey'} borderRadius={'5px'}>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl>
            <FormLabel>Image URL :</FormLabel>
            <Input
              type="text"
              name="img"
              placeholder='url . . .'
              value={product.img}
              onChange={handleInputChange}
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Title :</FormLabel>
            <Input
              type="text"
              name="title"
              placeholder='Enter title . . .'
              value={product.title}
              onChange={handleInputChange}
              required
            />
          </FormControl>

          <FormControl>
            <FormLabel>Author :</FormLabel>
            <Input
              name="author"
              placeholder='Enter author . . .'
              value={product.author}
              onChange={handleInputChange}
            >
            </Input>
          </FormControl>

          <FormControl>
            <FormLabel>Description :</FormLabel>
            <Input
              name="desc"
              placeholder='Enter description . . .'
              value={product.desc}
              onChange={handleInputChange}
            >
            </Input>
          </FormControl>
            <Input type='submit' value={'Add Book'} bg={'tomato'} fontWeight={'bold'}></Input>
          
        </VStack>
      </form>
    </Box>
    </>
  );
};

