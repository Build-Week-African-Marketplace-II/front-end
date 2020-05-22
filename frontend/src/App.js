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
          <li>
            <Link to="/LogIn">Log In</Link>
            <Link to="/SignUp">Sign Up</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/LogIn">
            <LogIn />
          </Route>
          <Route exact path="/SignUp">
            <SignUp />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
