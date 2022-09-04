
/*import Login from './components/loginform/loginform';
import LogoutScreen from './components/logout/logout';
import Account from './components/accountdeatils/accountdeatils';
 import Home from './components/home/home';*/
 import Users from './components/users/users'
import "../src/App.css";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
function App() {
  return (
  /*  <BrowserRouter>
    <Routes>
    <Route path="/login" element={<Login />} />
    <Route path="/account" element={<Account />} />
    <Route path="/home" element={<Home />} />
    <Route path="/Logout" element={<LogoutScreen />} />
    </Routes>
    </BrowserRouter>
    */
   <>
   <Users/>
   </>
  );


}
//<LoginForm/>
//<Logout />
export default App;
