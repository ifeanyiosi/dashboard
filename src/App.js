
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import SideMenu from './components/SideMenu/SideMenu';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div className='container'>
        <SideMenu/>
       <div className='others'>
        other pages
       </div>

      </div>
    </div>
  );
}

export default App;
