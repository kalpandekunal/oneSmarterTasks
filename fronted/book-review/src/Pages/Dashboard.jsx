import Footer from './footer'
import { Box , Flex, Heading, Text} from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { AddBook } from '../components/AddBook';




export const Dashboard = () => {
  const [review, setReview] = useState([]);

  const getReviewData = async()=>{
    try {
       axios.get('http://localhost:4000/api/review')
      .then((res)=>{
        setReview(res.data.Data);
      })
    } catch (error) {
      console.log(error);
    }
  }
   
    useEffect(()=>{
      getReviewData();
    },[]);

    let sum = 0;

    for(let i=0;i<review.length;i++){
      if(review[i].rating){
        sum = sum + review[i].rating;
      }
      
    }
    console.log(sum);
    let total = review.length;
    let avgRating =  sum/total;

    

    let numOfRev =0;
    let currentDate = new Date().getDate();
    // console.log(currentDate);
    for(let i=0;i<review.length;i++){
      if(review[i].createdAt == currentDate ){
        numOfRev++;
      }
    }
    
// console.log(new Date().getDate());

  return (
    <Box marginTop={'100px'}>
    <Heading>Review Data Analysis</Heading>
    <br />
    <br />
    <Box  marginLeft={'400px'}>
          <Box width={'50%'} border={'1px solid grey'} height={'40px'}>
          <Box width={'60%'} height={'40px'} backgroundColor={'#79C8F7'}>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
          Reviews Added Per Day : {numOfRev}
        </Text>
        </Box>
          </Box>
          <br />
          <br />
          <Box width={'50%'} border={'1px solid grey'} height={'40px'}>
            <Flex gap={'60px'}>
            <Box width={'5%'} height={'40px'} backgroundColor={'#79C8F7 '}></Box>
          <Text fontSize="lg" fontWeight="bold" mb={2}>
          Average Ratings Per Day :{avgRating.toFixed(2)}
        </Text>
        </Flex>
          </Box>
        </Box>
      <AddBook />
    <Footer />
    </Box>
  );
}

