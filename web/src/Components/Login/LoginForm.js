import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../Form/Button'
import Input from '../Form/Input'
import useForm from '../../Hooks/useForm'
import { UserContext } from '../../UserContext'
import Error from '../Helper/Error'
import style from './LoginForm.module.css'
import styleBtn from '../Form/Button.module.css'

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
         <form className={style.form} onSubmit={handleSubmit}>
            <Input label="Usuário" name="username" type="text" placeholder=" Email / Usuário" {...username}/>
            <Input label="Senha" name="password" type="password" placeholder="Sua senha" {...password}/>
            
            {loading ? <Button disabled>Entrando...</Button> : <Button>Entrar</Button>}
            <Error error={error} />
         </form>
         <Link className={style.perdeu} to="/login/perdeu">Perdeu a Senha?</Link>
         <div className={style.cadastro}>
            <h2 className={style.subtitle}>Cadastre-se</h2>
            <p>Ainda não possui conta? cadastre-se no site.</p>
            <Link className={styleBtn.button} to="/login/criar">Cadastro</Link>
         </div>
         
      </section>
   )
}

export default LoginForm
