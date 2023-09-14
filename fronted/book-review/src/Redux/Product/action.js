import axios from "axios"
import { GET_PRODUCT_SUCCESS, POST_PRODUCT_SUCCESS, PRODUCT_FAILURE, PRODUCT_REQUEST, SEARCH_PRODUCT } from "./actionTypes"


export const fetchProduct = (newProduct)=>(dispatch)=>{

    dispatch({type:PRODUCT_REQUEST});
    axios
    .post("https://long-puce-starfish-veil.cyclic.app/api/book/addBook",newProduct)
    .then((res)=>{
        dispatch({type:POST_PRODUCT_SUCCESS,payload:res.data.Data})
    })
    .catch((err)=>{
        dispatch({type:PRODUCT_FAILURE})
    })
}

export const getProduct = (obj)=>(dispatch)=>{

    dispatch({type:PRODUCT_REQUEST});
    axios.get("https://long-puce-starfish-veil.cyclic.app/api/book",obj)
    .then((res)=>{
        dispatch({type:GET_PRODUCT_SUCCESS,payload:res.data.Data});
    })
    .catch((err)=>{
        dispatch({type:PRODUCT_FAILURE});
    })
}


export const searchProduct = (payload) =>({type: SEARCH_PRODUCT,payload});
