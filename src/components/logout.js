import "./logout.css"
import "./loginform.css"
import star from '../../src/icons/star.png'
const LoginForm = () => {


    return (
        <div>

        <div className="cover">
        <img src={star}  alt="logo"></img> 
        
             <div class="button"></div>
              <p className="aus"> Are You Sure?</p>
              <p className="aus2">Are you sure you want to logout</p>
              <button className="b1">
                Yes
              </button>
              <button className="b2">
                No
              </button>

        </div>
        </div>
    )
}

export default LoginForm