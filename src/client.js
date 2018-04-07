import { browserHistory, Router,Route,IndexRoute, } from 'react-router';
import React from 'react';
import ReactDOM from "react-dom"
import Navv from 'components/navbar/Navbar.jsx'
import HeadGoods from "components/goodsMain/HeadGoods"
 // ReactDOM.render(<App />, document.getElementById('react-view'));
ReactDOM.render((
      <Router history={browserHistory}>
          <Route path="/" component={Navv} />
    </Router>
 ),document.getElementById('react-view'));