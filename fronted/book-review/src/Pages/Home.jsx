import React from 'react'
import { ProductList } from '../components/ProductList'
import Footer from './footer'

export const Home = () => {

  return (
    <div style={{"marginTop":"70px"}}>
        <img  src='https://www.bookswagon.com/images/promotionimages/web/1_alltimefavourite.jpg?v=2.0'/>
        <img src='https://www.bookswagon.com/bannerimages/86_inr.jpg?v=2.5'/>
        <ProductList />
        <Footer />
    </div>
  )
}
