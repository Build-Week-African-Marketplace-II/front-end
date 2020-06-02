import React, { useState } from 'react'
import './App.css'

import { Route } from 'react-router-dom'

import Dashboard from './components/Dashboard'
import AddProduct from './components/AddProduct'
import Listings from './components/Listings'

import loginPage from './components/redux/loginPage'
import SignUpPage from './components/redux/SignUpPage'
import data from './data'
import { ProfileContext } from './components/redux/ProfileContext'

function App() {
  const [profile] = useState(data)
  return (
    <ProfileContext.Provider value={{ profile }}>
      <div className="App">
        <Route path="/" exact component={SignUpPage} />
        <Route path="/Login" exact component={loginPage} />

        <Route path="/DashBoard" component={Dashboard} />

        <Route path="/AddProduct" component={AddProduct} />
        <Route path="/Listings" component={Listings} />
      </div>
    </ProfileContext.Provider>
  )
}

export default App
