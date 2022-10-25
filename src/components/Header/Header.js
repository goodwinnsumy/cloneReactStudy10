import "./Header.scss"

import React, {Component} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import {changeTitleCreator} from "./action";
import {Link, NavLink} from "react-router-dom";
import Modal from "../Modal/Modal";
import {login, logout, ModalAuthCloseCreate, ModalAuthOpenCreate} from "../Auth/actions";


const Header = (props) => {
  const auth = useSelector((store) => store.auth)
  const dispatch = useDispatch()

  const logOut = ()=>{
    dispatch(logout())
    dispatch(ModalAuthCloseCreate())
  }

  return (
    <>
      <div className="nav">
        <Link to="/">Home</Link>

        {auth.name ? <p style={{cursor: "pointer"}} onClick={()=>logOut()}>{auth.name}</p> :
          <p style={{cursor: "pointer"}} onClick={() => dispatch(ModalAuthOpenCreate())}>Login</p>}

        <Link to="/users">Users</Link>
        <NavLink to="/counters">Counters</NavLink>

        <NavLink to="/messages">Messages</NavLink>
        <NavLink to="/posts">Posts</NavLink>


        {auth.modal && <Modal action={
          <button onClick={() => {
            dispatch(login())
            dispatch(ModalAuthCloseCreate())
          }
          }> Login</button>
        } closeHandler={() => dispatch(ModalAuthCloseCreate())}/>}

      </div>
    </>
  );
}

export default Header;

