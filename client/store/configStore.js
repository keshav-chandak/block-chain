import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducers/rootReducer";

const initialState={};

var store = createStore(rootReducer, initialState, applyMiddleware(thunk));
export default store;