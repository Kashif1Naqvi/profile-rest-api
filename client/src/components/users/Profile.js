import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'

import {api} from '../../api'
const Profile = (props) => {
const [user,setUser] = useState({})
const [show,setShow] = useState(false)
const [err,setErr] = useState('')

  const logout = () => {
    localStorage.clear()
    props.history.push('/profiles')
  }

  useEffect(()=>{
      const fetchData = async () => {
        let response = await fetch(`${api()}/profile_api/profile/${props.match.params.id}/`,{
          method:"GET",
          cache:"no-cache",
          credentials:'same-origin',
          redirect: "follow",
          referrer: "no-referrer",
          headers:{
            'Content-Type': 'application/json',
            'Authorization':`Token ${localStorage.token}`,
          } ,
          mode:'cors'
        })
        let data  = await response.json()
        if(response.status===200){
            setUser(data)
            setShow(true)
        }else{
            setErr(data.detail)
        }

      }
      fetchData()
  },[])

  return(
    <div className="text-center mt-5 " >
    {
      show === true ?
        <div className="text-success" >
          <h1>Profile</h1>
          <img
            src="https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="avatar"
            className="img img-fluid"
            />
          <p>{user.name}</p>
          <p>{user.email}</p>
          <button onClick={logout} className="btn btn-success" >Logout</button>
        </div>:<div>
          <p className="alert alert-danger">{err}</p>
          <Link className="alert alert-info" to="/profiles">Back to profiles</Link>
          </div>
      }
    </div>
  )
}

export default Profile
