import React,{useState} from 'react'
import {useHistory,useLocation,useParams} from 'react-router-dom'
import {api} from '../../api'
const PatchProfile = () => {
  const object = useLocation().state
  const history = useHistory()
  const {id} = useParams()
  const [name ,setName] = useState(object.name)
  const [email,setEmail] = useState(object.email)
  const [password,setPassword] = useState(object.password)


  const handlePatch =async (e) => {
    e.preventDefault()
    const form ={
      name:name,
      email:email,
      password:password
    }
    let response = await fetch(`${api()}/profile_api/profile/${id}/`,{
      method:'PATCH',
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
      history.push(`/profiles/${id}`)
    }
  }
    return(
      <div  className="form-div">
        <h1>Patch Profile! </h1>
        <form className="form-horizontal" onSubmit={handlePatch}>
          <div className="form-group">
            <label className="control-label text-success">Name</label>
              <input
                className="form-control"
                type="text" placeholder="Enter a Name"
                defaultValue={name}
                onChange={e=>setName(e.target.value)}
                />
          </div>
          <div className="form-group">
            <label className="control-label text-success">Email</label>
              <input
                className="form-control"
                type="email"
                placeholder="Enter a Email"
                defaultValue={email}
                onChange={e=>setEmail(e.target.value)}
                />
          </div>
          <div className="form-group">
            <label className="control-label text-success">Password</label>
              <input
                className="form-control"
                type="password"
                placeholder="Enter a Password"
                defaultValue={password}
                onChange={e=>setPassword(e.target.value)}
              />
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-outline-success center " >Patch Profile</button>
          </div>
        </form>
      </div>
    )
}


export default PatchProfile
