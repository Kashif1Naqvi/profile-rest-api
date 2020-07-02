import React,{useState} from 'react'
import {api} from '../api'
const Login = (props) => {
  const [username ,setUsername] = useState('')
  const [password,setPassword] = useState('')
  console.log(props);
  const handleSubmit = async (e) =>{
    e.preventDefault()
    const form = {
      username:username,
      password:password,
    }
    let response = await fetch(`${api()}/profile_api/login/`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      mode:'cors',
      body:JSON.stringify(form)
    })
    console.log(response);
    let data  = await response.json()
    let token = data.token

    if(response.status == 200){
      localStorage.setItem("token",token)
      props.history.push('/home')
    }
  }
return(
  <div className="form-div">
    <h1 className="text-success text-center">Login</h1>
    <p className="text-success text-center" >Please Login to create a new account</p>
    <form className="form-horizontal" onSubmit={handleSubmit} >
      <div className="form-group">
        <label className="control-label text-success">Email</label>
          <input
            className="form-control"
            type="email"
            placeholder="Enter a Email"
            value={username}
            onChange={e=>setUsername(e.target.value)}
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
        <button type="submit" className="btn btn-outline-success center " >Login</button>
      </div>
    </form>
  </div>
)
}

export default Login
