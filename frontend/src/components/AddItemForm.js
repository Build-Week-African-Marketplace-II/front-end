import React from 'react'
import { useForm } from 'react-hook-form'

const AddItemForm = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>What are you selling?</label>
      <br />
      <input type="text" name="ItemName" ref={register} />
      <br />
      <label>Item description</label>
      <br />
      <textarea name="Description" ref={register} />
      <br />
      <label>Item Cost</label>
      <br />
      <input type="text" name="Cost" ref={register} />
      <br />
      <label>Quantity</label>
      <br />
      <input type="number" name="Quantity" ref={register({ min: 1 })} />
      <br />
      <input type="submit" />
    </form>
  )
}
export default AddItemForm
