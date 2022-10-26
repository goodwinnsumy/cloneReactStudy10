import axios from "axios";

export const LOADING_START_COMMENTS = "LOADING_START_COMMENTS"
export const LOADING_END_COMMENTS = "LOADING_END_COMMENTS"
export const LOADING_ERROR_COMMENTS = "LOADING_ERROR_COMMENTS"

export function LoadingActionComment () {

  return (dispatch) =>{
      dispatch({type: LOADING_START_COMMENTS});

      setTimeout (timeoutHandler, 2500)

      function timeoutHandler (){
        axios ('https://jsonplaceholder.typicode.com/comments')
          .then(res => {
              dispatch ({
                  type: LOADING_END_COMMENTS,
                  payload: res.data
              })
          })
          .catch(error => {
              dispatch ({type: LOADING_ERROR_COMMENTS, error})
          })
      }
  }
}
