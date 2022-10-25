import initialStore from "../../redux/initialStore";
import {ADDITEM} from "./action";


const listReducer = (list = initialStore.list, action) => {
  switch(action.type) {

    case ADDITEM:
      return [...list, action.payload];  // стейт он всегда unmutable немутируемый, то есть всегда нужно вернуть новую сущьность,
      // новый объект, или новый массив ...

    default:
      return list;
  }
}

export default listReducer;