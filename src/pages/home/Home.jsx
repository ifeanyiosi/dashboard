import React from 'react'
import FeaturedInfo from '../../components/featuredinfo/FeaturedInfo'
import Tags from '../../components/Tags/Tags'
import './home.scss'
import { UserData } from '../../dummyData/dummyTags'
import WidgetAvi from '../../components/widgetavi/WidgetAvi'
import WidgetSm from '../../components/widgetsmall/WidgetSm'

export default function Home() {
  return (
    <div className='home'>
        <FeaturedInfo/>
        <Tags data={UserData} title="Popular Tags" grid dataKey="Active Users"/>
        <div className='homeWidgets'>
          <WidgetSm/>
          <WidgetAvi/>
        </div>
    </div>
  )
}
