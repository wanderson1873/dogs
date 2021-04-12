import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import style from './UserHeader.module.css'

const UserHeader = () => {
   return (
      <header className={style.header}>
         <h1 className="title">Titulo</h1>
         <UserHeaderNav />
      </header>
   )
}

export default UserHeader
