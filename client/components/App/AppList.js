import React from 'react';
import { connect } from 'react-redux';
//all actions which are linked to other components by "team_discussed" series of links
import {incrementLikes,chainDetails,transferFund,openModal} from '../../actions/actions.js';

import Main from './Main.Component.js';



const mapStateToProps = (state) => {
    return {
        //state variables which are access using props
        likes: state.incrementLikes,
        chain: state.chains,
        open: state.openModal
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        //state function
        incrementLikes: (likes) => dispatch(incrementLikes(likes)),
        fetchChain:(url)=>dispatch(chainDetails(url)),
        transferFund:(url,from,to,amount,uniqueId)=>dispatch(transferFund(url,from,to,amount,uniqueId)),
        openModal:(bool)=>dispatch(openModal(bool))
    };
}

var App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;