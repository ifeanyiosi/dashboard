import React from 'react'
import './sidebar.scss'
import {GrNotification, GrLanguage} from 'react-icons/gr' 
import {FiSettings} from 'react-icons/fi'


export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>

            <div className="topLeft">
                <span className='logo'>User Groove</span>
                
                
            </div>
            <div className="topRight">
                <div className='topBarIconContainer'>
                    
                    <GrNotification/>
                 <span className="topIconBadge">
                    2
                 </span>
                </div>
                 <div className='topBarIconContainer'>
                    <GrLanguage/>
                    
                 <span className="topIconBadge">
                    2
                 </span>
                </div>
                 <div className='topBarIconContainer'>
                    
                    <FiSettings/>
                
                </div>
                <img className='topAvi' src="https://manunitedcore.com/wp-content/uploads/2021/09/Ronaldo-Profile.png" alt="" />
            </div>

        </div>
    </div>
  )
}
