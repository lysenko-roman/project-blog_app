import React, {useEffect} from 'react';
import {connect} from 'react-redux';

import {getPost} from '../../shared/handlers/postApiService';
import './styles.scss'


const Post = (props) => {
   
    useEffect (() =>{
        const id = props.match.params.id; 
        getPost(id).then((data) => {
            console.log(data);
            props.setPost(data);
        });
    }, [] );

    const {
         id,
         title, 
         description,
         data_update,
         user: {name}
        } = props.post;
    
    const date = new Date();
    const dateUpdate = date.toLocaleDateString();


    return (
        <div className="postPage">
        
            <h1 className = "postPage_title">{title} {id}</h1>
            <p className = "postPage_description">{data_update}</p>
            <p className = "postPage_description">Autor: {name}</p>
            <p className = "postPage_description">{description}</p>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        setPost: post => dispatch ({type: 'SET_POST', post })
    }

}

const mapStateToProps = state => {
    return {
        post: state.post.data,
    }

}



export default connect(mapStateToProps, mapDispatchToProps)(Post);