import React from 'react'
import { NavLink } from 'react-router-dom'
import {UserContext} from '../../UserContext'
import {ReactComponent as MyPhotos} from '../../Assets/feed.svg'
import {ReactComponent as Stats} from '../../Assets/estatisticas.svg'
import {ReactComponent as AddPhoto} from '../../Assets/adicionar.svg'
import {ReactComponent as Exit} from '../../Assets/sair.svg'
import style from './UserHeaderNav.module.css'

const UserHeaderNav = () => {
   const [mobile, setMobile] = React.useState(null)
   const {userLogout} = React.useContext(UserContext)

   return (
      <nav className={style.nav}>
         <NavLink to="/conta" end activeClassName={style.active}>
            <MyPhotos />
            {mobile && 'Minhas Fotos'}
         </NavLink>
         <NavLink to="/conta/estatistica" activeClassName={style.active}>
            <Stats />
            {mobile && 'Estatísticas'}
         </NavLink>
         <NavLink to="/conta/postar" activeClassName={style.active}>
            <AddPhoto />
            {mobile && 'Adicionar Foto'}
         </NavLink>
         <button onClick={userLogout}>
            <Exit />
            {mobile && 'Sair'}
         </button>
      </nav>
   )
}

export default UserHeaderNav
