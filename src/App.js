
import Login from './components/loginform/loginform';
import Logout from './components/logout/logout';
import Account from './components/accountdeatils/accountdeatils';
import Home from './components/home/home';
import Users from './components/users/users';
import Active from './components/activeaccount/activeaccount'
import Graphs from './components/graphs/graphs'
import "../src/App.css";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes
} from "react-router-dom";
function App() {
  return (
    
   <BrowserRouter>
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/graph" element={<Graphs />} />
    <Route path="/login" element={<Login />} />
    <Route path="/account" element={<Account />} />
    <Route path="/home" element={<Home />} />
    <Route path="/logout" element={<Logout />} />
    <Route path="/users" element={<Users/>} />
    <Route path="/active" element={<Active/>} />
    </Routes>
    </BrowserRouter>
  
   
  );

}

export default App;
