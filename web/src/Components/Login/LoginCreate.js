import React from 'react'
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import Button from '../Form/Button';
import Input from '../Form/Input';
import { USER_POST } from '../../api'
import { UserContext } from '../../UserContext';
import Error from '../Helper/Error';

const LoginCreate = () => {
   const username = useForm('');
   const email = useForm('email');
   const password = useForm('');

   const {userLogin} = React.useContext(UserContext);
   const { loading, error, request } = useFetch();
   
   async function handleSubmit(event) {
      event.preventDefault();
      const {url, options} = USER_POST({
         username: username.value,
         email: email.value,
         password: password.value,
      })   
      const {response} = await request(url, options);
      if(response.ok) userLogin(username.value, password.value)
   }
   return (
      <section className="animeLeft">
         <h1 className="title">Cadastre-se</h1>
         <form onSubmit={handleSubmit}>
            <Input label="Usuário" name="username" type="text" placeholder="Usuário" {...username}/>
            <Input label="Email" name="email" type="email" placeholder="email@exemplo.com" {...email}/>
            <Input label="Senha" name="password" type="password" placeholder="Sua senha" {...password}/>
            {loading ? (
               <Button disabled>Cadastrando...</Button>
               ) : (
               <Button>Cadastrar</Button>
            )}
         <Error error={error} />
         </form>
      </section>
   )
}

export default LoginCreate
