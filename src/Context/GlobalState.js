/** @format */

import { createContext, useReducer } from "react"
import AppReducer from "./AppReducer"
const initialState = {
  transactions: [],
}

// create context
export const globalContext = createContext(initialState)

// provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)
  // action
  function deleteTransactions(id) {
    dispatch({
      type: "DELETE_TRANSACTIONS",
      payLoad: id,
    })
  }
  function addTransactions(transaction) {
    dispatch({
      type: "ADD_TRANSACTIONS",
      payLoad: transaction,
    })
  }
  return (
    <globalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransactions,
        addTransactions,
      }}>
      {children}
    </globalContext.Provider>
  )
}
