import "./loginform.css"
import logo from '../../src/icons/logo.png'
const LoginForm = () => {


    return (
        <div>

<img src={logo} className="App-logo" alt="logo"></img> 


        <div className="cover">
            
            <h1>Login</h1>
            <h4>Continue to Login</h4>
            <h5>Phone Number</h5>
            <input type="text" placeholder="Enter Phone Number"  required />
            <h6>Password</h6>
            <input  type="password" placeholder="*******" required />

            <div className="login-btn" >LOGIN</div>

            

            

        </div>
        </div>
    )
}

export default LoginForm