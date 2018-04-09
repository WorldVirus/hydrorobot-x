import { browserHistory, Router,Route,IndexRoute, } from 'react-router';
import React from 'react';
import ReactDOM from "react-dom"
import Navv from 'components/navbar/Navbar.jsx'
import HeadGoods from "components/goodsMain/HeadGoods"
import MainLayout from "components/main/MainLayout"
import Information from "components/information/Information"
import Support from "components/support/Support"
import About from "components/about/About"

ReactDOM.render((
      <Router history={browserHistory}>
<Route component = {MainLayout}>
  <Route component = {Navv}>
    <Route  component={HeadGoods} >
     <Route path="/" component={Information} />
    </Route>
    <Route path = "support"  component = {Support}/>
<Route  path  = "about" component={About} />

    </Route>
  </Route>
</Router>
 ),document.getElementById('react-view'));