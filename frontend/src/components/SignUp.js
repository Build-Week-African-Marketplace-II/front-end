import React, { useState } from 'react'

const SignUp = () => {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: ""
  })

  const submitHandler = (e) => {
    e.preventDefault();


  }

  return (
    <div>
      <h1>Sign Up Form</h1>
      <form onSubmit={submitHandler}>

      </form>
    </div>
  )
}

export default SignUp
