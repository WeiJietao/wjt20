import { combineReducers } from "redux";
import contentStore from "./content.js";

// 使用redux的combineReducers方法将所有reducer打包起来
const rootReducer = combineReducers({
    contentStore,
});

export default rootReducer;
