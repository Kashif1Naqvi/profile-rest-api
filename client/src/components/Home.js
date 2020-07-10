import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import {api} from '../api'
import User from './users/User'
import Query from './users/Query'
const Home = (props) => {
  
  const [users,setUser] = useState([])
  const [search,setSearch] = useState('')
  const [query,setquery] = useState('')
  useEffect(()=>{
    const fetchData = async () => {
      let response = await fetch(`${api()}/profile_api/profile/`,{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
        },
        mode:'cors'
      })
      let data = await response.json()
      setUser(data)
    }
    fetchData()
  },[])

    const handleSearch =async (e)=>{
          e.preventDefault()
          let response = await fetch(`${api()}/profile_api/profile/?search=${search}`,{
            method:'GET',
            headers:{
              'Content-Type':'application/json'
            },
            mode:'cors',
          })
          let data =await response.json()
          setquery(data)
      }


  const userList = users.map((user)=><User  {...user} key={user.id} />)
  return(
    <div>
      <h1 className="text-center text-success" >User Profiles</h1>
      <p>Note:Just user access his own profile</p>
        <div className="row" >
            <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2 ">
              <Link className="btn btn-outline-success" to="/login"  >Login</Link>
            </div>
            <div className="col-10 col-sm-10 col-lg-10 col-md-10 col-xl-10 ">
              <form className="float-right" onSubmit={handleSearch} >
                <input  type="search"  placeholder="Search" className="form-input" value={search} onChange={e=>setSearch(e.target.value)} />
                <input type="submit" value="Search" className="btn btn-outline-primary" />
              </form>
            </div>
        </div>
        {
          query === '' ? <div className="row">{userList}</div>:<div  >{
           query == false ? <div className="text-center  " >
                    <p >Your search - <del className="text-info" >{search}</del> - did not match any documents.</p>
                    <p>Suggestions:</p>
                    <ul className="navbar-nav" >
                        <li>Make sure that all words are spelled correctly.</li>
                        <li>Try different keywords.</li>
                        <li>Try more general keywords.</li>
                        <li>Try fewer keywords. </li>
                    </ul>
              </div>
                : <div className="row">{query.map((query)=> <Query {...query} key={query.id} /> )}</div>
          }</div>
        }
    </div>
  )
}
export default Home
