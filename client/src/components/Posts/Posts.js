import React from 'react';
import { useSelector } from 'react-redux';
import Post from './Post/Post.js';
import useStyles from './styles'
const Posts = () => {
    const classes = useStyles();

    const posts = useSelector((state) => state.posts);
    console.log(posts);
    return (
        <>
            <div>
                <Post></Post>
            </div>
        </>
    );
};

export default Posts;