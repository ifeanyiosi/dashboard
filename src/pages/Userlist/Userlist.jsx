import React, { useEffect, useState } from 'react'
import './userlist.scss'


import { DataGrid } from '@material-ui/data-grid'
import {AiOutlineDelete} from 'react-icons/ai'
import { Link } from 'react-router-dom'

export default function Userlist() {
   const [users, fetchUsers] = useState([]);

    

  const handleDelete = (id) => {
        fetch(`https://62823e3c9fac04c65411c0b5.mockapi.io/user/${id}`, {method: 'DELETE'})
        .then(() => this.state({status:'delete ok'}))
    }

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
                <Link to={"/user/" + params.row.id}><button className='userListEdit'>Edit</button></Link> 
                 <AiOutlineDelete className='userListDelete'
                 onClick={() => handleDelete(params.row.id)}
                 />
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
