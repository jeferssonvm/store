import React, { useContext } from 'react'
import { ShoppingCartContext } from '../../Context/Context';

export const  Login = ({openCreateUser , setOpenCreateUser}) => {
  const getUser =(event) =>{
    event.preventDefault();
    if (event.target.email.value ){
      if(event.target.password.value){
        
      }
    }
  }
  const {users, getUsers} = useContext(ShoppingCartContext);
  
console.log(users[1].Datos.Email)
console.log(users[1].Datos.Password)

  return (
    <>
    <form onSubmit={getUser} className='login__form'>
        <p className='login__title'>Welcome to Shopi</p>

        <div className='login__inp-cont'>            
        <input className='login__inp-cont--input' type="email" name="" id="email" placeholder=' ' />  
        <label className='login__inp-cont--label' htmlFor="" for="email">Email:</label>
        </div>
        
        <div className='login__inp-cont'>
        <input className='login__inp-cont--input' type="password" name="password" id="password" placeholder='  '/>
        <label className='login__inp-cont--label' htmlFor="" for= "password">Password:</label>
        </div>

        <input className='login__button' type="submit" value="sign-in" />
        
        <p className='login__have-acount'>Don't have an account yet? <span onClick={()=>{setOpenCreateUser(!openCreateUser)}}>Sign up</span></p>
    </form>
    </>
    
  )
}
