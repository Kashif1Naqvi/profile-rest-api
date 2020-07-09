import React from 'react'
import StatusDetail from './StatusDetail'

const StatusList = (props) => {
  const filterList = props.status.filter(status=>status.user_profile == props.props.id )
  const subList    = filterList.map(status=><StatusDetail status={status} key={status.id} />)
  console.log(filterList)
  return(
    <div>
        {subList}
    </div>
  )
}

export default StatusList
