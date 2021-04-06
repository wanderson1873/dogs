import React from 'react'
import style from './Input.module.css'

function Input({label, name, type}) {
   return (
      <div className={style.wrapper}>
         <label htmlFor={name} className={style.label}>
            {label}
         </label>
         <input 
            name={name} 
            id={name} 
            type={type} 
            className={style.input} 
         />
         <p className={style.error}>Error</p>
      </div>
   )
}

export default Input
