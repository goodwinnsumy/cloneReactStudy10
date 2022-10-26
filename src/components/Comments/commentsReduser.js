import {LOADING_START_COMMENTS, LOADING_END_COMMENTS, LOADING_ERROR_COMMENTS} from "./asyncAction";
import initialStore from "../../redux/initialStore";

export default function commentsReducer(commentsFromStore = initialStore, {type, error, payload}) {
  switch (type) {
    case LOADING_START_COMMENTS:
      return {
        ...commentsFromStore,
        loading: true
      };

    case LOADING_END_COMMENTS:
      return {
        ...commentsFromStore,
        loading: false
      }

    case LOADING_ERROR_COMMENTS:
      return {
        ...commentsFromStore,
        loading: false,
        error
      };
    default:
      return commentsFromStore;
  }
}