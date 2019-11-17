import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from '../pages/Home';
import Posts from '../pages/Posts';
import Favorite from '../pages/Favorite';
import Post from '../pages/Post';

export default () => {
    return (
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/favorite" component={Favorite} />
        <Route path="/posts" component={Posts} />
        <Route path="/post/:id" component={Post} />

    </Switch>
    )
}