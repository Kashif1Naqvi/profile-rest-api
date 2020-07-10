import React ,{useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import {api} from '../../api'
import StatusList from './StatusList'
import CreateStatus from './CreateStatus'
const UserFeed = (props) => {
  const [status,setStatus] = useState([])

  useEffect(()=>{
    const fetchData = async () => {
      let response = await fetch(`${api()}/profile_api/feed/`,{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
          'Authorization':`Token ${localStorage.token}`
        },
        mode:'cors'
      })
      let data = await response.json()
      setStatus(data)
    }
    fetchData()
  },[])

    return(
      <div>
        <StatusList
              status={status}
              props={props.match.params}
        />
      </div>
    )
}

export default UserFeed
