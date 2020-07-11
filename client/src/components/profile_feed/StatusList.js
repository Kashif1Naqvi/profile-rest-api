import React from 'react'
import {Link} from 'react-router-dom'

import StatusDetail from './StatusDetail'
const StatusList = (props) => {
  const filterList = props.status.filter(status=> status.user_profile.toString() == props.props.id.toString()   )  
  const subList    = filterList.map(status=><StatusDetail status={status} key={status.id} />)
  return(
    <div>
      <Link  to={`/profiles/${props.props.id}/status`} className="btn btn-sm float-right btn-outline-success" >Create status</Link><br/><br/>
      {subList}
    </div>
  )
}

export default StatusList
