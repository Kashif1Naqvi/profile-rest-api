import React,{useEffect,useState} from 'react'

const Profile = (props) => {

  useEffect(()=>{
      let id = props.match.params.id

  })
  return(
    <div>
      <h1>profile</h1>

    </div>
  )
}

export default Profile
