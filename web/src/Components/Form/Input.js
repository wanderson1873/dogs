import React from 'react'
import style from './Input.module.css'

function Input({label, name, type, value, onChange, error, onBlur}) {
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
            value={value}
            onChange={onChange}
            onBlur={onBlur}
         />
         {error && <p className={style.error}>{error}</p>}
      </div>
   )
}

export default Input
