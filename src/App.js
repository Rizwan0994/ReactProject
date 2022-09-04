import LoginForm from "./components/loginform";
import Logout from "./components/logout";
import AccountDetails from "./components/accountdeatils";
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="AppGlass">
      <Navbar />
      
      <Sidebar/>
      <AccountDetails/>
      </div>
     
    {/* <div className="page">
     
      <AccountDetails/>
      <Navbar />
      <Sidebar/>

    </div> */}
    </div>
  );
}
//<LoginForm/>
//<Logout />
export default App;
