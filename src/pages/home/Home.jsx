import React from 'react'
import FeaturedInfo from '../../components/featuredinfo/FeaturedInfo'
import Tags from '../../components/Tags/Tags'
import './home.scss'

export default function Home() {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Tags/>
    </div>
  )
}
