import React, {useEffect, useState} from 'react';
import axios from "axios";
import {ClimbingBoxLoader} from "react-spinners";

const ToDo = () => {
  const [todo,setTodo] = useState()

  useEffect(()=>{
    axios("https://jsonplaceholder.typicode.com/todos")
      .then(data=>setTodo(data.data))

  },[]) // аналог componentDidMount

  const toDoMap = todo?.map((e)=><p key={e.id}>{e.title} </p>)

  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <div>
      {console.log("asdfasdf")}
      {!toDoMap?<ClimbingBoxLoader  cssOverride={override} color="#36d7b7" /> : toDoMap}
    </div>
  );
};

export default ToDo;