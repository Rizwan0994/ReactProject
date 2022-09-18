import "../logout/logout.css"

import star from '../icons/star.png'
import {
  BrowserRouter as Router,
  
  Link
} from "react-router-dom";
const Logout = () => {


    return (
        <div className="loginbody">

        <div className="logoutcover">
        <img className="logoutimg" id ="logout" src={star}  alt="logo"></img> 
        
             <div className="button"></div>
              <p id ="logout" className="logoutaus"> Are You Sure?</p>
              <p id ="logout" className="logoutaus2">Are you sure you want to logout</p>
              <Link to="/login">
              <button id ="logout"  className="logoutb1"  href="/logout">
                Yes
              </button>
              </Link>
              <Link to="/account">
              <button id ="logout" className="logoutb2"  >
                No
              </button>
              </Link>
        </div>
        </div>
    )
}

export default Logout