import React from 'react';
import {Routes,Route} from "react-router-dom";
import { Home } from './Home';
import { Dashboard } from './Dashboard';
import { Login } from './Login';
import { Signup } from './Register';
import { ProductDetails } from './ProductDetails';
import { PrivateRoute } from '../components/PrivateRoute';
import { DeleteBook } from '../components/DeleteBook';

export const MainRoute = () => {

  return <Routes>
    <Route path='/' element={<Home />}/>
    
    <Route 
      path='/dashboard'
      element={
    <PrivateRoute>
        <Dashboard />
    </PrivateRoute>
    }/>
    
    <Route path='/' element={
    <PrivateRoute><DeleteBook /></PrivateRoute>}/>
    <Route path='/login' element={<Login />}/>
    <Route path='/signup' element={<Signup />}/>
    <Route path='/productdetails/:id' element={<ProductDetails />}/>
  </Routes>
}
