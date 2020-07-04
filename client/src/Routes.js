import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
/* import paths */
import Home from './components/Home'
import About from './components/About'
import Signup from './components/Signup'
import Login from './components/Login'
import Profile from './components/users/Profile'
import EditProfile from './components/users/EditProfile'

const Routes = () => {
  return(
    <Router>
      <div className="container" >
          <Switch>
            <Route exact path="/profiles"  component={Home} />
            <Route exact path="/about"  component={About} />
            <Route exact path="/profiles/:id"  component={Profile} />
            <Route exact path="/profiles/edit/:id/"  component={EditProfile} />
            <Route exact path="/"  component={Signup} />
            <Route exact path="/login"  component={Login}/>
          </Switch>
      </div>
    </Router>
  )
}


export default Routes
