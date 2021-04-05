import React from 'react'
import { Link } from 'react-router-dom'
import style from './Header.module.css'

const Header = () => {
   return (
      <header className={style.header}>
         <nav>
            <Link to="/" end>Home</Link>
            <Link to="/login">Login / Criar</Link>
         </nav>
      </header>
   )
}

export default Header
