import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Form/Button'
import Input from '../Form/Input'
import useForm from '../../Hooks/useForm'

const LoginForm = () => {
   const username = useForm('email')
   const password = useForm('')

   function handleSubmit(event) {
      event.preventDefault()
      if(username.validate() && password.validate()){
         fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', { 
            method: 'POST', 
            headers: {
                  'Content-Type': 'application/json',
            },
            body: JSON.stringify()
         })
      }
   }
      
   return (
      <section>
         <h1>Login</h1>
         <form action="" onSubmit={handleSubmit}>
            <Input label="Usuáio" name="username" type="text" {...username}/>
            <Input label="Senha" name="password" type="password" {...password}/>
            
            
            <Button>Entrar</Button>
         </form>
         <Link to="/login/criar">Cadastro</Link>
      </section>
   )
}

export default LoginForm
