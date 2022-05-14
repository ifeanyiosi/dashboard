import React from 'react'
import './featuredinfo.scss'
import {AiOutlineArrowDown, AiOutlineArrowUp} from 'react-icons/ai'

export default function FeaturedInfo() {
  return (
    <div className='featured'>

        <div className="featuredItem">
            <span className="featuredTitle">Users</span>

            <div className='featuredUserContainer'>
            <span className='featuredUsers'>55</span>
            <span className='featuredNewUsers'> -12 <AiOutlineArrowDown className='featuredIcon negative'/> </span>
            </div>
            
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Posts</span>

            <div className='featuredUserContainer'>
            <span className='featuredUsers'>150</span>
            <span className='featuredNewUsers'> +48 <AiOutlineArrowUp className='featuredIcon positive' /> </span>
            </div>
            
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Comments</span>

            <div className='featuredUserContainer'>
            <span className='featuredUsers'>450</span>
            <span className='featuredNewUsers'> +45 <AiOutlineArrowUp className='featuredIcon positive' /> </span>
            </div>
            
        </div>

        <div className="featuredItem">
            <span className="featuredTitle">Tags</span>

            <div className='featuredUserContainer'>
            <span className='featuredUsers'>90</span>
            <span className='featuredNewUsers'> +8 <AiOutlineArrowUp className='featuredIcon positive'/> </span>
            </div>
            
        </div>



    </div>
  )
}
