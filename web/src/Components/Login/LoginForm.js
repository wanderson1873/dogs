import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Form/Button'
import Input from '../Form/Input'
import useForm from '../../Hooks/useForm'
import { UserContext } from '../../UserContext'

const LoginForm = () => {
   const username = useForm('')
   const password = useForm('')

   const {userLogin} = React.useContext(UserContext)

   async function handleSubmit(event) {
      event.preventDefault()
      
      if(username.validate() && password.validate()){
         userLogin(username.value, password.value)
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
