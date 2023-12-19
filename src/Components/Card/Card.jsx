
import React, { useEffect } from 'react'

export const Card = (data) => {
  console.log(data.data)
  return (
    <div className=' w-56 m-auto	 h-60 border-solid border-2  rounded-2xl	overflow-hidden		'>
      <figure className="relative h-4/5">
        <div className="absolute right-1 top-1 p-0 bg-slate-200	font-semibold	   w-7 h-7 text-xl text-center rounded-2xl	hover:cursor-pointer ">+</div>
        <img className='h-full w-full rounded-2xl	' src={data.data.images[0]} alt={data.data.title} />
        <span className="bg-gray-500	 absolute bottom-0 left-0 m-2 py-0 px-1 rounded-2xl ">{data.data.category.name}</span>
      </figure>
      <p className='h-1/5 flex justify-between items-center p-1.5 bg-gray-100	 gap-3 '>
        <span>{data.data.title}</span>
        <span>${data.data.price}</span>
      </p>
    </div>
  )
}
