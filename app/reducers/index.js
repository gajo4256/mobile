import {combineReducers} from "redux";

import news from "./newsReducer";
import events from "./eventsReducer";
import tabs from "./tabsReducer";

export default combineReducers({
  news,
  events,
  tabs
});
