import "./user.css"

import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Table from '../users/Table'
const Users = () => {


    return (
        <div>
            <Navbar />
          <Sidebar/>
          
        <div className="coverusers">
       
            <Table/>

        </div>
        </div>
    )
}

export default Users