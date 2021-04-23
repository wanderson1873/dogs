import React from 'react'
import style from './Footer.module.css'
import { ReactComponent as DogsFooter} from '../Assets/dogs-footer.svg'

const Footer = () => {
   return (
      <footer className={style.footer}>
         <DogsFooter />
         <p>Dogs. Todos os direitos reservados.</p>
      </footer>
   )
}

export default Footer
