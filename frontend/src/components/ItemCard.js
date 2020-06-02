import React from 'react'
import styled from 'styled-components'

export default function ItemCard(props) {
  console.log('Item card props', props.idata)

  const ItemCard = styled.div`
    width: 95%;
    height: 95%;
    margin: 3%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 1px black solid;
  `

  const BottomDiv = styled.div`
    margin-bottom: 10px;
  `

  return (
    <ItemCard>
      <h2>{props.idata.name}</h2>
      <div>Price: {props.idata.price}</div>
      <div>Location: {props.idata.market_location}</div>
      <div>Quantity: {props.idata.quantity}</div>
      <BottomDiv> {props.idata.description}</BottomDiv>
    </ItemCard>
  )
}
