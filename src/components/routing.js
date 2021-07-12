import React from 'react';
import Header from './Header';
import {BrowserRouter, Route, Link } from 'react-router-dom';


function Routing() {
    return (
        <div>
            <BrowserRouter>
            <Header/>
                {/* <Route exact path='/' component={Home}/>
                <Route exact path='/customers' component={Customers}/>
                <Route exact path='/registration' component={Register}/> */}
            </BrowserRouter>
        </div>
    )
}
export default Routing;
