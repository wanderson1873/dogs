import React from 'react'
import style from './Login.module.css'
import { Routes, Route, Navigate } from 'react-router'
import LoginForm from './LoginForm'
import LoginCreate from './LoginCreate'
import LoginPasswordLost from './LoginPasswordLost'
import LoginPasswordReset from './LoginPasswordReset'
import { UserContext } from '../../UserContext'


const Login = () => {
   const { login } = React.useContext(UserContext)

   if(login === true) return <Navigate to="/conta"/>
   return (
      <section className={style.login}>
         <div className={style.forms}>
            <Routes>
               <Route path="/" element={<LoginForm />} />
               <Route path="criar" element={<LoginCreate />} />
               <Route path="perdeu" element={<LoginPasswordLost />} />
               <Route path="resetar" element={<LoginPasswordReset />} />
            </Routes>
         </div>
      </section>
   )
}

export default Login
