import {browserHistory, Router, Route, IndexRoute,} from 'react-router';
import React from 'react';
import ReactDOM from "react-dom"
import Navv from 'components/navbar/Navbar.jsx'
import HeadGoods from "components/goodsMain/HeadGoods"
import MainLayout from "components/main/MainLayout"
import Information from "components/information/Information"
import Support from "components/support/Support"
import About from "components/about/About"
import Contacts from "components/contacts/Contacts"
import Lease from "components/lease/Lease"
import Robots from "components/robots/Robots"
import News from "components/news/News"
import Arenda from "components/arenda/Arenda"

import {createStore, applyMiddleware, compose} from 'redux';
import {syncHistoryWithStore, routerMiddleware} from 'react-router-redux';
import {Provider} from 'react-redux';

const Root = (props) => {
    return (
        < Router
    history = {browserHistory} >
        < Route
    component = {MainLayout} >
        < Route
    component = {Navv} >
        < Route
    component = {HeadGoods} >
        < Route
    path = "/"
    component = {Information}
    />
    < /Route>
    < Route
    path = "services"
    component = {Lease}
    />
    < Route
    path = "news"
    component = {News}
    />
    < Route
    path = "lease"
    component = {Arenda}
    />

    < Route
    path = "products"
    component = {Robots}
    />
    < Route
    path = "support"
    component = {Support}
    />
    < Route
    path = "about"
    component = {About}
    />
    < Route
    path = "contacts"
    component = {Contacts}
    />

    < /Route>
    < /Route>
    < /Router>
)
    ;
};
export default Root;