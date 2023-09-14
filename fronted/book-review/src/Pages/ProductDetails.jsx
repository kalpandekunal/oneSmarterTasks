import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom";
import {
    Box,
    Container,
    Stack,
    Text,
    Flex,
    Button,
    Heading,
    SimpleGrid,
    StackDivider,
    Img,
  } from '@chakra-ui/react';
import Footer from "./footer";
import { Ratings } from "../components/Ratings";
import { Review } from "../components/Review";
import axios from "axios";

export const ProductDetails = ()=>{
    const {id} = useParams();
    const products = useSelector(store => store.productReducer.products);
    const [book, setBook] = useState({});
    const [review, setReview] = useState([]);


    const getPertData = async()=>{
      try {
         axios.get(`https://long-puce-starfish-veil.cyclic.app/api/book/${id}`)
        .then((res)=>{
          console.log(res);
          setBook(res.data.Data);
          setReview(res.data.reviews);
        })
      } catch (error) {
        console.log(error);
      }
    }
       console.log(book);
      useEffect(()=>{
        getPertData();
      },[]);
    

    
    // useEffect(()=>{
    //   console.log(id,"id");
    //     let productData = products.find((el) => el._id === id )
    //     productData && setData(productData)
        
    // },[]);
    //console.log(data.name)

    return <div>
        <Container maxW={'7xl'}>
         
         <SimpleGrid
         mt={10}
           columns={{ base: 1, lg: 2 }}
           spacing={{ base: 8, md: 10 }}
           py={{ base: 18, md: 24 }}>
           <Flex>
             <Img
               rounded={'0'}
               alt={'product image'}
               src={ book.img }
               fit={'cover'}
               align={'center'}
               
               _hover={{'box-shadow': 'rgba(255, 149, 0, 0.4) 5px 5px, rgba(255, 222, 243, 0.3) 10px 10px, rgb(255, 95, 196) 15px 15px, rgba(240, 56, 46, 0.978) 20px 20px, rgba(240, 95, 46, 0.05) 25px 25px'}}
               />
           </Flex>
           <Stack textAlign={"left"} spacing={{ base: 6, md: 10 }}>
             <Box as={'header'}                
>
               <Heading
                 lineHeight={1.1}
                 fontWeight={600}
                 fontSize={{ base: '2xl', sm: '4xl', lg: '2xl' }}>
                {book.title}
               </Heading>
               <Heading
               mt={4}
                 lineHeight={1.1}
                 fontWeight={600}
                 fontSize={{ base: '2xl', sm: '4xl', lg: '2xl' }}>
                By : {book.author}
               </Heading>
             </Box>
             
             <Text
               mt={4}
               mb={-10}
                 borderTop={'2px solid grey'}
                 color={'gray.900'}
                 fontWeight={400}
                 fontSize={'1xl'}
                 paddingBottom={'20px'}>
                 {book.desc}
               </Text>
                
            
                            
             
             <Stack textAlign={"left"}
               spacing={{ base: 4, sm: 6 }}
               direction={'column'}
               divider={
                 <StackDivider
                   borderColor={'gray.600'}
                 />
               }>
             </Stack>
             <Text textAlign={'center'} fontWeight={'bold'}>Rate this book</Text>
             <Ratings />
             <Button
               rounded={'none'}
               w={'full'}
               mt={8}
               size={'lg'}
               py={'7'}
               textTransform={'uppercase'}
               bg={'tomato'}
               _>
               Buy
             </Button>
             
            
             <Text color={"tomato"}>EXCITING OFFERS</Text>
             <text>FREE DUFFLE BAG ON ALL ORDERS ABOVE Rs. 2499</text>
             <Stack direction="row" alignItems="center" >
               <Text>2-3 business days delivery</Text>
             </Stack>
           </Stack>
         </SimpleGrid>
       </Container>

        <Review review={review} book={book}/>
        
       <Footer />
    </div>
    
   
}