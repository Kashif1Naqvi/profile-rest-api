import React from 'react'
import {Link} from 'react-router-dom'
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
