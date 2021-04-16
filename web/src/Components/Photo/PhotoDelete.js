import React from 'react'
import style from './PhotoDelete.module.css'
import { PHOTO_DELETE } from '../../api'
import useFetch from '../../Hooks/useFetch';

const PhotoDelete = ({id}) => {
   const token = window.localStorage.getItem('token');
   const {loading, request} = useFetch();

   async function handleClick() {
      const confirm = window.confirm('Tem certeza que deseja deletar?');
      if(confirm){
         const {url, options} = PHOTO_DELETE(id, token);
         const {response} = await request(url, options);
         if(response.ok) window.location.reload();
      }
   }

   return (
      <>
         {loading ? (
            <button disabled className={style.delete}>
               Deletando
            </button>
         ) : (
            <button onClick={handleClick} className={style.delete}>
               Deletar
            </button>
         )}
         
      </>
   )
}

export default PhotoDelete
