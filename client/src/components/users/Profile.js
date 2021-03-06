import React,{useEffect,useState} from 'react'
import UserFeed from '../profile_feed/UserFeed'
import {Link,useParams,useHistory} from 'react-router-dom'
import {api} from '../../api'
const Profile = (props) => {
const [user,setUser] = useState({})
const [show,setShow] = useState(false)
const [err,setErr] = useState('')

  let {id} = useParams()
  const history = useHistory()
  const logout = () => {
    localStorage.clear()
    props.history.push('/profiles')
  }

  const Edit = () => {
    history.push({
      pathname:`/profiles/edit/${user.id}`,
      state:{
        name:user.name,
        email:user.email,
        password:user.password,
      }
    })
  }
  const Patch = () => {
    history.push({
      pathname:`/profiles/patch/${user.id}`,
      state:{
        name:user.name,
        email:user.email,
        password:user.password,
      }
    })
  }

  const Delete =async () => {
      let response = await fetch(`http://192.168.0.102:8000/profile_api/profile/${id}`,{
        method:'DELETE',
        headers:{
          'Content-Type':'application/json',
          'Authorization':`Token ${localStorage.token}`
        },
        mode:'cors',
        referrer:'no-referrer',
        credentials:'same-origin',
        body:JSON.stringify(user)
      })
      if(response.status=== 204){
        alert("Your profile delete now")
        history.push('/profiles')
      }
  }

  useEffect(()=>{
    const fetchData = async () => {
      let response = await fetch(`${api()}/profile_api/profile/${id}/`,{
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
      fetchData()}
    ,[id])

  return(
    <div className="text-center mt-5 " >
    {
      show === true ?
        <div className="row" >
          <div className=" col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 text-success" >
              <h1>Welcome {user.name}!</h1>
              <img
                src="https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                alt="avatar"
                className="img img-fluid"
                />
              <p>{user.name}</p>
              <p>{user.email}</p>
              <button onClick={logout} className="btn btn-sm  btn-success" >Logout</button><br /><br />
              <button onClick={Edit} className="btn btn-sm  btn-info" >Edit Profile</button>
              <button onClick={Delete} className="btn btn-sm  btn-danger" >Delete Profile</button>
              <button onClick={Patch} className="btn btn-sm  btn-info" >Patch profile</button>
              <Link className="btn btn-success btn-sm " to="/profiles">Back to profiles</Link>

          </div>
          <div className="col-12 col-sm-6 col-md-6 col-xl-6 col-lg-6 text-success">
            <h3>Status {user.name}!</h3>
            <UserFeed {...props} />
          </div>

        </div>
        :<div>
          <p className="alert alert-danger">{err}</p>
          <Link className="alert alert-info" to="/profiles">Back to profiles</Link>
        </div>
      }
    </div>
  )
}

export default Profile
