import axios from "axios";

export const LOADING_START_COMMENTS = "LOADING_START_COMMENTS"
export const LOADING_END_COMMENTS = "LOADING_END_COMMENTS"
export const LOADING_ERROR_COMMENTS = "LOADING_ERROR_COMMENTS"

export function LoadingActionComments() {

  return (dispatch) =>{
      dispatch({type: LOADING_START_COMMENTS});

      setTimeout (timeoutHandlerComments, 2500)

      function timeoutHandlerComments (){
        axios ('https://jsonplaceholder.typicode.com/comments')
          .then(Response => {
              dispatch ({
                  type: LOADING_END_COMMENTS,
                  payload: Response.data

              })
              console.log(Response)
          }
          )
          .catch(error => {
              dispatch ({type: LOADING_ERROR_COMMENTS, error})
          })
      }
  }
}