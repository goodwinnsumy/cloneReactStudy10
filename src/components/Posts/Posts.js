import React, {Component, useEffect, useState} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import {LoadedAction} from "./asyncAction";
import "./Post.scss"

import {RingLoader} from "react-spinners";
import {Link} from "react-router-dom";


const Posts = (props) => {
   const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(LoadedAction())

        return ()=> console.log("bye")
    },[])

    const posts = useSelector((store)=>store.posts);


    const postsMap = posts?.posts?.map((post, i) => {
        return <p className={"p"} key={post.id}>
            <Link to={`/posts/${post.id}`}> {post.title}</Link>
        </p>
    })

    const styleSpinner = {
        display: "block",
        margin: "0 auto",
    };

    return (
        <div>

            {posts?.loading ? <RingLoader color="#36d7b7" size={200} cssOverride={styleSpinner}/> : postsMap}
        </div>
    );
}


export default Posts;



