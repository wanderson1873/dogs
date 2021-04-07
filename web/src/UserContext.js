import React from 'react'
import { TOKEN_POST, USE_GET } from './api'

export const UserContext = React.createContext()

export const UserStorage = ({children}) => {
   const [data, setData] = React.useState(null)
   const [login, setLogin] = React.useState(null)
   const [loading, setLoading] = React.useState(false)
   const [error, setError] = React.useState(null)

   React.useEffect(() => {
      const token = window.localStorage.getItem('token')
      if(token) getUser(token)
   }, [])

   async function getUser(token) {
      const {url, options} = USE_GET(token);
      const response = await fetch(url, options);
      const json = await response.json();
      setData(json)
      setLogin(true)
      console.log(json)
   }

   async function userLogin(username, password) {
      const {url, options} = TOKEN_POST({username, password});
      const tokenRes = await fetch(url, options);
      const {token} = await tokenRes.json();
      window.localStorage.setItem('token', token);
      getUser(token)
   }
   
   return (
      <UserContext.Provider value={{ userLogin, data }}>
         {children}
      </UserContext.Provider>
   )
}

