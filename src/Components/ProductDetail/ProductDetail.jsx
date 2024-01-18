import React, { useContext } from 'react'
import {ShoppingCartContext} from"../../Context/Context"
import "./ProductDetail.css"

export const ProductDetail = () => {
  const {openDetail, setOpenDetail, productDetail} =useContext(ShoppingCartContext);
  return (
    <aside className=' w-80  '>
      <div className='product-detail w-80 h-screen fixed  bg-slate-200 min-h-96	'>
        <header className='flex mt-5 mx-5 justify-between	'>
          <h2 className='font-black	text-2xl		'>Detalles</h2>
          <svg onClick={() => setOpenDetail(false)} className='cursor-pointer	hover:fill-red-700	' xmlns="http://www.w3.org/2000/svg" height="16" width="12" viewBox="0 0 384 512"><path d="M376.6 84.5c11.3-13.6 9.5-33.8-4.1-45.1s-33.8-9.5-45.1 4.1L192 206 56.6 43.5C45.3 29.9 25.1 28.1 11.5 39.4S-3.9 70.9 7.4 84.5L150.3 256 7.4 427.5c-11.3 13.6-9.5 33.8 4.1 45.1s33.8 9.5 45.1-4.1L192 306 327.4 468.5c11.3 13.6 31.5 15.4 45.1 4.1s15.4-31.5 4.1-45.1L233.7 256 376.6 84.5z"/></svg>
        </header>
        <figure className='mx-5 my-6 rounded-2xl		overflow-hidden	'>
          <img className='w-full' src={productDetail.data.images} alt="" />
        </figure>
        <div className='mx-5 my-6'>
          <p className='text-xl font-semibold	'>${productDetail.data.price}</p>
          <h2 className='text-xl font-medium	'>{productDetail.data.title}</h2>
          <p className='text-base	font-normal	'>{productDetail.data.description}</p>
        </div>
      </div>
      
    </aside>
  )
}
