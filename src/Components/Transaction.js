/** @format */

import React, { useContext } from "react"
import { globalContext } from "../Context/GlobalState"
export const Transaction = ({ transaction }) => {
  const { deleteTransactions } = useContext(globalContext)
  const sign = transaction.amount < 0 ? "-" : "+"
  return (
    <li className={transaction.amount < 0 ? "minus" : "plus"}>
      {transaction.text}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        onClick={() => deleteTransactions(transaction.id)}
        className='delete-btn'>
        X
      </button>
    </li>
  )
}
