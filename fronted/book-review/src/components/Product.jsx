// import React from 'react'
// import {
//     Box,
//     chakra,
//     Container,
//     Stack,
//     Text,
//     Image,
//     Flex,
//     VStack,
//     Button,
//     Heading,
//     SimpleGrid,
//     StackDivider,
//     useColorModeValue,
//     VisuallyHidden,
//     List,
//     ListItem,
//     Img
//   } from '@chakra-ui/react';

// export const Product = (data) => {
//     //console.log(data)
    
//   return <>
//   <Heading>Kunal</Heading>
//   {
//    data.length > 0 && data.map((el)=>{
//     return <Heading>{el.name}</Heading>
        
//       return  <Container maxW={'7xl'}>
         
//           <SimpleGrid
//           mt={10}
//             columns={{ base: 1, lg: 2 }}
//             spacing={{ base: 8, md: 10 }}
//             py={{ base: 18, md: 24 }}>
//             <Flex>
//               <Image
//                 rounded={'0'}
//                 alt={'product image'}
//                 src={ el.image}
//                 fit={'cover'}
//                 align={'center'}
//                 />
//             </Flex>
//             <Stack textAlign={"left"} spacing={{ base: 6, md: 10 }}>
//               <Box as={'header'}>
//                 <Heading
//                   lineHeight={1.1}
//                   fontWeight={600}
//                   fontSize={{ base: '2xl', sm: '4xl', lg: '2xl' }}>
//                  {el.title}
//                 </Heading>
//                 <Text
//                 mt={3}
//                 mb={-10}
//                   color={'gray.900'}
//                   fontWeight={300}
//                   fontSize={'2xl'}>
//                   {el.price}
//                 </Text>
               
//               </Box>
//               <Text>Inclusive of all taxes</Text>
//               <Stack textAlign={"left"}
//                 spacing={{ base: 4, sm: 6 }}
//                 direction={'column'}
//                 divider={
//                   <StackDivider
//                     borderColor={'gray.600'}
//                   />
//                 }>
//               </Stack>
    
//               {/* <RouterLink to={`/cart/${id}`}> */}
//               <Button
//                 rounded={'none'}
//                 w={'full'}
//                 mt={8}
//                 size={'lg'}
//                 py={'7'}
//                 textTransform={'uppercase'}
//                 _>
//                 Buy
//               </Button>
              
             
//               <Text color={"tomato"}>EXCITING OFFERS</Text>
//               <Text>BUY 2 GET 20% OFF SITEWIDE</Text>
//               <text>FREE DUFFLE BAG ON ALL ORDERS ABOVE Rs. 2499</text>
//               <Stack direction="row" alignItems="center" >
//                 {/* <MdLocalShipping /> */}
                
//                 <Text>2-3 business days delivery</Text>
//               </Stack>
//             </Stack>
//           </SimpleGrid>
//         </Container>
//     })
//   }
//   </>
// }
