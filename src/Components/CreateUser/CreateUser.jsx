import React, { useContext, useState } from 'react'
import { ShoppingCartContext } from '../../Context/Context';

export const CreateUser = ({openCreateUser , setOpenCreateUser}) => {
  const [infoForm , getInfoForm] = useState({Name:"",LastName:"",Email:"",Password:""})
  const {users, setUsers} = useContext(ShoppingCartContext);
  
    const newUser = (e) =>{
      
      e.preventDefault();
      setUsers([...users, {Datos:{...infoForm}, orderHistory:[]}])
      getInfoForm({Name:"",LastName:"",Email:"",Password:""})

    }

    return (
    <form onSubmit={newUser} className='login__form'>
        <p className='login__title'>New user</p>

        <div className='login__inp-cont'>            
        <input className='login__inp-cont--input' type="text" name="name" id="name" placeholder=' ' value={infoForm.Name} 
          onChange={e=> getInfoForm({...infoForm, Name:e.target.value })} required/>  
        <label className='login__inp-cont--label' htmlFor="" for="name">Name:</label>
        </div>
        
        <div className='login__inp-cont'>
        <input className='login__inp-cont--input' type="text" name="" id="lastName" placeholder='  ' value={infoForm.LastName}
          onChange={e=> getInfoForm({...infoForm, LastName:e.target.value })} required/>
        <label className='login__inp-cont--label' htmlFor="" for= "lastName">Last Name:</label>
        </div>

        <div className='login__inp-cont'>            
        <input className='login__inp-cont--input' type="email" name="" id="email" placeholder=' ' value={infoForm.Email}
          onChange={e=> getInfoForm({...infoForm, Email:e.target.value })} required/>  
        <label className='login__inp-cont--label' htmlFor="" for="email">Email:</label>
        </div>

        <div className='login__inp-cont'>
        <input className='login__inp-cont--input' type="password" name="" id="password" placeholder='  ' value={infoForm.Password}
          onChange={e=> getInfoForm({...infoForm, Password:e.target.value })} required/>
        <label className='login__inp-cont--label' htmlFor="" for= "password">Password:</label>
        </div>

        <input className='login__button' type="submit" value="sign Up"  />
   
        <p className='login__have-acount'>Already have an account? <span onClick={()=>setOpenCreateUser(!openCreateUser)}>Sign In</span></p>
    </form>
  )
}
