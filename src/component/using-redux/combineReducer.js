import {combineReducers} from "redux";
import {INCREMENT, DECREMENT, SET_DIFF} from "./action";

/** [Redux] Reducer */
const counterReducer = (state = {value: 0, diff: 1}, action) => {
    switch (action.type) {
        case INCREMENT:
            return Object.assign({}, state, {value: state.value + state.diff});
        case DECREMENT:
            return Object.assign({}, state, {value: state.value - state.diff});
        case SET_DIFF:
            return Object.assign({}, state, {diff: action.diff});
        default:
            return state;
    }
};
/** dummy */
const extraReducer = (state = {value: 'this_is_extra_reducer'}, action) => {
    switch (action.type) {
        default:
            return state;
    }
};
export default combineReducers({counter: counterReducer, extra: extraReducer});
