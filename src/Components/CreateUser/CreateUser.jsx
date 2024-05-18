import React from 'react'

export const CreateUser = ({openCreateUser , setOpenCreateUser}) => {
  
    return (
    <form action="" className='login__form'>
        <p className='login__title'>New user</p>

        <div className='login__inp-cont'>            
        <input className='login__inp-cont--input' type="text" name="" id="Name" placeholder=' ' />  
        <label className='login__inp-cont--label' htmlFor="" for="Name">Name:</label>
        </div>
        
        <div className='login__inp-cont'>
        <input className='login__inp-cont--input' type="text" name="" id="LastName" placeholder='  '/>
        <label className='login__inp-cont--label' htmlFor="" for= "LastName">Last Name:</label>
        </div>

        <div className='login__inp-cont'>            
        <input className='login__inp-cont--input' type="email" name="" id="email" placeholder=' ' />  
        <label className='login__inp-cont--label' htmlFor="" for="email">Email:</label>
        </div>

        <div className='login__inp-cont'>
        <input className='login__inp-cont--input' type="password" name="" id="password" placeholder='  '/>
        <label className='login__inp-cont--label' htmlFor="" for= "password">Password:</label>
        </div>

        <input className='login__button' type="button" value="sign Up"  />
        
        <p className='login__have-acount'>Already have an account? <span onClick={()=>setOpenCreateUser(!openCreateUser)}>Sign In</span></p>
    </form>
  )
}
