import React, { createContext, useState } from 'react'
export const ShoppingCartContext = createContext();

export const ShoppingCartProvaider = ({children}) => {
  const [count , setCount]  = useState(0);
  const [openDetail , setOpenDetail] = useState(false);
  const [productDetail, setProductDetail] = useState(false);
  const [shoppingCartContent ,setShoppingCartContent ] =useState(false);
  const [productCard, setProductCard] =useState([]);
  const [orderHistory , setOrderHistory] =useState([]);
  return (

    <ShoppingCartContext.Provider value ={{
      count, setCount,
      openDetail , setOpenDetail,
      productDetail, setProductDetail,
      productCard, setProductCard,
      shoppingCartContent ,setShoppingCartContent,
      orderHistory , setOrderHistory
    }}>
        {children}
    </ShoppingCartContext.Provider>
  )
}
