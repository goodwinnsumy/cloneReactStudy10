export const ADDITEM="ADDITEM"
export const DELITEM="DELITEM"

export const addItemCreate = (value)=>{
  return {
    type: ADDITEM,
    payload:value
  }
}

export const delItemCreate = ()=>{

}

//
// {type:ADDITEM}
//
// dispatch(addItemCreate("dfghfdghhd"))