import React from 'react'
import MemberInfo from './MemberInfo'
import AddItem from './AddItem'

const DashBoard = () => {
  return (
    <div>
      <h1>DashBoard</h1>
      <button>Log Out</button>
      <MemberInfo />

      <AddItem />
    </div>
  )
}

export default DashBoard
