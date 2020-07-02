import React from 'react'
import {Link} from 'react-router-dom'
const User = ({id,name,email}) => {
  return(
    <div className="col col-sm-4 col-md-4 col-lg-4 col-xl-4 " >
      <div className="card">
          <img
            src="https://images.pexels.com/photos/1172207/pexels-photo-1172207.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt="avatar"
            className="img img-fluid"
            />
          <div className="card-body">
            <h4>{name}</h4>
            <p>{email}</p>
            <Link to={`profile/${id}`} >See more</Link>
          </div>
      </div>
    </div>
  )
}

export default User
