import {combineReducers} from "redux";
import appStatus from "./appStatus";
import user from "./user";
import items from "./items";
import switchers from "./switchers";
const allReducers = combineReducers({
    user,
    appStatus,
    items,
    switchers
});

export default allReducers;