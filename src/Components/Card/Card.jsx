import React from 'react'

export const Card = () => {
  return (
    <div className=' w-56 h-60 border-solid border-2  rounded-2xl		'>
      <figure className="relative h-4/5">
        <div className="absolute right-1 top-1 p-0 bg-slate-500  w-7 h-7 text-xl text-center rounded-2xl	hover:cursor-pointer ">+</div>
        <img className='h-full rounded-2xl	' src="data:image/jpeg;base64,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" alt="" />
        <span className="bg-gray-500	 absolute bottom-0 left-0 m-2 py-0 px-1 rounded-2xl ">tipo</span>
      </figure>
      <p className='h-1/5 flex justify-between items-center p-1.5 bg-gray-100	'>
        <span>telefono</span>
        <span>$ 1542</span>
      </p>
    </div>
  )
}
