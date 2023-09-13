import React, { useState } from 'react'
import { Box,Image,Button,Input, Heading, Text, Flex } from '@chakra-ui/react';
import "./Review.css";
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import {DeleteIcon} from "@chakra-ui/icons";

export const Review = ({review,book}) => {
    const {id} = useParams();

    const navigate = useNavigate();
    console.log(review)

    const getPertData = async(id)=>{
        try {
           axios.get(`https://long-puce-starfish-veil.cyclic.app/api/book/${id}`)
          .then((res)=>{
            
          })
        } catch (error) {
          console.log(error);
        }
      }


      const [comment,setComment] = useState("");

      const handleChange = (e)=>{
        setComment(e.target.value)
      }


      const commentHandler = async()=>{
        try {
          if(comment.length <1 ){
            alert("Please write comment...")
          }
          else{
      
            let obj = {
              comment,
              bookId:book._id,
            }
            // console.log(obj)
            await axios.post("https://long-puce-starfish-veil.cyclic.app/api/review/add",obj)
            .then(()=>window.location.reload())
            .catch((err)=>console.log(err))
            
          }
      
        } catch (error) {
          console.log(error);
        }
      }
      
      const handleDelete = async (ID)=>{
        console.log(id);
        try {
            axios.delete(`https://long-puce-starfish-veil.cyclic.app/api/review/deleteReview/${ID}`)
            .then(()=>{
                // navigate(`/productdetails/${id}`)
                window.location.reload();
            })
        } catch (error) {
            console.log(error.message);
        }
      }
   

  return (
    <Box border={'1px solid grey'} width={'90%'} margin={'auto'} >
        <Heading>Ratings and reviews...</Heading>
    <Box width={'100%'} borderTop={'1px solid grey'} height={'auto'} margin={'auto'} padding={'20px'}>
            <Image 
             width={'5%'}
             margin={'auto'}
             src="https://i.ibb.co/PY2K5LM/chat.png"
            />
            <br />
            {/* <Flex justifyContent={'center'} gap={'10px'}> */}
             <Input  width={'30%'} placeholder="comment here..." border={'1.5px solid orange'} value={comment} onChange={handleChange}/>
             <br />
             <br />
             <Button onClick={commentHandler} _hover={{"backgroundColor":"tomato"}} borderRadius={'15px'} color={''}>Comment</Button>
             {/* </Flex> */}
           
    </Box>
    <Box  className='review'>
    {
                review.length > 0 && review.map((el)=>{
                    return <Box key={el._id}
                                border={'1px solid orange'} 
                                width={'60%'} 
                                margin={'auto'}
                                height={'auto'} 
                                borderRadius={'10px'}
                                textAlign={'start'}
                                paddingLeft={'10px'}
                                
                                boxShadow={'rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset'}
                                >
                                <Flex justifyContent={'space-between'}>
                              <Text fontWeight={'bold'}>{el.comment}</Text>
                            
                            <DeleteIcon onClick={()=>handleDelete(el._id)}/>
                            </Flex>
                        </Box>
                })
            }
    </Box>
    </Box>
    
   
  )
}
