import { useState } from 'react'
import { useRoutes, BrowserRouter,Routes,Route } from "react-router-dom";
import { Home } from '../Home/Home';
import { MyAccount } from '../MyAccount/MyAccount';
import { MyOrders } from '../MyOrders/MyOrders';
import { SignIn } from '../SignIn/SignIn';
import { NotFound } from '../NotFound/NotFound';
import { MyOrder } from '../MyOrder/MyOrder';
import { Navbar } from '../../Components/Navbar/Navbar';


function App() {

  return (

  <BrowserRouter >
      <Navbar></Navbar>  
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/clothes' element={<Home></Home>}></Route>
        <Route path='/electronics' element={<Home></Home>}></Route>
        <Route path='/furniture' element={<Home></Home>}></Route>
        <Route path='/toy' element={<Home></Home>}></Route>
        <Route path='/othes' element={<Home></Home>}></Route>
        <Route path='/my-account' element={<MyAccount></MyAccount>}></Route>
        <Route path='/my-order' element={<MyOrder></MyOrder>}></Route>
        <Route path='/my-orders' element={<MyOrders></MyOrders>}></Route>
        <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>

    </BrowserRouter>
    )
}

export default App
