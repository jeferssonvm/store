import React, { useContext, useEffect, useState } from 'react';
import {ShoppingCartContext} from "../../Context/Context";
import "./orderCard.css"

export const OrderCard = () => {
  const currentDate = new Date();

  const {productCard, setProductCard,shoppingCartContent ,setShoppingCartContent,orderHistory , setOrderHistory } = useContext(ShoppingCartContext);
  const [totalCost, setTotalCost] = useState(0)

  const closeCart = ()=>{
    setShoppingCartContent (!shoppingCartContent);
  }
  const removeItem = (id) =>{
    
    setProductCard(productCard.filter(product =>(product.id !== id)))
  }
  useEffect(()=>{
    setTotalCost(productCard.reduce((a,b)=>a+b.price,0))
  },[productCard])
  const sendOrder = (order) => {
    const currentDateStr = `${currentDate.getFullYear()} / ${(currentDate.getMonth() +1)} / ${currentDate.getDate()}`
    !orderHistory.length? setOrderHistory([{buy:order,buyDate:currentDateStr,id:orderHistory.length,totalPrice:totalCost}]):setOrderHistory([...orderHistory, {buy:order,buyDate:currentDateStr,id:orderHistory.length,totalPrice:totalCost}])
    console.log(orderHistory)
    setProductCard([])
    
  }
  return (
    <aside className=' w-80 h-[calc(100vh+64px)] 	'>
        <div className='flex flex-col justify-around 	product-detail w-80 fixed min-h-96	bg-slate-200'>
            <header className='flex mt-5 mx-5 justify-between	'>
                <h2 className='font-black	text-2xl		'>Carrito de Compras</h2>
                <svg onClick={closeCart} className='cursor-pointer	hover:fill-red-700	' xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
            </header>
            <div className='  h-4/6 mx-5 flex flex-col overflow-y-scroll scroll-smooth	'>
                {
                  productCard.map(item =>
                    <div key={item.id} className='flex justify-between	items-center gap-1	 my-1'>
                      <img className='w-14 rounded-lg	' src={item.images[0]} alt="" />
                      <div>
                        <h3 className='w-44 h-6 overflow-hidden	'>{item.title}</h3>
                        <div className='flex text-slate-600	text-xs	'>
                            <p>$ <span>{item.price}</span></p>
                        
                        </div>
                      </div>
                      <p onClick={()=>removeItem(item.id)} className='bg-slate-400	w-5 h-5 flex items-center	justify-center		rounded-full hover:bg-red-700	hover:cursor-pointer'>X</p>
                    </div>
                    
                    )
                }
            </div>
              <p className='mx-auto'>
                <span className='w-2/5'>Total:</span> <span className='w-3/5'>$ {totalCost}</span>
              </p>
            <button className='w-11/12 text-white	bg-gray-950	mx-auto	h-10 rounded-xl font-bold' onClick={()=> sendOrder(productCard)} >COMPRAR</button>
        </div>

    </aside>
  )
}
