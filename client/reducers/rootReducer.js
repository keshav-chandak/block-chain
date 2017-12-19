import { combineReducers } from 'redux';
import { likes, incrementLikes,chains } from './reducers';//all reducers to merge into combineReducer

var rootReducer = combineReducers({ 
    incrementLikes,
    chains
});

export default rootReducer;