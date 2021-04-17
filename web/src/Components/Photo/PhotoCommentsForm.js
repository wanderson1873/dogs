import React from 'react'
import {ReactComponent as Send} from '../../Assets/enviar.svg';
import useFetch from '../../Hooks/useFetch';
import { COMMENT_POST } from '../../api'
import Error from '../Helper/Error'
import style from './PhotoCommentsForm.module.css'

const PhotoCommentsForm = ({id, setComments, single}) => {
   const [comment, setComment] = React.useState('');
   const {error, request} = useFetch();

   async function handleSubmit(event) {
      event.preventDefault();
      const token = window.localStorage.getItem('token');
      const {url, options} = COMMENT_POST(id, {comment}, token);
      const { response, json } = await request(url, options);
      if(response.ok) {
         setComment('');
         setComments((comments) => [...comments, json])
      }
   }

   return (
      <form className={`${style.form} ${single ? style.photoSingle : '' }`} onSubmit={handleSubmit}>
         <textarea 
         className={style.textarea}
            id="comment" 
            name="comment" 
            placeholder='Comente...'
            value={comment}
            onChange={({target}) =>setComment(target.value)}
         />
         <button className={style.button}>
            <Send />
         </button>
         <Error error={error} />
      </form>
   )
}

export default PhotoCommentsForm
