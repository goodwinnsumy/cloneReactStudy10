import initialStore from "../../redux/initialStore";
import {CHANGETITLE} from "./action";

const titleReducer = (title= initialStore.title, action) => {

  switch (action.type) {
    case CHANGETITLE:
      // return action.payload;
      return "Redux it's so easy!!!"

    case "Trololo":
      return "Trololo";
    default:
      return title;
  }
};

export default titleReducer;

