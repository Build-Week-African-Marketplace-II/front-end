import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import ItemCard from './ItemCard'

export default function Listings() {
  const [product, setProduct] = useState([])

  useEffect(() => {
    axios
      .get('https://africanmarketplace2.herokuapp.com/api/products')
      .then(response => {
        setProduct(response.data)
        console.log(response)
      })
      .catch(error => {
        console.log('The data was not returned', error)
      })
  }, [])

  const ListContainer = styled.section`
    display: flex;
    flex-direction: column;
  `

  const TopBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;

    justify-content: space-around;
  `

  const TopBarLink = styled.a`
    text-decoration: none;
    color: #fe7a7c;
    height: 5%;
    align-self: center;
  `

  return (
    <ListContainer>
      <TopBar>
        <h2>MarketPlace</h2>
        <TopBarLink>
          <Link to="/DashBoard">Home</Link>
        </TopBarLink>
      </TopBar>

      {console.log(product)}

      {product.map(product => (
        <ItemCard key={product.id} idata={product} />
      ))}
    </ListContainer>
  )
}
