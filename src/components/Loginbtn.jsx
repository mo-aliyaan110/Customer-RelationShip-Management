import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Header from './Header';
// import {Logconsumer} from './context';


 
class LoginBtn extends Component {

    constructor(){
        super()
        this.state = {
            nav:''
        }
    }
    render() {
        const handleLogin = () =>{
            console.log(this.props);
        }
        
        return (
            <div>
                {/* <Logconsumer> */}
                <Header/>
                <Link to="/insidelogin" > <button onClick={handleLogin} className='m-5  btn btn-primary'> Login </button> </Link>
                {/* </Logconsumer> */}
            </div>
        )
    }
}

export default LoginBtn