import React from 'react'
import Input from '../Form/Input';
import Button from '../Form/Button';
import useForm from '../../Hooks/useForm';
import useFetch from '../../Hooks/useFetch';
import { PASSWORD_RESET } from '../../api'
import Error from '../Helper/Error';
import { useNavigate } from 'react-router';

const LoginPasswordReset = () => {
   const [login, setLogin] = React.useState(null);
   const [key, setKey] = React.useState(null);
   const password = useForm()
   const {error, loading, request} = useFetch();
   const navigate = useNavigate();

   React.useEffect(() => {
      const params = new URLSearchParams(window.location.search)
      const loading = params.get('login');
      const key = params.get('key');
      if(loading) setLogin(loading);
      if(key) setKey(key);
   }, [])

   async function handleSubmit(event) {
      event.preventDefault()
      if(password.validate()) {
         const {url , options} = PASSWORD_RESET({
            login,
            key,
            password: password.value,
         })
         const {response} = await request(url, options)
         if(response.ok) navigate('/login')
      }
   }

   return (
      <div>
         <h1 className="title">Resete a Senha</h1>
         <form onSubmit={handleSubmit}>
            <Input label="Nova Senha" type="password" name="password" {...password}/>
            {loading ? <Button disabled>Resetando...</Button> : <Button>Resetar</Button> }
         </form>
         <Error error={error} />
      </div>
   )
}

export default LoginPasswordReset
