import React, { useContext, useState } from 'react'

import { ShoppingCartContext } from '../../Context/Context';



export const  Login = ({openCreateUser , setOpenCreateUser}) => {
  const haveDate = (email, password)=>{
    if ( email && password ){
      getDataEntry({ date_password:true,  date_email:true})
      return true;
    }
    if(email){
      getDataEntry({ ...dataEntry,  date_email:true})
      return true;
    }
    if(password){
      getDataEntry({ ...dataEntry,  date_password:true})
      return true;
    }
    
  }
  const findUser =(email , password) =>{
    return users.find(user => {
      const userExist= user.Datos.Email === email
      console.log("user.Datos.Email")
      console.log(user)
      console.log(userExist)
      if(userExist){
        const passwordExist = user.Datos.Password === password
        return passwordExist;
      }
    })
  }
  const getUser =(event) =>{
    event.preventDefault();
    getDataEntry({ date_password:false,  date_email:false})
    if (haveDate(!event.target.email.value,!event.target.password.value)){
      return;
    }
    const user = findUser(event.target.email.value, event.target.password.value);
    if(user){
      setLoginUSer({Active:true, LoginUser:{...user}})      
    }
  }
  const disconectLogin = () =>{
    setLoginUSer({Active:false, LoginUser:{}})
  }


  const {users, setUsers} = useContext(ShoppingCartContext);
  const {loginUser, setLoginUSer} = useContext(ShoppingCartContext);
  const [valueForm , setValueForm] = useState({
    email:"",
    password:""
  })
  const [dataEntry, getDataEntry] = useState({
    date_email:false, 
    date_password:false});
    console.log("users")
    console.log(users)
  return (
    <>
    <form onSubmit={getUser} className='login__form'>
        <p className='login__title'>Welcome to Shopi</p>
        <div className='login_error'>
          {dataEntry.date_email? <p >Email has not been entered</p>:""}
          {dataEntry.date_password? <p>password has not been entered</p>:""}
        </div>
        <div className='login__inp-cont'>            
        <input className='login__inp-cont--input' type="email" name="email" id="email" placeholder=' ' 
          value={!loginUser.Active ? valueForm.email : loginUser.LoginUser.Datos.Email} 
          onChange={e =>setValueForm({...valueForm, email:e.target.value})}
          disabled={loginUser.Active} />  
        <label className='login__inp-cont--label' htmlFor="" for="email">Email:</label>
        </div>
        
        <div className='login__inp-cont'>
        <input className='login__inp-cont--input' type="password" name="password" id="password" placeholder='  ' 
            value={!loginUser.Active ? valueForm.password : loginUser.LoginUser.Datos.password} 
            onChange={e =>setValueForm({...valueForm, password:e.target.value})}
            disabled={loginUser.Active}/>
        <label className='login__inp-cont--label' htmlFor="" for= "password">Password:</label>
        </div>
        <div>
          <input className='login__button' type="submit" value="Sign-in" disabled={loginUser.Active}/>
          {loginUser.Active? <input className='login__button login__button--disconnect' type="button" value="Disconnect"  onClick={disconectLogin} />:""}
        </div>
        
        
        {
          !loginUser.Active ? 
          <p className='login__have-acount'>Don't have an account yet? <span onClick={()=>{setOpenCreateUser(!openCreateUser)}}>Sign up</span></p> : ""
        }
    </form>
    </>
    
  )
}
