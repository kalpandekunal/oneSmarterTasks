import React from 'react'
import { ProductList } from '../components/ProductList'
import Footer from './footer'
import { Box } from '@chakra-ui/react'
import "./Home.css";

export const Home = () => {

  return (
    <div style={{"marginTop":"70px"}}>
        <img  src='https://www.bookswagon.com/images/promotionimages/web/1_alltimefavourite.jpg?v=2.0'/>
        {/* <img src='https://www.bookswagon.com/bannerimages/86_inr.jpg?v=2.5'/> */}
        <div class="container">
        <div class="wrapper">
            <img src="https://www.bookswagon.com/bannerimages/86_inr.jpg?v=2.5" alt=""/>
            <img src="https://www.bookswagon.com/bannerimages/80_inr.jpg?v=1.8"
                alt=""/>
            <img src="https://www.bookswagon.com/bannerimages/79_inr.jpg?v=1.9" alt=""/>
            <img src="https://www.bookswagon.com/bannerimages/83_inr.jpg?v=1.9"
                alt=""/>
            <img src="https://www.bookswagon.com/bannerimages/84_inr.jpg?v=1.6"
                alt="" />
        </div>
    </div>
        <Box maxH="600px"
        overflowY="auto"
        p="2"
        border="0px solid #ccc" h={"630px"} w={"100%"}>
        <ProductList />
        </Box>
        <Footer />
    </div>
  )
}
