import React from 'react'
import { useToggle } from '../hooks'
import AddItemForm from './AddItemForm'

const AddItem = () => {
  const { isToggled, toggle } = useToggle(false)
  return (
    <div>
      <button onClick={toggle}>+Add item to sell</button>
      {isToggled && <AddItemForm />}
    </div>
  )
}

export default AddItem
