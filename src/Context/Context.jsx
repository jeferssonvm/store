import React, { createContext, useEffect, useState } from 'react'
export const ShoppingCartContext = createContext();


export const ShoppingCartProvaider = ({children}) => {

    const pureba = [{
    Datos:{
      Name:"jefersson",
      LastName:"velasquez",
      Email:"jeferson@gmail.com",
      Password:"1234"
    } ,
    orderHistory:[]
  },
  {
    Datos:{
      Name:"1jefersson",
      LastName:"1velasquez",
      Email:"1jeferson@gmail.com",
      Password:"01234"
    } ,
    orderHistory:[]
    }
  ]


  useEffect(() => {
    if (localStorage.getItem("users")) {
      if (JSON.parse(localStorage.getItem("users")).length > 0) {
        getUsers(JSON.parse(localStorage.getItem("users")));
        

      }
    }
  }, []);

  // const pruebaString= JSON.stringify(pureba)
  // localStorage.setItem('users', pruebaString)
  // localStorage.removeItem('usuarios')

  const [users, getUsers] = useState([]);
  const [count , setCount]  = useState(0);
  const [openDetail , setOpenDetail] = useState(false);
  const [productDetail, setProductDetail] = useState(false);
  const [shoppingCartContent ,setShoppingCartContent ] =useState(false);
  const [productCard, setProductCard] =useState([]);
  const [orderHistory , setOrderHistory] =useState([]);
  const [sessionStart , setSessionStart] = useState(false)



  return (

    <ShoppingCartContext.Provider value ={{
      count, setCount,
      openDetail , setOpenDetail,
      productDetail, setProductDetail,
      productCard, setProductCard,
      shoppingCartContent ,setShoppingCartContent,
      orderHistory , setOrderHistory,
      sessionStart , setSessionStart,
      users, getUsers

    }}>
        {children}
    </ShoppingCartContext.Provider>
  )
}

// const [todos, setTodos] = useState(() => {
//   const todosFromStorage = window.localStorage.getItem('TODOS_V1')
//   if (todosFromStorage) return JSON.parse(todosFromStorage)
//   return []
// })

