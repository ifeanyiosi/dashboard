import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import SideMenu from './components/SideMenu/SideMenu';
import Home from './pages/home/Home';
import Userlist from "./pages/Userlist/Userlist";
import User from "./pages/user/User";
import NewUser from "./pages/NewUser/NewUser";

function App() {
  return (
    <Router className="App">
      <Sidebar/>
      <div className='container'>
        <SideMenu/>

        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/users'>
            <Userlist/>
          </Route>
           <Route path='/user/:userId'>
            <User/>
          </Route>
          <Route path='/newuser'>
            <NewUser/>
          </Route>
          

        </Switch>
        

      </div>
    </Router>
  );
}

export default App;
