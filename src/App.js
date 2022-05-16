import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import SideMenu from './components/SideMenu/SideMenu';
import Home from './pages/home/Home';
import Userlist from "./pages/Userlist/Userlist";

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
          

        </Switch>
        

      </div>
    </Router>
  );
}

export default App;
