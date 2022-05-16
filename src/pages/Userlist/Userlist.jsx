import React, { useEffect, useState } from 'react'
import './userlist.scss'

import {MdVisibility} from 'react-icons/md'
import { DataGrid } from '@material-ui/data-grid'
import {AiOutlineDelete} from 'react-icons/ai'

export default function Userlist() {
   const [users, fetchUsers] = useState([])

    const getData = () => {
        fetch('https://62823e3c9fac04c65411c0b5.mockapi.io/user')
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
        {field: 'name', headerName: 'Name', width:150},
        {field: 'job', headerName: 'Occupation', width:150},
         {field: 'createdAt', headerName: 'Date Joined', width:150},
         {field: 'action', headerName: 'Action', width:150,
         renderCell: (params) =>{
             return(
                 <>
                 <button className='userListEdit'>Edit</button>
                 <AiOutlineDelete className='userListDelete'/>
                 </>
             )

         }
        }
       

    ]


  return (
      
    <div className='userlist' style={{height:700, width: '100%'}}>
         <span className="widgetSmTitle">Recent Users</span>

         

        <DataGrid
        rows={users}
        columns={columns}
        pageSize={12}
        
        />

    </div>
  )}
