import { combineReducers } from 'redux';
import { likes, incrementLikes,chains ,transfer ,openModal, openId } from './reducers';//all reducers to merge into combineReducer

var rootReducer = combineReducers({ 
    incrementLikes,
    chains,
    transfer,
    openModal,
    openId
});

export default rootReducer;