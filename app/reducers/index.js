import {combineReducers} from "redux";

import news from "./newsReducer";
import upcomming from "./upcommingReducer";

export default combineReducers({
  news,
  upcomming
});
