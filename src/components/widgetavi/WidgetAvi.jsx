import React, { useEffect, useState } from 'react'
import './widgetavi.scss'

import {MdVisibility} from 'react-icons/md'
import { DataGrid } from '@material-ui/data-grid'

export default function WidgetAvi() {
   const [users, fetchUsers] = useState([])

    const getData = () => {
        fetch('https://62823e3c9fac04c65411c0b5.mockapi.io/comments')
        .then((res) => res.json())
        .then((res) => {
            console.log(res)
            fetchUsers(res)
        })
    }

   
     useEffect(() =>{
        getData()
    }, [])

    const columns = [
        {field: 'id', headerName: 'ID'},
        {field: 'username', headerName: 'Handle', width:150},
        {field: 'post', headerName: 'post', width:150},
         
       

    ]


  return (
      
    <div className='widgetAvi' style={{height:500, width: '50%'}} >
         <span className="widgetAviTitle">Recent Posts</span>

         

        <DataGrid
        rows={users}
        columns={columns}
        pageSize={7}
        
        />

    </div>
  )}