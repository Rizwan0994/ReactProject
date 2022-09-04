import "./logout.css"

import star from '../icons/star.png'
const Logout = () => {


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

export default Logout