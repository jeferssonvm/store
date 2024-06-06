import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../Context/Context';



export const MyAccount = () => {
  const {loginUser, setLoginUSer} = useContext(ShoppingCartContext);

  const structureInfo =()=>{
    return <div className='m-auto p-4 my-4 flex flex-col gap-3		'>
      <h2 className='m-auto	text-2xl font-black	'>welcome</h2>
      <p className='mx-auto '>{loginUser.LoginUser.Datos.Name} {loginUser.LoginUser.Datos.LastName}</p>
      <p className='mx-auto'>Email: {loginUser.LoginUser.Datos.Email}</p>
      
    </div>
    

  }

  return (
    <div className='flex		'>
      {
        loginUser.Active?  structureInfo() : ""
      }
    </div>
  )
}
