import React, {useEffect, useState} from 'react';
import {Link, useLocation, useNavigate, useParams} from "react-router-dom";
import {useSelector, useStore} from "react-redux";

const Post = (props) => {

  // можем исспользовать свой стейт у компонента для отображения поста, или брать пост из массива который в редакс

  // console.log(props);
  const {postID} = useParams();
  const navigate = useNavigate();
  const location = useLocation();
    console.log(location)

  // запрашивать новый пост с сервера
  // const [post, setPost] = useState(null);
  // useEffect(() => {
  //     fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  //         .then(res => res.json())
  //         .then(data => setPost(data))
  //
  //     return ()=> {console.log("Bye!")}
  // }, [id]);


  useEffect(() => {
    return () => {
      console.log("unmount")
    }
  }, [])

  // брать пост из редакс
  const post = useSelector(state => state.posts.posts[postID])

  const goBack = () => navigate(-1);
  const goHome = () => navigate('/');
  // const goHome = () => navigate('/', {replace: true});

  return (
    <div>
      {/*{console.log(post)}*/}
      {/*{console.log("location",location)}*/}

      <button onClick={goBack}>Назад</button>
      <button onClick={goHome}>На главную</button>
      {/*<Link to={'/'}> На главную </Link>*/}


      <h1>{post?.title}</h1>
      <p>{post?.body}</p>

    </div>
  );
};

export default Post;