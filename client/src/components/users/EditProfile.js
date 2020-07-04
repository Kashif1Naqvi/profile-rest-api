import React,{useState} from 'react'
import {Redirect} from 'react-router-dom'
import {api} from '../../api'
const EditProfile = (props) => {
  const object = props.history.location.state
  const [name ,setName] = useState(object.name)
  const [email,setEmail] = useState(object.email)
  const [password,setPassword] = useState(object.password)
  const handleEdit =async (e) => {
    e.preventDefault()
    const form ={
      name:name,
      email:email,
      password:password
    }
    let response = await fetch(`${api()}/profile_api/profile/${props.match.params.id}/`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Token ${localStorage.token}`
      },
      mode:'cors',
      credentials:'same-origin',
      referrer:'no-referrer',
      body:JSON.stringify(form)
    })

    if(response.status===200){
      props.history.push(`/profiles/${props.match.params.id}`)
    }
  }
    return(
      <div  className="form-div">
        <h1>Edit Profile! </h1>
        <form className="form-horizontal" onSubmit={handleEdit}>
          <div className="form-group">
            <label className="control-label text-success">Name</label>
              <input
                className="form-control"
                type="text" placeholder="Enter a Name"
                defaultValue={name}
                onChange={e=>setName(e.target.value)}
                required/>
          </div>
          <div className="form-group">
            <label className="control-label text-success">Email</label>
              <input
                className="form-control"
                type="email"
                placeholder="Enter a Email"
                defaultValue={email}
                onChange={e=>setEmail(e.target.value)}
                required/>
          </div>
          <div className="form-group">
            <label className="control-label text-success">Password</label>
              <input
                className="form-control"
                type="password"
                placeholder="Enter a Password"
                defaultValue={password}
                onChange={e=>setPassword(e.target.value)}
                required
              />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-outline-success center " >Edit Profile</button>
          </div>
        </form>
      </div>
    )
}

export default EditProfile
