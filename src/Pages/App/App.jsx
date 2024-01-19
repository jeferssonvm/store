import { useState } from 'react'
import { useRoutes, BrowserRouter,Routes,Route } from "react-router-dom";
import {ShoppingCartProvaider} from "../../Context/Context"
import { Home } from '../Home/Home';
import { MyAccount } from '../MyAccount/MyAccount';
import { MyOrders } from '../MyOrders/MyOrders';
import { SignIn } from '../SignIn/SignIn';
import { NotFound } from '../NotFound/NotFound';
import { MyOrder } from '../MyOrder/MyOrder';
import { Navbar } from '../../Components/Navbar/Navbar';


function App() {

  return (
      <ShoppingCartProvaider>
          <BrowserRouter >
            <Navbar></Navbar>  
            <Routes>
              <Route path='/projects/shopi/' element={<Home></Home>}></Route>
              <Route path='/projects/shopi/clothes' element={<Home></Home>}></Route>
              <Route path='/projects/shopi/electronics' element={<Home></Home>}></Route>
              <Route path='/projects/shopi/furniture' element={<Home></Home>}></Route>
              <Route path='/projects/shopi/toys' element={<Home></Home>}></Route>
              <Route path='/projects/shopi/others' element={<Home></Home>}></Route>
              <Route path='/projects/shopi/my-account' element={<MyAccount></MyAccount>}></Route>
              <Route path='/projects/shopi/my-order' element={<MyOrder></MyOrder>}></Route>
              <Route path='/projects/shopi/my-orders' element={<MyOrders></MyOrders>}></Route>
              <Route path='/projects/shopi/sign-in' element={<SignIn></SignIn>}></Route>
              <Route path='*' element={<NotFound></NotFound>}></Route>
              
              {/* servidor local */}
              {/* <Route path='/' element={<Home></Home>}></Route>
              <Route path='/clothes' element={<Home></Home>}></Route>
              <Route path='/electronics' element={<Home></Home>}></Route>
              <Route path='/furniture' element={<Home></Home>}></Route>
              <Route path='/toys' element={<Home></Home>}></Route>
              <Route path='/others' element={<Home></Home>}></Route>
              <Route path='/my-account' element={<MyAccount></MyAccount>}></Route>
              <Route path='/my-order' element={<MyOrder></MyOrder>}></Route>
              <Route path='/my-orders' element={<MyOrders></MyOrders>}></Route>
              <Route path='/sign-in' element={<SignIn></SignIn>}></Route>
              <Route path='*' element={<NotFound></NotFound>}></Route> */}
            </Routes>
          </BrowserRouter>
      </ShoppingCartProvaider> 
        
      
    )
}

export default App
