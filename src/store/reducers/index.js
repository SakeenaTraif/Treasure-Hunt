import {combineReducers} from "redux";

import treasureReducer from "./treasureReducer";
import randomReducer from "./randomReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    randomReducer,
    treasureReducer,
    authReducer,
});

export default rootReducer;