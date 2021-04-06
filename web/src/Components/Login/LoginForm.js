import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Form/Button'
import Input from '../Form/Input'

const LoginForm = () => {
   const [username, setUsername] = React.useState('')
   const [password, setPassword] = React.useState('')

   function handleSubmit(event) {
      event.preventDefault()
      fetch('https://dogsapi.origamid.dev/json/jwt-auth/v1/token', { 
         method: 'POST', 
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ username, password })
      }).then(response => {console.log(response)}).then(json => {console.log(json)})

   }

   return (
      <section>
         <h1>Login</h1>
         <form action="" onSubmit={handleSubmit}>
            <Input label="Usuáio" name="username" type="text" />
            <Input label="Senha" name="password" type="password" />
            
            
            <Button>Entrar</Button>
         </form>
         <Link to="/login/criar">Cadastro</Link>
      </section>
   )
}

export default LoginForm
