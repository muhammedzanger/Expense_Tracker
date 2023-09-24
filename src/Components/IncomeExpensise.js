/** @format */

import React, { useContext } from "react"
import { globalContext } from "../Context/GlobalState"

export const IncomeExpensise = () => {
  const { transactions } = useContext(globalContext)
  const amounts = transactions.map((transaction) => transaction.amount)
  const inCome = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => acc + item, 0)
    .toFixed(2)
  const expences = amounts
    .filter((item) => item < 0)
    .reduce((acc, item) => acc + item, 0 * -1)
    .toFixed(2)
  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <div className='money plus'>{inCome}</div>
      </div>
      <div>
        <h4>Expense</h4>
        <div className='money minus'>{expences}</div>
      </div>
    </div>
  )
}
