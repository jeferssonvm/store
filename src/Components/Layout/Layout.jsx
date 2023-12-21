import React, { useEffect, useState } from 'react'
import { Card } from '../Card/Card'
import { data } from 'autoprefixer'
import { ProductDetail } from '../ProductDetail/ProductDetail';



export const Layout = () => {
  const [cardsInfo, setCardInfo] =useState([]);
  const urlReal = window.location.pathname;
  const urlRealClean = urlReal.substring(1)
  console.log(urlRealClean.length)
  

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
        <div className='bg-orange-500	 w-80 m-auto'>
          <input className='bg-yellow-300	w-full	' type="text" name="" id="" />
        </div>
        <div className='mt-5  grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4  sm:bg-orange-950	md:bg-amber-400	lg:bg-lime-400	xl:bg-teal-600	'>
          {        
            displayCard()
          }
        </div>
      </div>
      
    </div>
  )
}
// gap-4 grid-cols-4  max-w-screen-lg place-content-center
//grid template column repeat autofit min max 150