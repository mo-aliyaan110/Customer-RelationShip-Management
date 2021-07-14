import React from 'react';
import { Link } from 'react-router-dom';
// import './styles/home.css';

const InsideLogin = () =>{
    return(
        // Header
        <div >
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <div class="container-fluid">
                    <Link class="navbar-brand" to="/insidelogin">CRM</Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/customers">Customers</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link active" aria-current="page" to="/registration">Registration</Link>
                        </li>
                        <li class="nav-item">
                        <Link class="nav-link" to="/">Logout</Link>
                        </li>
                        
                    
                    </ul>
                    </div>
                </div>
            </nav>
            {/* Main Body Starts */}
            {/* <div id="parent">
                    <div className="secondchild">
                        <div className="containerr">
                            <h3>Learning to Code</h3>
                            <h4>Opening a door to the future</h4>
                            <img className="img" src="./img/green-line.png" alt="green-line"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem optio cumque quaerat iste atque aspernatur similique non, nisi facilis totam consectetur, modi eaque, esse harum nesciunt fugiat voluptas doloribus! Quas?</p>
                        </div>
                        <span>Read more</span>
                    </div>
                    <div className="firstchild">

                        <div className="containerr2">
                            <h3>Learning to Code</h3>
                            <h4>Opening a door to the future</h4>
                            <img className="img" src="./img/green-line.png" alt="green-line"/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem optio cumque quaerat iste atque aspernatur similique non, nisi facilis totam consectetur, modi eaque, esse harum nesciunt fugiat voluptas doloribus! Quas?</p>
                        </div>
                        <span>Read more</span>
                    </div>
            </div> */}
        </div>

    )
}
export default InsideLogin;