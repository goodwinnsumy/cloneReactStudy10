import React, {Component, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

import style from "./List.module.scss"
import {connect, useDispatch, useSelector} from "react-redux";
import {addItemCreate} from "./action";


const List = (props)=> {

  // state={
  //   inputValue:""
  // }

  const [inputValue, setInputValue] = useState("");

  const list = useSelector((store)=>store.list);
  const dispatch = useDispatch();

  const {name} = props;
  // const arr = this.props.arr;

  const listElements = list?.map((e,i)=>{
    return <p className={style.p} key={uuidv4()}>{i} - {e}</p>
  })

  return (
      <div>
        {name}
        {listElements}
        <button onClick={()=>dispatch(addItemCreate(inputValue))}> ADD ToDo </button>

        <form action="">
          <input type="text" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
        </form>

      </div>
  );


}
//
// function mapStateToProps(store) {
//   return{
//     list:store.list
//   }
// }

// export default connect(mapStateToProps)(List);
export default List;

