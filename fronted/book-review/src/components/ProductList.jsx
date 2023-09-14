import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {styled} from "styled-components";
import { getProduct } from '../Redux/Product/action';
import { ProductsCard } from './ProductsCard';
import { Dashboard } from '../Pages/Dashboard';
import { Box } from '@chakra-ui/react';
import { AddBook } from './AddBook';


export const ProductList = () => {
    const products = useSelector(store => store.productReducer.products);
    
    const dispatch = useDispatch();
    
    
    useEffect(()=>{
        dispatch(getProduct());
    },[]);

    
    return <DIV>
        
    {
        products.length > 0 && products.map((el)=>{
            return <ProductsCard key={el._id} {...el}/>
                
        })
    }
    
   
    </DIV>
    
}


const DIV = styled.div`
    display: grid;
    grid-template-columns:  repeat(4,1fr);
    gap: 20px;
    margin-top: 40px;


    @media screen and (max-width: 768px){
        display: grid;
        grid-template-columns: repeat(3,1fr);
        
   }

   @media screen and (max-width: 500px){
        display: grid;
        grid-template-columns: repeat(2,1fr);
        
   }

   @media screen and (max-width: 350px){
        display: grid;
        grid-template-columns: repeat(1,1fr);
        
   }
`
