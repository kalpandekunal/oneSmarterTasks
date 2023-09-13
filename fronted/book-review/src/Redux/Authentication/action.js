import React from 'react'

import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_SUCCESS } from "./actionTypes"
import { USER_LOGOUT } from './actionTypes';
import axios from "axios";

export const login = (userData)=>(dispatch)=>{

    dispatch({type:LOGIN_REQUEST});
    return axios.post("https://long-puce-starfish-veil.cyclic.app/api/user/signin",userData)
    .then((res)=>{
      localStorage.setItem("TOKEN",JSON.stringify(res.data.token))
        dispatch({type:LOGIN_SUCCESS, payload:res.data.token});
    })
    .catch((err)=>{
        dispatch({type:LOGIN_FAILURE});
    })
 }


 export const signup = (userData)=>(dispatch)=>{

  dispatch({type:LOGIN_REQUEST});
  return axios.post("https://long-puce-starfish-veil.cyclic.app/api/user/signup",userData)
  .then((res)=>{
      dispatch({type:SIGNUP_SUCCESS});
  })
  .catch((err)=>{
      dispatch({type:LOGIN_FAILURE});
  })
}
