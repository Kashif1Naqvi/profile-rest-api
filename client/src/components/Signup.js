import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {api} from '../api'
const Signup = (props) => {
  const [name ,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const handleSubmit = async (e) =>{
    e.preventDefault()
    const form = {
      name:name,
      email:email,
      password:password,
    }
    let response = await fetch(`${api()}/profile_api/profile/`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      mode:'cors',
      body:JSON.stringify(form)
    })
    if(response.status === 201){
      props.history.push('/login')
    }
  }
return(
  <div className="form-div">
    <h1 className="text-success text-center">Signup</h1>
    <p className="text-success text-center" >Please Signup to create a new account</p>
    <form className="form-horizontal" onSubmit={handleSubmit} >
      <div className="form-group">
        <label className="control-label text-success">Name</label>
          <input
            className="form-control"
            type="text" placeholder="Enter a Name"
            value={name}
            onChange={e=>setName(e.target.value)}
            required/>
      </div>
      <div className="form-group">
        <label className="control-label text-success">Email</label>
          <input
            className="form-control"
            type="email"
            placeholder="Enter a Email"
            value={email}
            onChange={e=>setEmail(e.target.value)}
            required/>
      </div>
      <div className="form-group">
        <label className="control-label text-success">Password</label>
          <input
            className="form-control"
            type="password"
            placeholder="Enter a Password"
            value={password}
            onChange={e=>setPassword(e.target.value)}
            required
          />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-outline-success center " >Join Us!</button>
      </div>
    </form>
    <p>Already have account? <Link className="btn btn-outline-success " to="/login"  >Login</Link></p>

  </div>
)
}

export default Signup
