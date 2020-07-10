import React,{useState,useRef} from 'react'
import {api} from '../../api'

const CreateStatus = (props) => {

console.log(props);
  const [status_text,setStatus] = useState('')
  const handleSubmit = async e => {
    e.preventDefault()
    let form = {
      status_text:status_text
    }
    let response  = await fetch(`${api()}/profile_api/feed/`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'Authorization':`Token ${localStorage.token}`,
      },
      mode:'cors',
      body:JSON.stringify(form)
    })
    let data = await response.json()
    setStatus(data.status_text)
    if(response.status === 201){
      props.history.push(`/profiles/${props.match.params.id}`)
    }
}
  return(
    <form className="m-5 text-center" onSubmit={handleSubmit}>
      <div className="form-group" >
        <label htmlFor="status_text" >Create Status</label>
        <input
          type="text"
          onChange={e=>setStatus(e.target.value)}
          value={status_text}
          className="form-control"
          />
      </div>
      <button type="submit" className="btn btn-success" >submit</button>
    </form>
  )
}


export default CreateStatus
