import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles.scss';


const Post = props => {
   
    const {title,
           id,
           data_update,
           likes,
           description,
           user: {name},
        } = props.post;
    const date = new Date();
    const dateUpdate = date.toLocaleDateString();

        return ( <div className="post">
             <i>{dateUpdate} </i>
             <span>{likes}</span>
             <h2>{title}</h2>
             <p>{description}</p>
             <NavLink to={`/post/${id}`}>...more</NavLink>
         
         </div>
        )
     
}

export default Post;