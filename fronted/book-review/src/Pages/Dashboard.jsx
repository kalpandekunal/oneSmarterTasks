import Footer from './footer'
import { Box , Flex, Heading, Text} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { AddBook } from '../components/AddBook';
import { PieChartData } from '../components/PieChart';
import "./Dashboard.css";
import axios from 'axios';


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
    //console.log(sum);
    let total = review.length;
    let avgRating =  sum/total;

    //let average = avgRating.toFixed(2);
    //console.log(avgRating.toFixed(2));

    let numOfRev =0;
    let currentDate = new Date().getDate();
    // console.log(currentDate);
    for(let i=0;i<review.length;i++){
      if(review[i].createdAt === currentDate ){
        numOfRev++;
      }
    }
  


  return (
    <Box marginTop={'100px'} >
    
        <Box className='dashboard'>
          <Box>
            
            <Heading>Review Data</Heading>
            <br />
            <Text fontWeight={'bold'}>Reviews added per day : {numOfRev}</Text>
            <Text fontWeight={'bold'}>Average rating : {avgRating.toFixed(2)}</Text>

          <PieChartData />
          </Box>
          <Box>
          <AddBook />
          </Box>
        </Box>
        
        
      
    <Footer />
    </Box>
  );
}

