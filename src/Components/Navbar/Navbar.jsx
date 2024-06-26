import React, { useContext, useState } from 'react'
import { NavLink } from "react-router-dom";
import {ShoppingCartContext} from"../../Context/Context"
export const Navbar = () => {
  const {productCard,setProductCard} = useContext(ShoppingCartContext);
  const {loginUser, setLoginUSer} = useContext(ShoppingCartContext)
  return (
    <nav className='flex justify-between	 flex-wrap	' >
        {/* servidor local */}
        <ul className='flex 	gap-1.5 mx-4 my-5'>
            <li className='mx-2 font-black			'><NavLink to={"/"}>Shopi</NavLink></li>
            <li className='mx-2 hover:underline decoration-2	'><NavLink to={"/"}>All</NavLink></li>
            <li className='mx-2 hover:underline decoration-2	'><NavLink to={"/clothes"}>clothes</NavLink></li>
            <li className='mx-2 hover:underline decoration-2	'><NavLink to={"/electronics"}>Electronics</NavLink></li>
            <li className='mx-2 hover:underline decoration-2	'><NavLink to={"/furniture"}>Furnitures</NavLink></li>
            <li className='mx-2 hover:underline decoration-2	'><NavLink to={"/toys"}>Toys</NavLink></li>
            <li className='mx-2 hover:underline decoration-2	'><NavLink to={"/others"}>Others</NavLink></li>
        </ul>
        <ul className='flex 	gap-1.5 mx-4 my-5'>
            {/* <li className='mx-2'><NavLink to={"/"}>Prueba@gnaul.as</NavLink></li> */}
            {loginUser.Active? 
             <li className='mx-2'><NavLink to={"/"}>{loginUser.LoginUser.Datos.Email}</NavLink></li> : ""}
            <li className='mx-2'><NavLink to={"/my-order"}>My Order</NavLink></li>
            <li className='mx-2'><NavLink to={"/my-account"}>My Account</NavLink></li>
            <li className='mx-2'><NavLink to={"/sign-in"}>Sign In</NavLink></li>
            <li className='mx-2 flex gap-1'>
              <svg xmlns="http://www.w3.org/2000/svg" height="16" width="18" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
              <span>{productCard.length}</span>
            </li>
        </ul>
    </nav>
  )
}
