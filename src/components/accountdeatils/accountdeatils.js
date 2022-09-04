import "./accountdeatils.css"

import profile from '../icons/profile.png'
import pic from '../icons/caret-down.png'
import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
const accountdeatils = () => {


    return (
        <div>
           <Navbar />
           <Sidebar/>
          <h2 style={{paddingLeft:'200px',paddingBottom:"300px", position: 'absloute',top:'35px'}}>Expenses</h2>
        <div className="cover">
            <h2>Account Details</h2>
            <h3>Enter the details to complete your profile</h3>
            <img src={profile} className="profile" alt="prfoile"></img> 

            <p className="pname">Name</p>
            <input className="input1" type="text" placeholder="Alex Senthil"  required />
            <p className="pname2">PhoneNumber</p>
            <input className="input2" type="text" placeholder="$5,+123-45678851000"  required />
         
            <p className="pname3">Country</p>
            <img  src={pic} alt="" />
            <input className="input3" type="text" placeholder="Germany"  required />
            <p className="pname4">DateofBirth</p>
            <i class="fa fa-calendar-minus-o" aria-hidden="true" ></i>
            <input className="input4" type="text" placeholder="28/05/2022"  required />
            <p className="pname5">EmailAddress</p>
            <input className="input5" type="email" placeholder="alex.senthil@gmail.com"  required />
            <p className="pname6">Gender</p>
            <button className="b2">
                Male
              </button>
              <button className="b3">
                Female
              </button>
            <button className="btn1">UPDATE</button>
           <div >
            
           </div>
            

        </div>
        </div>
    )
}

export default accountdeatils