import { combineReducers } from "redux";

import treasureReducer from "./treasureReducer";
import garbageReducer from "./garbageReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  garbageReducer,
  treasureReducer,
  authReducer,
});

export default rootReducer;
