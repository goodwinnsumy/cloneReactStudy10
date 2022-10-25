import {LOADING_END, LOADING_ERROR, LOADING_START} from "./asyncAction";
import initialStore from "../../redux/initialStore";


export default function postsReducer(postsFromStore= initialStore.posts, {type, error, payload}) {
    switch (type) {
        case LOADING_START:
            return {
                ...postsFromStore,
                loading: true
            };

        case LOADING_END:
            return {
                ...postsFromStore,
                loading: false,
                posts: payload
            };
        case LOADING_ERROR:
            return {
                ...postsFromStore,
                loading: false,
                error
            };
        default:
            return postsFromStore;
    }
}