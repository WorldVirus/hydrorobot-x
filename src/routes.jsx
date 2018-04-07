// import React from 'react';
// import { Route }  from 'react-router';
// import App from 'components/main/App';
//
//
//
// export default function routes(storeRef) {
//     store = storeRef;
//
//     return (
//         <Route component={App} path='/'/>
//         // <Route component={aboutCompany} path='company' />
//
//         );
// }
import React from 'react';
import { Route }  from 'react-router';
import Navv from 'components/navbar/Navbar'
ReactDOM.render((
    <Router>
        <Route path="/" component={Navv} />
    </Router>
), document.getElementById('react-view'));
