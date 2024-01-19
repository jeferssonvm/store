import React, { useContext, useEffect, useState } from 'react'
import { Card } from '../Card/Card'
import { data } from 'autoprefixer'
import { ProductDetail } from '../ProductDetail/ProductDetail';
import {ShoppingCartContext} from '../../Context/Context'
import { OrderCard } from '../OrderCard/OrderCard';


export const Layout = () => {
  const [cardsInfo, setCardInfo] =useState([]);
  const [wordFinder,setWordFinder] = useState("");
  const urlReal = window.location.pathname;
  const urlRealClean = urlReal.substring(1)
  
  const {openDetail, setOpenDetail,shoppingCartContent ,setShoppingCartContent} = useContext(ShoppingCartContext);


  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
    .then(res=>res.json())
    .then(data=>setCardInfo(data))
  }, [])
  const displayCard = () =>{
    // filtranos por categorias 
    let cardFilter; 
 
    if (urlRealClean.length != 0){
      if(urlRealClean==="others"){
        const categoryList = ["clothes","electronics","furniture","toys"];
        cardFilter = cardsInfo.filter(item =>!(categoryList.includes(item.category.name.toLowerCase())));

      }else{
        cardFilter = cardsInfo.filter(item =>(urlRealClean === item.category.name.toLowerCase()));
      }
      

    }else{
      cardFilter =cardsInfo;
    }  
    // pregunta si se a ingresado una palabra en el buscador
    if(wordFinder.length>0){
      // compara si existen considencias con las cards y si concide mustra en pantalla 
      return(cardFilter?.filter(item => {
        return item.title.toLowerCase().includes(wordFinder.toLocaleLowerCase())
       }).map(item =>(
        <Card key={item.id} data={item}></Card>
        ))
       )
    }else{
      return( 
          cardFilter?.map(item =>(
          <Card key={item.id} data={item}></Card>
          ))
        )
    }
  }

  
  return (
    <div className='flex'>
      <div className='	max-w-screen-lg mx-auto'>
        <div className='w-80 m-auto	'>
          <input onChange={e => setWordFinder(e.target.value)} className='w-full h-7  border-slate-600 border-2 rounded-md			' type="text" name="" id="" />
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
      {
        shoppingCartContent? <OrderCard/>:""
      } 
    </div>
  )
}
// gap-4 grid-cols-4  max-w-screen-lg place-content-center 

//grid template column repeat autofit min max 150