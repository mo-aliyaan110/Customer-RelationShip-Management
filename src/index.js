import React from 'react';
import ReactDOM  from 'react-dom';
import Routing from './components/routing';
import 'bootstrap/dist/css/bootstrap.min.css';

// import { Logprovider}  from './components/context';
// import { useState } from 'react';

function App() {
    // const [log, setlogmet] = useState(false);
    
    
    // const logout = () =>{
    //     setlogmet(false);
    // }
    // const login = () =>{
    //     setlogmet(true)
    // }
    // const logdata = {
    //     log:log,
    //     login:login,
    //     logout:logout
    // }
    return (
        <div>
            {/* <Logprovider value={logdata} > */}
            <Routing/>
            {/* </Logprovider> */}
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'));
