import React, { createContext, useEffect, useState } from 'react'
export const ShoppingCartContext = createContext();


export const ShoppingCartProvaider = ({children}) => {
  const [users, setUsers] = useState([]);
  const [count , setCount]  = useState(0);
  const [openDetail , setOpenDetail] = useState(false);
  const [productDetail, setProductDetail] = useState(false);
  const [shoppingCartContent ,setShoppingCartContent ] =useState(false);
  const [productCard, setProductCard] =useState([]);
  const [orderHistory , setOrderHistory] =useState([]);
  const [sessionStart , setSessionStart] = useState(false)
  const [loginUser, setLoginUSer] = useState({Active:false, LoginUser:{}});

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
      Password:"0123ss4"
    } ,
    orderHistory:[]
    }
  ]
  

  useEffect(() => {
    if (localStorage.getItem("users")) {
      if (JSON.parse(localStorage.getItem("users")).length > 0) {
        setUsers(JSON.parse(localStorage.getItem("users")));
      }
    }
    return
  }, []);

  useEffect(()=>{
    const info= JSON.stringify(users)
    localStorage.setItem('users', info)
    
  },[users])

  const saveInfo= (info) =>{
    console.log("saveInfo")
    console.log(info)
    const pruebaString= JSON.stringify(info)
    localStorage.setItem('users', pruebaString)
  }

  // const pruebaString= JSON.stringify(pureba)
  // localStorage.setItem('users', pruebaString)
  // localStorage.removeItem('users')

  
 
  useEffect(()=>{
    const updatedUsers = users.map(e =>{
          if(e.Datos.Email === loginUser.LoginUser.Datos.Email){

            return {...loginUser.LoginUser, orderHistory:[...orderHistory]}
            
          }
          return e
        })
        saveInfo(updatedUsers)
   
  }, [orderHistory])
  return (

    <ShoppingCartContext.Provider value ={{
      count, setCount,
      openDetail , setOpenDetail,
      productDetail, setProductDetail,
      productCard, setProductCard,
      shoppingCartContent ,setShoppingCartContent,
      orderHistory , setOrderHistory,
      sessionStart , setSessionStart,
      users, setUsers,
      loginUser, setLoginUSer

    }}>
        {children}
    </ShoppingCartContext.Provider>
  )
}



