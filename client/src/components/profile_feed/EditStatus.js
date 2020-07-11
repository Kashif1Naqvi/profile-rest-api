import React,{useEffect,useState} from 'react'
import { useParams } from 'react-router-dom'
import {api} from '../../api'

const EditStatus = (props) => {
  const [status_text,setStatus] = useState({})
  const {id} = useParams()
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
  },[])
  const handleSubmit = async e => {
    e.preventDefault()
    let form = {
      status_text: status_text
    }
    console.log(form);
    let response  = await fetch(`${api()}/profile_api/feed/${id}/`,{
      method:'PUT',
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Token ${localStorage.token}`,
      },
      mode:'cors',
      body:JSON.stringify(form)
    })
    console.log(response);
    let data = await response.json()
    console.log("data",data);
    setStatus(data.status_text)
    if(response.status === 200){
      props.history.push(`/profiles/${data.user_profile}/`)
    }
}

  return(
    <form className="m-5 text-center" onSubmit={handleSubmit}>
      <div className="form-group" >
        <label htmlFor="status_text" >Create Status</label>
        <input
          type="text"
          onChange={e=>setStatus(e.target.value)}
          value={status_text.status_text}
          className="form-control"
          />
      </div>
      <button type="submit" className="btn btn-success" >submit</button>
    </form>
  )
}

export default EditStatus
