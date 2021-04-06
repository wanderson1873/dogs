import React from 'react'
import style from './Button.module.css'

const Button = ({children, ...porps}) => {
   return <button {...porps} className={style.button}>{children}</button>
}

export default Button
