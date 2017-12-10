import { combineReducers } from 'redux';
import { likes, incrementLikes } from './reducers';//all reducers to merge into combineReducer

var rootReducer = combineReducers({ 
    incrementLikes
});

export default rootReducer;