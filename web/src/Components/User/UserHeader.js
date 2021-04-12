import React from 'react'
import UserHeaderNav from './UserHeaderNav'
import style from './UserHeader.module.css'
import { useLocation } from 'react-router'

const UserHeader = () => {
   const [title, setTitle] = React.useState('');
   const location = useLocation();

   React.useEffect(() => {
      const {pathname} = location;
      switch(pathname){
         case '/conta/postar':
            setTitle('Poste sua Foto');
            break;
         case '/conta/estatistica':
            setTitle('Estatísticas');
            break;
         default:
            setTitle('Minha Conta');
      }
   }, [location])
   return (
      <header className={style.header}>
         <h1 className="title">{title}</h1>
         <UserHeaderNav />
      </header>
   )
}

export default UserHeader
