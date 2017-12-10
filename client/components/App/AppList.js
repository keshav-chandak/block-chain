import React from 'react';
import { connect } from 'react-redux';
//all actions which are linked to other components by "team_discussed" series of links
import {incrementLikes} from '../../actions/actions.js';

import Main from './Main.Component.js';



const mapStateToProps = (state) => {
    return {
        //state variables which are access using props
        likes: state.incrementLikes,
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        //state function
        incrementLikes: (likes) => dispatch(incrementLikes(likes)),
    };
}

var App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;