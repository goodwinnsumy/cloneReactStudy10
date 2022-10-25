import initialStore from "../../redux/initialStore";
import {DEC, INC, RAND, RESET} from "./counterAction";

const counterReducer = (counter = initialStore.counter, action) => {
  switch(action.type) {
    case INC:
      return ++counter;
    case DEC:
      return --counter;
    case RAND:
      return counter+action.payload;
      // return {...counter,counter: counter.counter+action.payload};
    case RESET:
      return 0
    default:
      return counter;
  }
}

export default counterReducer;