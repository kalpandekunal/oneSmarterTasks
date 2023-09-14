import React from "react";
import { PieChart, Pie } from "recharts";
import { useState,useEffect } from "react";
import axios from "axios";
import { Box,Text } from "@chakra-ui/react";
import { AddBook } from "./AddBook";





export const PieChartData = () => {
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

    let average = avgRating.toFixed(2);
    //console.log(avgRating.toFixed(2));

    let numOfRev =0;
    let currentDate = new Date().getDate();
    // console.log(currentDate);
    for(let i=0;i<review.length;i++){
      if(review[i].createdAt === currentDate ){
        numOfRev++;
      }
    }

    const data01 = [
        {name: "Review Per Day", value:numOfRev},
        {name: "Average Rating", value: avgRating}
    ];
    const data02 = [
        {name: "Review Per Day", value: numOfRev},
        {name: "Average Rating", value: avgRating}
    ];


  return (
    

        
    <PieChart width={400} height={400}>
      <Pie
        data={data01}
        dataKey="value"
        cx={300}
        cy={200}
        outerRadius={60}
        fill="#8884d8"
      />
      <Pie
        data={data02}
        dataKey="value"
        cx={300}
        cy={200}
        innerRadius={70}
        outerRadius={90}
        fill="#82ca9d"
        label
      />
    </PieChart>
    
   
  );
}
