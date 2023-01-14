import Userrg from './Userrg';
import Adminrg from './Adminrg';
import Adminlog from './Adminlog';
import Userlog from './Userlog';
import './App.css';
import { Routes, Route,Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <nav class="navbar navbar-inverse">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">registration</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><Link to="/">User reg</Link></li>           
      <li><Link to="/Admin">Admin reg</Link></li>
      <li><Link to="/UserLogIn">User LogIn</Link></li>
      <li><Link to="/AdminLogIn">Admin LogIn</Link></li>
    </ul>
  </div>
</nav>



<Routes>

<Route path="/" element={<Userrg />} />

<Route path="/Admin" element={<Adminrg />} />
<Route path="/UserLogIn" element={<Userlog />} />
<Route path="/AdminLogIn" element={<Adminlog />} />
</Routes>



    </div>



  );
}

export default App;
