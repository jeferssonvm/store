import React, { useState } from 'react'
import { useContext } from 'react'
import {ShoppingCartContext} from "../../Context/Context";


const changep = () =>{

}

export const MyOrder = () => {
  const {orderHistory , setOrderHistory } = useContext(ShoppingCartContext);
  const [openBuy, setOpenBuy] =useState(false)
  const [selectBuy, setSelectBuy] = useState()
  let positionInList = 0;

    const listBuy = ()=>{
    return orderHistory.map(shopping=>{
        shopping.deployList = false;
        return(
        <div key={shopping.id} onClick={()=>{setOpenBuy(true); setSelectBuy(shopping);}} className='flex flex-col 	'>
          <div className='flex m-4 rounded-md w-72 overflow-hidden hover:cursor-pointer border-2 border-slate-400'>
            <p className=' bg-slate-300	w-7 flex justify-center items-center	font-semibold	 '>{positionInList=positionInList+1}</p>
            <div className='flex-1 px-3 bg-slate-100'>
              <p>{shopping.buyDate}</p>
              <p>Total de productos: <span>{shopping.buy.length}</span></p>
              <p>Total costo: $<span>{shopping.totalPrice}</span></p>
            </div>
          </div>
        </div>
        
        )
      })
  }
  const dropdownList = (productCard) =>{
    return (
      <div>
        <button className='text-end	 w-full cursor-pointer hover:text-red-700		' onClick={()=>setOpenBuy(false)}>X</button>
        <p className='text-center my-3 text-slate-700	text-xs	font-medium	'>{productCard.buyDate}</p>
        {
          productCard.buy.map(item =>
            <div key={item.id} className='flex justify-between	items-center gap-1	 my-1'>
              <img className='w-14 rounded-lg	' src={item.images[0]} alt="" />
              <div>
                <h3 className='w-44 h-6 overflow-hidden	'>{item.title}</h3>
                <div className='flex text-slate-600	text-xs	'>
                    <p>$ <span>{item.price}</span></p>
                
                </div>
              </div>
            </div>
            
            )
        }
      </div>
    )
  }
  return (
    <div className='flex flex-col'>
      <h2 className='text-center	my-4 text-2xl	font-semibold	'>Historial de compras</h2>
      <div className='flex colun flex-col	m-auto'>
        {
          !openBuy?listBuy():dropdownList(selectBuy)
          
          
        }
      </div>
    </div>
  )
}
