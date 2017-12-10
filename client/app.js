import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";
import { Provider } from "react-redux";

import App from "./components/App/AppList";
import Main from "./components/App/Main.Component";
import store from "./store/configStore";


var injectTapEventPlugin=require("react-tap-event-plugin");
//here sending empty initialstates
injectTapEventPlugin(); 

var router = (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
     </Route>
   </Router>
  </Provider>
);
ReactDOM.render(router, document.getElementById("app"));
