import React,{useEffect} from 'react'


const StatusDetail = (props) => {
  console.log(props);
  return(
    <div>
      {props.status.status_text}
      <hr />
    </div>
  )
}

export default StatusDetail
