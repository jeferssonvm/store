import React, { useContext, useState } from 'react'
import './signin.css'
import { ShoppingCartContext } from '../../Context/Context';

import {Login} from '../../Components/Login/Login'
import {CreateUser}from '../../Components/CreateUser/CreateUser'
export const SignIn = () => {
  const {sessionStart , setSessionStart} = useContext(ShoppingCartContext)
  const [openCreateUser , setOpenCreateUser ] = useState(false);


  return (
    <section className='signin'>
      <div className='signin__content'>
        
        {/* <CreateUser></CreateUser> 
        <Login></Login>
        */}
        {
          (!sessionStart &&  (openCreateUser? 
            <CreateUser
            openCreateUser = {openCreateUser}
            setOpenCreateUser = {setOpenCreateUser}
            ></CreateUser> 
            :<Login
            openCreateUser = {openCreateUser}
            setOpenCreateUser = {setOpenCreateUser}
            ></Login>)) 
        }

      
      </div>
      
      
    </section>
  )
}
