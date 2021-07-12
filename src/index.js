import React from 'react';
import ReactDOM  from 'react-dom';
import Routing from './components/routing';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <div>
            <Routing/>
        </div>
    )
}
ReactDOM.render(<App/>, document.getElementById('root'));
