import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Form/Button'
import Input from '../Form/Input'
import useForm from '../../Hooks/useForm'
import { UserContext } from '../../UserContext'

const LoginForm = () => {
   const username = useForm('')
   const password = useForm('')

   const {userLogin, loading, error} = React.useContext(UserContext)

   async function handleSubmit(event) {
      event.preventDefault()
      
      if(username.validate() && password.validate()){
         userLogin(username.value, password.value)
      }
   }
      
   return (
      <section className="animeLeft">
         <h1 className="title">Login</h1>
         <form action="" onSubmit={handleSubmit}>
            <Input label="Usuáio" name="username" type="text" {...username}/>
            <Input label="Senha" name="password" type="password" {...password}/>
            
            {loading ? <Button disabled>Entrando...</Button> : <Button>Entrar</Button>}
            {error && <p>{error}</p>}
         </form>
         <Link to="/login/criar">Cadastro</Link>
      </section>
   )
}

export default LoginForm
