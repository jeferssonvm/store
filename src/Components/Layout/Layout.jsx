import React, { useContext, useEffect, useState } from 'react'
import { Card } from '../Card/Card'
import { data } from 'autoprefixer'
import { ProductDetail } from '../ProductDetail/ProductDetail';
import {ShoppingCartContext} from '../../Context/Context'


export const Layout = () => {
  const [cardsInfo, setCardInfo] =useState([]);
  const urlReal = window.location.pathname;
  const urlRealClean = urlReal.substring(1)
  
  const {openDetail, setOpenDetail} = useContext(ShoppingCartContext);


  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(res=>res.json())
    .then(data=>setCardInfo(data))
  }, [])
  const displayCard = () =>{
    if (urlRealClean.length === 0){
      return(
         cardsInfo?.map(item =>(
          <Card key={item.id} data={item}></Card>
        ))
      )
    }else{
      let cardFilter = cardsInfo.filter(item =>(urlRealClean === item.category.name.toLowerCase()));
       return( 

        cardFilter?.map(item =>(
          <Card key={item.id} data={item}></Card>
        ))

        )
    }  
  }
  
  
  return (
    <div className='flex'>
      <div className='	max-w-screen-lg m-auto'>
        <div className='w-80 m-auto'>
          <input className='w-full	' type="text" name="" id="" />
        </div>
        <div className='mt-5  grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 '>
          {        
            displayCard()
          }
        </div>
      </div>
      { 
      openDetail? <ProductDetail/>:""
      } 
    </div>
  )
}
// gap-4 grid-cols-4  max-w-screen-lg place-content-center
//grid template column repeat autofit min max 150