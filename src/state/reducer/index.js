import { combineReducers } from "redux";
import addToCartReducer from "./addTocartReducer";

const reducers = combineReducers({
  add: addToCartReducer,
});
export default reducers;
