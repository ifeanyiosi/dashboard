import React, { Component } from 'react'
import axios from 'axios'
import './newuser.scss'



class NewUser extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name:'',
          job: ''
       }
     }

     changeHandler = (e) =>{
         this.setState({[e.target.name] : e.target.value})
     }

     submitHandler = e => {
         e.preventDefault()
         console.log(this.state)
         axios.post('https://62823e3c9fac04c65411c0b5.mockapi.io/user', this.state)
         .then(response =>{
             console.log(response)
         })
         .catch(error =>{
             console.log(error)
         })
     }

  render() {

     const {name, job} = this.state

    


    return (
        <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm" onSubmit={this.submitHandler}>
        {/* <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" />
        </div> */}
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" name='name' value={name} onChange={this.changeHandler} />
        </div>
        {/* <div className="newUserItem">
          <label>Email</label>
          <input type="email" placeholder="john@gmail.com" />
        </div> */}
        <div className="newUserItem">
          <label>Occupation</label>
          <input type="text" placeholder="job" name='job' value={job} onChange={this.changeHandler}/>
        </div>
        {/* <div className="newUserItem">
          <label>Phone</label>
          <input type="text" placeholder="+1 123 456 78" />
        </div>
        <div className="newUserItem">
          <label>Address</label>
          <input type="text" placeholder="New York | USA" />
        </div>
        <div className="newUserItem">
          <label>Gender</label>
          <div className="newUserGender">
            <input type="radio" name="gender" id="male" value="male" />
            <label for="male">Male</label>
            <input type="radio" name="gender" id="female" value="female" />
            <label for="female">Female</label>
            <input type="radio" name="gender" id="other" value="other" />
            <label for="other">Other</label>
          </div>
        </div>
        <div className="newUserItem">
          <label>Active</label>
          <select className="newUserSelect" name="active" id="active">
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div> */}
        <button type='submit' className="newUserButton">Create</button>
      </form>
    </div>
      
    )
  }
}

export default NewUser