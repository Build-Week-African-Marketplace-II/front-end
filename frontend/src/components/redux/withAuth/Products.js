import React from 'react'
import axiosWithAuth from './withAuth/axiosWithAuth'

function Products({ id, market_location, name, description, price }) {
  const deleteProduct = () => {
    axiosWithAuth()
      .delete(`/products/${id}`)
      .then(res => {
        console.log('Delete INFO', res)
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h2>{name}</h2>
      <p> {description} </p>
      <p> {market_location} </p>

      <p> {price} </p>
      <span onClick={deleteProduct}>X</span>
    </div>
  )
}

export default Products
