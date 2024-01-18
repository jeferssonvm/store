
import React, { useContext, useEffect } from 'react'
import {ShoppingCartContext} from "../../Context/Context"

export const Card = (data) => {

  const {count , setCount, openDetail, setOpenDetail ,productDetail, setProductDetail,productCard, setProductCard,setShoppingCartContent} = useContext(ShoppingCartContext);
  
  const sendData = () =>{
    setOpenDetail(true)
    setProductDetail(data)
    setShoppingCartContent(false)

  }
  const selectProduct = (id) =>{
    // console.log(productCard.map(ele =>(console.log(ele))))
    const hasProductCard = productCard.find((product)=>(id === product.id))
    if (hasProductCard){
      return <svg onClick={()=> removeProductCard(id)} className="absolute right-1 top-1 p-0.5	 bg-cyan-500	 fill-white	font-semibold	   w-7 h-7 text-center rounded-2xl	hover:cursor-pointer "  xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg>
    }{
      return <div onClick={addProductCard} className="absolute right-1 top-1 p-0 bg-slate-200	font-semibold	   w-7 h-7 text-xl text-center rounded-2xl	hover:cursor-pointer ">+</div>
    }
  }
  const addProductCard = () =>{
    setProductCard([...productCard, data.data])
    setShoppingCartContent(true)
    setOpenDetail(false)
    
  }
  const removeProductCard = (id) =>{
    setProductCard(productCard.filter(product =>(product.id !== id)))
    
    
  }
  return (
    <div className=' w-56 m-auto	 h-60 border-solid border-2  rounded-2xl	overflow-hidden		'>
      <figure className="relative h-4/5">
        {
          selectProduct(data.data.id)
        }
        <img className='h-full w-full rounded-2xl	' src={data.data.images[0]} alt={data.data.title}  onClick={()=>sendData()}/>
        <span className="bg-gray-500 opacity-80 absolute bottom-0 left-0 m-2 py-0 px-1 rounded-2xl ">{data.data.category.name}</span>
      </figure>
      <p className='h-1/5 flex justify-between items-center px-1.5 bg-gray-100	 gap-3 '>
        <span className='max-h-full '>{data.data.title}</span>
        <span>${data.data.price}</span>
      </p>
    </div>
  )
}
