import React from 'react'
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_LOST } from '../../api'
import Error from '../Helper/Error';

const LoginPasswordLost = () => {
   const login = useForm('');
   const {data, loading, error, request} = useFetch()

   async function handleSubmit(event) {
      event.preventDefault();
      if(login.validate()) {
         const {url, options} = PASSWORD_LOST({
            login: login.value,
            url: window.location.href.replace('perdeu', 'resetar')
         })
         request(url, options)
      }
   }
   return (
      <section className="animeLeft">
         <h1 className="title">Perdeu a senha?</h1>
         {data ? <p style={{color: '#4c1'}}>{data}</p> : (
            <form onSubmit={handleSubmit}>
            <Input label="Email / Usuário" type="text" name="email"  {...login}/> 
            <Error error={error} />
            {loading ? <Button disabled>Enviando...</Button> : <Button>Enviar email</Button>}
         </form>
         )}
         
            
      </section>
   )
}

export default LoginPasswordLost
