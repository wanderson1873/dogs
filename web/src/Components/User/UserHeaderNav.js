import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import {UserContext} from '../../UserContext'
import {ReactComponent as MyPhotos} from '../../Assets/feed.svg'
import {ReactComponent as Stats} from '../../Assets/estatisticas.svg'
import {ReactComponent as AddPhoto} from '../../Assets/adicionar.svg'
import {ReactComponent as Exit} from '../../Assets/sair.svg'
import style from './UserHeaderNav.module.css'
import useMedia from '../../Hooks/useMedia'

const UserHeaderNav = () => {
   const {userLogout} = React.useContext(UserContext)
   const mobile = useMedia('(max-width: 40rem)');
   const [mobileMenu, setMobileMenu] = React.useState(false);

   const {pathname} = useLocation();
   React.useEffect(() => {
      setMobileMenu(false)
   }, [pathname])

   return (
      <>
         {mobile && (<button 
            aria-label="Menu" 
            className={`${style.mobileButton} ${
               mobileMenu && style.mobileButtonActive}`}
            onClick={() => setMobileMenu(!mobileMenu)}>
            </button>
         )}
         <nav className={`
            ${mobile ? style.navMobile : style.nav} 
            ${mobileMenu && style.navMobileActive}
         `}>
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
      </>
   )
}

export default UserHeaderNav
