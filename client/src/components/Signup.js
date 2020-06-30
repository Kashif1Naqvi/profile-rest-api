import React,{useState} from 'react'


const Signup = () => {
  const [name ,setName] = useState('name')
return(
  <div className="form-div">
    <h1 className="text-center" >Join us Today!</h1>
    <form className="form-horizontal" onSubmit={handleSubmit} >
      <div className="form-group">
        <label className="control-label ">Name</label>
          <input className="form-control" size="10" type="text" placeholder="Enter a Name" required/>
      </div>
      <div className="form-group">
        <label className="control-label ">Email</label>
          <input className="form-control" type="email" placeholder="Enter a Email" required/>

      </div>
      <div className="form-group">
        <label className="control-label ">Password</label>
          <input className="form-control  " type="password" placeholder="Enter a Password" required/>
      </div>
      <div className="form-group  " >
        <button type="submit" className="btn btn-outline-success center " >Join Us!</button>
      </div>
    </form>
  </div>
)
}

export default Signup

const handleSubmit = async (e) =>{
  e.preventDefault()

}
