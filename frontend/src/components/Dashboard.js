import React from 'react'
import './Dashboard.css'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

// import listingsicon from '../Icons/ListingsIcon.png'
// import marketpriceicon from '../Icons/MarketPriceIcon.png'
// import producticon from '../Icons/ProductIcon.png'
// import profileicon from '../Icons/ProfileIcon.png'

const TopBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  justify-content: space-around;
`

const WelcomeBackMessage = styled.p`
  color: #142051;
  font-size: 24px;
`

const DivHolder = styled.div`
  width: 95%;
  height: 600px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 3%;
`
const LeftLinks = styled.div`
  display: flex;
  flex-direction: column;
  height: 80%;
  width: 50%;
  align-items: center;
`

const BotBar = styled.div`
  display: flex;
  background-color: #142051;
  color: white;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
`

function Dashboard() {
  return (
    <div>
      <TopBar>
        <h2>My Dashboard</h2>
        <p>Sign Out</p>
      </TopBar>

      <div>
        <WelcomeBackMessage>Welcome</WelcomeBackMessage>
      </div>

      <DivHolder>
        <LeftLinks>
          <Link to="/AddProduct" className="link-box">
            <h3>Add Product</h3>
            <p>Add product to your listings</p>
            {/* <img src={listingsicon} /> */}
          </Link>
          <Link to="/Listings" className="link-box">
            <h3>Listings</h3>
            <p>All of your listings in one place</p>
            {/* <img src={producticon} /> */}
          </Link>
        </LeftLinks>
      </DivHolder>

      <BotBar>
        <p>Contact</p>
        <p>About</p>
      </BotBar>
    </div>
  )
}

export default Dashboard
