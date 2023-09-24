/** @format */

import React, { useState, useContext } from "react"
import { globalContext } from "../Context/GlobalState"
export const AddTransaction = () => {
  const { addTransactions } = useContext(globalContext)

  const [text, setText] = useState("")
  const [amount, setAmount] = useState(0)
  const handleSubmit = (e) => {
    e.preventDefault()
    const newTransaction = {
      id: Math.floor(Math.random() * 10000000),
      text,
      amount: +amount,
    }
    addTransactions(newTransaction)
  }
  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor='text'>Text:</label>
          <input
            type='text'
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
            placeholder='Enter Text...'
          />
        </div>
        <div className='form-control'>
          <label htmlFor='amount'>
            Amount:
            <br />
            (Negative - Expense, Positive - Income)
          </label>
          <input
            type='number'
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value)
            }}
            placeholder='Enter Number...'
          />
        </div>
        <button className='btn'>Add Transaction</button>
      </form>
    </>
  )
}
