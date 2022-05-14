import React from 'react'
import './sidemenu.scss'
import {MdLineStyle} from 'react-icons/md'
import {FiTrendingUp, FiUsers} from 'react-icons/fi'

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
            </div>
    </div>
  )
}
