import "../loginform/loginform.css"
import logo from '../loginform/logo.png'
const LoginForm = () => {


    return (
        <div className="loginbody">
            <img src={logo} className="App-logo" alt="logo"></img>


            <div className="logincover ">

                <h1>Login</h1>
                <h4>Continue to Login</h4>
                <h5>Phone Number</h5>
                <input type="text" placeholder="Enter Phone Number" required />
                <h6>Password</h6>
                <input type="password" placeholder="*******" required />

                <div className="login-btn" >LOGIN</div>





            </div>
        </div>
    
    )
}

export default LoginForm