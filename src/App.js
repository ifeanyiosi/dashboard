
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import SideMenu from './components/SideMenu/SideMenu';
import Home from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div className='container'>
        <SideMenu/>
        <Home/>

      </div>
    </div>
  );
}

export default App;
