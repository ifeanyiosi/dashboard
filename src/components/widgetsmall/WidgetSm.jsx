import React from 'react'
import './widgetSm.scss'

import {MdVisibility} from 'react-icons/md'

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
        <span className='widgetSmTitle'>Recent Users</span>
        <ul className='widgetSmList'>
            <li className='widgetSmLi'>
                <img
                className='widgetSmImg'
                 src="https://www.mykhel.com/thumb/250x90x250/football/players/4/19054.jpg" alt="" />
            <div className='widgetNewUser'>
                <span className='widgetSmUsername'>Lionel Messi</span>
                <span className='widgetSmRole'>False 9</span>

            </div>
            <button className='widgetSmBtn'>
                <MdVisibility className='widgetSmIcon'/>
                Display
            </button>
            </li>

            <li className='widgetSmLi'>
                <img
                className='widgetSmImg'
                 src="https://www.mykhel.com/thumb/250x90x250/football/players/4/19054.jpg" alt="" />
            <div className='widgetNewUser'>
                <span className='widgetSmUsername'>Lionel Messi</span>
                <span className='widgetSmRole'>False 9</span>

            </div>
            <button className='widgetSmBtn'>
                <MdVisibility className='widgetSmIcon'/>
                Display
            </button>
            </li>

            <li className='widgetSmLi'>
                <img
                className='widgetSmImg'
                 src="https://www.mykhel.com/thumb/250x90x250/football/players/4/19054.jpg" alt="" />
            <div className='widgetNewUser'>
                <span className='widgetSmUsername'>Lionel Messi</span>
                <span className='widgetSmRole'>False 9</span>

            </div>
            <button className='widgetSmBtn'>
                <MdVisibility className='widgetSmIcon'/>
                Display
            </button>
            </li>

            <li className='widgetSmLi'>
                <img
                className='widgetSmImg'
                 src="https://www.mykhel.com/thumb/250x90x250/football/players/4/19054.jpg" alt="" />
            <div className='widgetNewUser'>
                <span className='widgetSmUsername'>Lionel Messi</span>
                <span className='widgetSmRole'>False 9</span>

            </div>
            <button className='widgetSmBtn'>
                <MdVisibility className='widgetSmIcon'/>
                Display
            </button>
            </li>

            <li className='widgetSmLi'>
                <img
                className='widgetSmImg' 
                src="https://www.mykhel.com/thumb/250x90x250/football/players/4/19054.jpg" alt="" />
            <div className='widgetNewUser'>
                <span className='widgetSmUsername'>Lionel Messi</span>
                <span className='widgetSmRole'>False 9</span>

            </div>
            <button className='widgetSmBtn'>
                <MdVisibility className='widgetSmIcon'/>
                Display
            </button>
            </li>
            

        </ul>
    </div>
  )
}
