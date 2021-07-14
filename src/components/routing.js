import React from 'react';
import LoginBtn from './Loginbtn'

import Home from './Home';
import InsideLogin from './InsideLogin';
import {BrowserRouter, Route,  } from 'react-router-dom';
import Registration from './Registration';
import Customers from './Customers';


function Routing() {
    return (
        <div>
            <BrowserRouter>
            
                <Route exact path='/' component={Home}/>
                <Route exact path='/login' component={LoginBtn}/>
                <Route exact path='/insidelogin' component={InsideLogin}/>
                <Route exact path='/registration' component={Registration}/>
                <Route exact path='/customers' component={Customers}/>
            </BrowserRouter>
        </div>
    )
}
export default Routing;
