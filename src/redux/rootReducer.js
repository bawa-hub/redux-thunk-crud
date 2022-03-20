import { combineReducers } from "redux";
import usersReducer from "./reducer";

const rootReducer = combineReducers({
  usersState: usersReducer,
});

export default rootReducer;
