import React,{useState,useEffect} from 'react'
import {api} from '../../api'
const SingleStatus =(props) => {
  const [status,setStatus] = useState({})
  const [detail,setDetail] = useState({})
  const id = props.match.params.id
  useEffect(()=>{
    const fetchData = async () => {
      let response = await fetch(`${api()}/profile_api/feed/${id}/`,{
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
  })

  const handleDelete =async () => {
    const response = await fetch(`${api()}/profile_api/feed/${id}/`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Token ${localStorage.token}`
      },
      mode:'cors'
    })
    if(response.status===204){
      alert(`${status.status_text} Delete successfully `)
      props.history.push(`/profiles/${status.user_profile}`)
    }
  }
  console.log(props);
  return(
    <div className="container">
    <div className="m-5 text-center" >
        <h1 className="text-info" >My Status</h1>
        <p><b>Status:</b>{status.status_text}</p>
        <button onClick={handleDelete} >Delete</button>
      </div>

    </div>
  )
}


export default SingleStatus
