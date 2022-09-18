import "../accountdeatils/accountdeatils.css"
import profile from '../icons/profile.png'
import pic from '../icons/caret-down.png'
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from "react-router-dom";
const accountdeatils = () => {


    return (
        <div>
           <Navbar />
           <Sidebar/>
          <h2 id="account" style={{paddingLeft:'200px',paddingBottom:"300px", position: 'absloute',top:'35px'}}>Expenses</h2>
        <div className="accountcover">
            <h2  id="account" >Account Details</h2>
            <h3  className="accounth3">Enter the details to complete your profile</h3>
            <img  id="account" src={profile} className="profile" alt="prfoile"></img> 

            <p  id="account" className="pname">Name</p>
            <input   id="account" className="input1" type="text" placeholder="Alex Senthil"  required />
            <p  id="account" className="pname2">PhoneNumber</p>
            <input id="account"  className="input2" type="text" placeholder="$5,+123-45678851000"  required />
         
            <p  id="account" className="pname3">Country</p>
            <img className="accountimg1" id="account" src={pic} alt="" />
            <input  id="account" className="input3" type="text" placeholder="Germany"  required />
            <p  id="account" className="pname4">DateofBirth</p>
            <i  id="account" class="fa fa-calendar-minus-o" aria-hidden="true" ></i>
            <input  id="account" className="input4" type="text" placeholder="28/05/2022"  required />
            <p  id="account" className="pname5">EmailAddress</p>
            <input  id="account" className="input5" type="email" placeholder="alex.senthil@gmail.com"  required />
            <p  id="account" className="pname6">Gender</p>
            <button  id="account" className="b2">
                Male
              </button>
              <button id="account"  className="b3">
                Female
              </button>
              
             <Link to="/home">
            <button   id="account" className="btn1">UPDATE</button></Link>
           <div >
            
           </div>
            

        </div>
        </div>
    )
}

export default accountdeatils