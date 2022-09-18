import "../loginform/loginform.css"
import logo from '../loginform/logo.png'

import {
    BrowserRouter as Router,
    
    Link
  } from "react-router-dom";
import { Button } from "react-bootstrap";
const LoginForm = () => {


    return (
        <div className="loginbody">
            <img  id ="login" src={logo} className="App-logo" alt="logo"></img>


            <div className="logincover ">

                <h1 className="login" >Login</h1>
                <h4 id="login">Continue to Login</h4>
                <h5 id="login">Phone Number</h5>
                <input  className="logininput" id="login" type="text" placeholder="Enter Phone Number" required />
                <h6  id="login">Password</h6>
                <input className="logininputt"  id="login" type="password" placeholder="*******" required />
                
                <button className="login-btn"  ><a className="ac" href="/graph/">LOGIN</a></button>
                

            </div>
        </div>
    
    )
}

export default LoginForm