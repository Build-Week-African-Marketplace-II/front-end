import React from 'react'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'

import './App.css'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/SignUp">Sign Up</Link></li>
          <li><Link to="/LogIn">Log In</Link></li>
        </ul>
        <Switch>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
          <Route exact path="/LogIn">
            <LogIn />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
