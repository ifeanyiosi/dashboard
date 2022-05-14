import React from 'react'
import './sidemenu.scss'
import {MdLineStyle, MdReport} from 'react-icons/md'
import {FiTrendingUp, FiUsers} from 'react-icons/fi'
import {SiSimpleanalytics} from 'react-icons/si'
import {CgCommunity} from 'react-icons/cg'
import {AiOutlineMail} from 'react-icons/ai'
import {VscFeedback} from 'react-icons/vsc'
import {BiMessage} from 'react-icons/bi'
import {BsBriefcase} from 'react-icons/bs'

export default function SideMenu() {
  return (
    <div className='sideMenu'>
            <div className="sideMenuWrapper">
                <div className="sideMenu-menu">
                    <h3 className='sideMenuTitle'>Dashboard</h3>
                    <ul className='menuList'>
                        <li className='menuListItem'>
                            <MdLineStyle className='menuIcon'/>
                            Home
                        </li>

                        <li className='menuListItem'>
                            <FiTrendingUp className='menuIcon'/>
                            Trending
                        </li>

                        <li className='menuListItem'>
                            <FiUsers className='menuIcon'/>
                            Users
                        </li>

                    </ul>
                </div>

                <div className="sideMenu-menu">
                    <h3 className='sideMenuTitle'>Quick Menu</h3>
                    <ul className='menuList'>
                        <li className='menuListItem'>
                            <MdReport className='menuIcon'/>
                            Reports
                        </li>

                        <li className='menuListItem'>
                            <SiSimpleanalytics className='menuIcon'/>
                            Analytics
                        </li>

                        <li className='menuListItem'>
                            <CgCommunity className='menuIcon'/>
                            Communities
                        </li>

                    </ul>
                </div>

                <div className="sideMenu-menu">
                    <h3 className='sideMenuTitle'>Notifications</h3>
                    <ul className='menuList'>
                        <li className='menuListItem'>
                            <AiOutlineMail className='menuIcon'/>
                            Mail
                        </li>

                        <li className='menuListItem'>
                            <VscFeedback className='menuIcon'/>
                            Feedback
                        </li>

                        <li className='menuListItem'>
                            <BiMessage className='menuIcon'/>
                            Messages
                        </li>

                    </ul>
                </div>

                <div className="sideMenu-menu">
                    <h3 className='sideMenuTitle'>Staff</h3>
                    <ul className='menuList'>
                        <li className='menuListItem'>
                            <BsBriefcase className='menuIcon'/>
                            Manage
                        </li>

                        <li className='menuListItem'>
                            <SiSimpleanalytics className='menuIcon'/>
                            Analytics
                        </li>

                        <li className='menuListItem'>
                            <MdReport className='menuIcon'/>
                           Reports
                        </li>

                    </ul>
                </div>
            </div>
    </div>
  )
}
