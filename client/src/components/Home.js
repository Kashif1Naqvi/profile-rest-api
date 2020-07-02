import React,{useState,useEffect} from 'react'
import {api} from '../api'
import User from './users/User'
const Home = () => {
  const [users,setUser] = useState([])
  useEffect(()=>{
    const fetchData = async () => {
      let response = await fetch(`${api()}/profile_api/profile/`,{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
        },
        mode:'cors'
      })
      let data = await response.json()
      setUser(data)
    }
    fetchData()
  },[])
  const userList = users.map((user)=><User {...user} key={user.id} />)
  return(
    <div>
      {userList}
    </div>
  )
}

export default Home
