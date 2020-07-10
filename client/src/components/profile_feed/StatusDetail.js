import React,{useEffect,useState} from 'react'
import Status from './Status'
import {Link} from 'react-router-dom'
import {api} from '../../api'
const StatusDetail = (props) => {
  return(
      <div>
        <p>{props.status.status_text}</p>
        <Link to={`/profiles/${props.status.user_profile}/status-detail/${props.status.id}`} >Show more</Link>
        <hr />
      </div>
  )
}

export default StatusDetail
