import { combineReducers } from 'redux';
import { likes, incrementLikes,chains ,transfer } from './reducers';//all reducers to merge into combineReducer

var rootReducer = combineReducers({ 
    incrementLikes,
    chains,
    transfer
});

export default rootReducer;