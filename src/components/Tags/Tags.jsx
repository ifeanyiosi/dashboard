import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import './tags.scss'

const data = [
  {
    name: 'Dogs',
    'Active Users': 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Winter',
    'Active Users': 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Water',
    'Active Users': 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Private Info request',
   'Active Users': 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Fashion',
    'Active Users': 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Cats',
     'Active Users': 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Football',
    'Active Users': 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function Tags() {
  return (
    <div className='tag'>
        <h3 className='chart-title'>
            Popular Tags
        </h3>
        <ResponsiveContainer width='100%' aspect={4 / 1 } >

            <LineChart data={data}>

                <XAxis dataKey='name' stroke='#5550bd'/>

                <Line type='monotone' dataKey='Active Users' stroke='#5550bd' />
                <Tooltip/>

            </LineChart>

        </ResponsiveContainer>
    </div>
  )
}
