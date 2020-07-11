import React from 'react'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
/* import paths */
import Home from './components/Home'
import Signup from './components/Signup'
import Login from './components/Login'
import Profile from './components/users/Profile'
import EditProfile from './components/users/EditProfile'
import PatchProfile from './components/users/PatchProfile'
import CreateStatus from './components/profile_feed/CreateStatus'
import SingleStatus from './components/profile_feed/SingleStatus'
import EditStatus from './components/profile_feed/EditStatus'
import PatchStatus from './components/profile_feed/PatchStatus'



const Routes = (props) => {
  return(
    <Router>
      <div className="container" >

          <Switch>
            <Route exact path="/profiles"  component={Home} />
            <Route exact path="/profiles/:id"  component={Profile} />
            <Route exact path="/profiles/edit/:id/"  component={EditProfile} />
            <Route exact path="/profiles/patch/:id/"  component={PatchProfile} />
            <Route exact path="/"  component={Signup} />
            <Route exact path="/login"  component={Login}/>
            <Route exact path="/profiles/:id/status"  component={CreateStatus}/>
            <Route exact path="/profiles/:id/status-detail/:id/"  component={SingleStatus}/>
            <Route exact path="/profiles/:id/status-edit/:id/"  component={EditStatus}/>
            <Route exact path="/profiles/:id/status-patch/:id/"  component={PatchStatus}/>
          </Switch>
      </div>
    </Router>
  )
}


export default Routes
