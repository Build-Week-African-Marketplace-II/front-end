import React, { useState } from 'react'
import axios from 'axios'
import './AddProduct.css'
// import Popup from './Popup.js'

function AddProduct() {
  const [product, setProduct] = useState({
    market_location: '',

    name: '',
    description: '',
    price: '',
  })

  const handleChange = event => {
    setProduct({ ...product, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    setProduct({
      market_location: '',

      name: '',
      description: '',
      price: '',
    })

    axios
      .post('https://africanmarketplace2.herokuapp.com/api/products', product)
      .then(response => {
        console.log(response)
        // console.log(response.data);
        setProduct(response.data)
      })
      .catch(err => console.log(err.response))
  }

  return (
    <div className="add-product">
      {console.log(product)}
      <div className="add-product-left">
        <h1>Marketplace</h1>
        <h2>Add a product</h2>
      </div>
      <form
        onSubmit={event => handleSubmit(event)}
        className="add-product-right"
      >
        <label>
          Location:
          <input
            type="text"
            name="market_location"
            value={product.market_location}
            onChange={event => handleChange(event)}
          />
        </label>

        <label>
          Item:
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={event => handleChange(event)}
          />
        </label>
        <button type="submit">Add Product</button>
      </form>
    </div>
  )
}

export default AddProduct
