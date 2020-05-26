import React from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'

import { Switch, Route, Link } from 'react-router-dom'
import DashBoard from './Dashboard'

export const Nav = () => {
  return (
    <div>
      <ul className="navbar">
        <li>
          <Link to="/LogIn">Log In</Link>
          <Link to="/SignUp">Sign Up</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path="/LogIn" component={LogIn} />
        <Route exact path="/SignUp" component={SignUp} />
        <Route exact path="/Dashboard" component={DashBoard} />
      </Switch>
    </div>
  )
}

export default Nav
