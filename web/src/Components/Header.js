import React from 'react'
import { Link } from 'react-router-dom'
import style from './Header.module.css'
import {ReactComponent as Dogs} from '../Assets/dogs.svg'
import {UserContext} from '../UserContext'

const Header = () => {
   const {data} = React.useContext(UserContext)

   return (
      <header className={style.header}>
         <nav className="container">
            <Link to="/" className={style.logo} aria-label="Dogs - Home">
               <Dogs />
            </Link>
            {data ? (
               <Link to="/conta" className={style.login}>
               {data.nome}
            </Link>
            ) : (
               <Link to="/login" className={style.login}>
               Login / Criar
            </Link>
            )}
         </nav>
      </header>
   )
}

export default Header
