import { combineReducers } from 'redux';
import { likes, incrementLikes,chains ,transfer ,openModal } from './reducers';//all reducers to merge into combineReducer

var rootReducer = combineReducers({ 
    incrementLikes,
    chains,
    transfer,
    openModal
});

export default rootReducer;